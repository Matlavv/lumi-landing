import * as React from 'react';

interface ContactNotificationEmailProps {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

// Email sent to the Lumi team when a professional submits the contact form
export function ContactNotificationEmail({ nom, prenom, email, message }: ContactNotificationEmailProps) {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', maxWidth: 560, margin: '0 auto', padding: 40, backgroundColor: '#fafafa' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 40, border: '1px solid #e4e4e7' }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: '#5722CF', marginBottom: 24 }}>
          📩 Nouveau contact professionnel
        </div>
        <table style={{ width: '100%', fontSize: 14, color: '#18181b' }}>
          <tbody>
            <tr><td style={{ padding: '8px 0', fontWeight: 600, color: '#71717a' }}>Nom</td><td>{nom}</td></tr>
            <tr><td style={{ padding: '8px 0', fontWeight: 600, color: '#71717a' }}>Prénom</td><td>{prenom}</td></tr>
            <tr><td style={{ padding: '8px 0', fontWeight: 600, color: '#71717a' }}>Email</td><td><a href={`mailto:${email}`}>{email}</a></td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: 24, padding: 16, backgroundColor: '#f4f4f5', borderRadius: 12, fontSize: 14, color: '#3f3f46', lineHeight: 1.7 }}>
          <strong>Message :</strong><br />{message}
        </div>
      </div>
    </div>
  );
}
