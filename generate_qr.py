import qrcode
import cairosvg
from PIL import Image
import io

# SVG with only the icon (two diamond shapes, no text)
icon_svg = '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 68">
  <path fill="#002ee5" d="M74.76,43.58l-34.27,17.2c-.42.21-.93.21-1.34,0L4.72,43.56c-1.11-.56-1.11-2.13,0-2.69l16.29-8.13,18.15,9.08c.35.19.76.19,1.11,0l18.19-9.11,16.29,8.18c1.11.56,1.11,2.13,0,2.69"/>
  <path fill="#00ff92" d="M75.22,24.35l-16.75,8.39-17.98-9.04c-.42-.21-.93-.21-1.34,0l-18.12,9.04L4.63,24.54c-1.11-.56-1.11-2.13,0-2.69L39.16,4.61c.35-.19.76-.16,1.11,0l34.95,17.5c.93.49.93,1.78,0,2.25"/>
</svg>'''

# Convert icon SVG to PNG (200x200 with transparent background)
icon_png_bytes = cairosvg.svg2png(bytestring=icon_svg.encode(), output_width=180, output_height=180)
logo = Image.open(io.BytesIO(icon_png_bytes)).convert("RGBA")

# Add white rounded background behind logo
bg_size = 200
background = Image.new("RGBA", (bg_size, bg_size), (255, 255, 255, 255))
logo_x = (bg_size - logo.width) // 2
logo_y = (bg_size - logo.height) // 2
background.paste(logo, (logo_x, logo_y), logo)
logo_with_bg = background

# Generate QR code with high error correction (H = 30%) to allow logo overlay
qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=4,
)
qr.add_data("http://www.healtng.com")
qr.make(fit=True)

qr_img = qr.make_image(fill_color="#002ee5", back_color="white").convert("RGBA")

# Center the logo on the QR code
qr_w, qr_h = qr_img.size
logo_size = int(qr_w * 0.22)
logo_with_bg = logo_with_bg.resize((logo_size, logo_size), Image.LANCZOS)

paste_x = (qr_w - logo_size) // 2
paste_y = (qr_h - logo_size) // 2
qr_img.paste(logo_with_bg, (paste_x, paste_y), logo_with_bg)

output_path = "/Users/gus/Developer/healtng-web/healtng_qr.png"
qr_img.save(output_path)
print(f"QR guardado en: {output_path}")
print(f"Tamaño QR: {qr_img.size}")
