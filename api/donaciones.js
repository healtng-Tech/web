import { put, list } from '@vercel/blob';

const CSV_HEADER = 'fecha,nombre,apellido,telefono,email,comentario';
const BLOB_PATH = 'donaciones/donaciones.csv';

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

    const timestamp = new Date().toISOString();
    const safeComment = (comentario || '').replace(/"/g, '""');
    const csvLine = `"${timestamp}","${nombre}","${apellido}","${telefono}","${email || ''}","${safeComment}"\n`;

    let existingContent = '';
    try {
      const { blobs } = await list({ prefix: 'donaciones/donaciones' });
      if (blobs.length > 0) {
        const response = await fetch(blobs[0].url);
        existingContent = await response.text();
        existingContent = existingContent.trimEnd() + '\n';
      }
    } catch {
      /* sin blob existente, se inicia desde cero */
    }

    const content = existingContent || CSV_HEADER + '\n';
    await put(BLOB_PATH, content + csvLine, {
      access: 'public',
      contentType: 'text/csv; charset=utf-8',
    });

    return Response.json({ success: true, message: 'Solicitud registrada correctamente' });
  } catch (error) {
    console.error('Error guardando donación:', error);
    return Response.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ message: 'Endpoint de donaciones activo' });
}
