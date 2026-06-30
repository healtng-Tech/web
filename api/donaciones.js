import { put, list, get } from '@vercel/blob';

const CSV_HEADER = 'fecha,nombre,apellido,telefono,email,comentario';
const BLOB_PATH = 'donaciones/donaciones.csv';

function getToken() {
  return process.env.BLOB_READ_WRITE_TOKEN;
}

export const config = {
  runtime: 'nodejs',
};

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

    let existingContent = '';
    try {
      const { blobs } = await list({ token, prefix: 'donaciones/donaciones' });
      if (blobs.length > 0) {
        const blobData = await get(blobs[0].url, { token });
        if (blobData?.body) {
          const stream = blobData.body;
          const reader = stream.getReader();
          const chunks = [];
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            chunks.push(new TextDecoder().decode(value));
          }
          existingContent = chunks.join('').trimEnd() + '\n';
        }
      }
    } catch (listErr) {
      console.error('Error leyendo CSV existente:', listErr?.message || listErr);
    }

    const content = existingContent || CSV_HEADER + '\n';
    await put(BLOB_PATH, content + csvLine, {
      access: 'private',
      contentType: 'text/csv; charset=utf-8',
      allowOverwrite: true,
      token,
    });

    return Response.json({ success: true, message: 'Solicitud registrada correctamente' });
  } catch (error) {
    console.error('Error guardando donación:', error?.message || error);
    return Response.json({ error: error?.message || 'Error interno del servidor' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ message: 'Endpoint de donaciones activo' });
}
