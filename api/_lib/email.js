import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'healtng@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'Healtng Donaciones <healtng@gmail.com>';

export async function sendNotification({ subject, text, html }) {
  if (!resend) {
    console.log('RESEND_API_KEY no configurado, email no enviado');
    return;
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject,
      text,
      html,
    });
    console.log(`Email enviado a ${NOTIFICATION_EMAIL}: ${subject}`);
  } catch (err) {
    console.error('Error enviando email:', err?.message || err);
  }
}
