import { put, list, get } from '@vercel/blob';
import { Resend } from 'resend';

const CSV_HEADER = 'fecha,nombre_centro,responsable,telefono,email,direccion,comentario';
const BLOB_PATH = 'centros-acopio/centros.csv';

function getToken() {
  return process.env.BLOB_READ_WRITE_TOKEN;
}

export const config = {
  runtime: 'nodejs',
};

async function readExistingCsv(token) {
  try {
    const { blobs } = await list({ token, prefix: 'centros-acopio/centros' });
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
    const { nombreCentro, responsable, telefono, email, direccion, comentario } = body;

    if (!nombreCentro || !responsable || !telefono) {
      return Response.json({ error: 'Nombre del centro, responsable y teléfono son obligatorios' }, { status: 400 });
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
    const safeDir = (direccion || '').replace(/"/g, '""');
    const csvLine = `"${timestamp}","${nombreCentro}","${responsable}","${telefono}","${email || ''}","${safeDir}","${safeComment}"\n`;

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
        console.error('RESEND_API_KEY no definido');
        return Response.json({ success: true, message: 'Centro registrado (email no configurado: falta RESEND_API_KEY)' });
      }
      const resend = new Resend(apiKey);
      const to = process.env.NOTIFICATION_EMAIL || 'soporte@healtng.com';
      const cc = process.env.CC_EMAIL ? process.env.CC_EMAIL.split(',').map(s => s.trim()).filter(Boolean) : [];
      const emailOpts = {
        from: 'onboarding@resend.dev',
        to,
        subject: `Nuevo centro de acopio — ${nombreCentro}`,
        text: [
          `Centro: ${nombreCentro}`,
          `Responsable: ${responsable}`,
          `Teléfono: ${telefono}`,
          `Email: ${email || 'No proporcionado'}`,
          `Dirección: ${direccion || 'No proporcionada'}`,
          `Comentario: ${comentario || 'Ninguno'}`,
          `Fecha: ${timestamp}`,
        ].join('\n'),
        html: [
          '<h2>Nuevo centro de acopio registrado</h2>',
          '<table style="border-collapse:collapse;width:100%">',
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Centro</td><td>${nombreCentro}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Responsable</td><td>${responsable}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Teléfono</td><td>${telefono}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Email</td><td>${email || '—'}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Dirección</td><td>${direccion || '—'}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Comentario</td><td>${comentario || '—'}</td></tr>`,
          `<tr><td style="padding:4px 12px 4px 0;font-weight:bold">Fecha</td><td>${timestamp}</td></tr>`,
          '</table>',
        ].join(''),
      };
      if (cc.length > 0) emailOpts.cc = cc;
      const result = await resend.emails.send(emailOpts);
      console.log('Email enviado OK');
    } catch (emailErr) {
      console.error('Error enviando email:', emailErr?.message || emailErr, emailErr?.stack);
    }

    return Response.json({ success: true, message: 'Centro de acopio registrado correctamente' });
  } catch (error) {
    console.error('Error guardando centro de acopio:', error?.message || error);
    return Response.json({ error: error?.message || 'Error interno del servidor' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ message: 'Endpoint de centros de acopio activo' });
}
