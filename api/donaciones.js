import { put, list, get } from '@vercel/blob';
import { Resend } from 'resend';

const CSV_HEADER = 'fecha,nombre,apellido,telefono,email,comentario';
const BLOB_PATH = 'donaciones/donaciones.csv';

function getToken() {
  return process.env.BLOB_READ_WRITE_TOKEN;
}

export const config = {
  runtime: 'nodejs',
};

async function readExistingCsv(token) {
  try {
    const { blobs } = await list({ token, prefix: 'donaciones/donaciones' });
    if (blobs.length > 0) {
      const blobData = await get(blobs[0].url, { token });
      if (blobData?.body) {
        const reader = blobData.body.getReader();
        const chunks = [];
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(new TextDecoder().decode(value));
        }
        return chunks.join('').trimEnd() + '\n';
      }
    }
  } catch (err) {
    console.error('Error leyendo CSV existente:', err?.message || err);
  }
  return '';
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, apellido, telefono, email, comentario } = body;

    if (!nombre || !apellido || !telefono) {
      return Response.json({ error: 'Nombre, apellido y teléfono son obligatorios' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      return Response.json({ error: 'Email inválido' }, { status: 400 });
    }

    const token = getToken();
    if (!token) {
      console.error('BLOB_READ_WRITE_TOKEN no encontrado en el entorno');
      return Response.json({ error: 'Configuración del servidor incompleta' }, { status: 500 });
    }

    const timestamp = new Date().toISOString();
    const safeComment = (comentario || '').replace(/"/g, '""');
    const csvLine = `"${timestamp}","${nombre}","${apellido}","${telefono}","${email || ''}","${safeComment}"\n`;

    const existingContent = await readExistingCsv(token);
    const content = existingContent || CSV_HEADER + '\n';

    await put(BLOB_PATH, content + csvLine, {
      access: 'private',
      contentType: 'text/csv; charset=utf-8',
      allowOverwrite: true,
      token,
    });

    try {
      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        console.error('RESEND_API_KEY no definido en el entorno');
        return Response.json({ success: true, message: 'Solicitud registrada correctamente (email no configurado)' });
      }
      const resend = new Resend(apiKey);
      const to = process.env.NOTIFICATION_EMAIL || 'healtng@gmail.com';
      const result = await resend.emails.send({
        from: 'Healtng Donaciones <healtng@gmail.com>',
        to,
        subject: `Nueva solicitud de férula — ${nombre} ${apellido}`,
        text: [
          `Nombre: ${nombre} ${apellido}`,
          `Teléfono: ${telefono}`,
          `Email: ${email || 'No proporcionado'}`,
          `Comentario: ${comentario || 'Ninguno'}`,
          `Fecha: ${timestamp}`,
        ].join('\n'),
        html: [
          '<h2>Nueva solicitud de férula</h2>',
          '<table style="border-collapse:collapse;width:100%">',
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Nombre</td><td>${nombre} ${apellido}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Teléfono</td><td>${telefono}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Email</td><td>${email || '—'}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Comentario</td><td>${comentario || '—'}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Fecha</td><td>${timestamp}</td></tr>`,
          '</table>',
        ].join(''),
      });
      console.log('Email enviado OK, id:', result?.data?.id || result?.id || 'ok');
    } catch (emailErr) {
      console.error('Error enviando email:', emailErr?.message || emailErr, emailErr?.stack);
      return Response.json({ success: true, message: `Solicitud guardada. Email error: ${emailErr?.message || 'desconocido'}` });
    }

    return Response.json({ success: true, message: 'Solicitud registrada correctamente' });
  } catch (error) {
    console.error('Error guardando donación:', error?.message || error);
    return Response.json({ error: error?.message || 'Error interno del servidor' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ message: 'Endpoint de donaciones activo' });
}
