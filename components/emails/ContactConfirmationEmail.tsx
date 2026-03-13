import * as React from 'react';

interface ContactConfirmationEmailProps {
  prenom: string;
}

// Auto-reply sent to professionals after submitting the contact form
export function ContactConfirmationEmail({ prenom }: ContactConfirmationEmailProps) {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', maxWidth: 560, margin: '0 auto', padding: 40, backgroundColor: '#fafafa' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 40, border: '1px solid #e4e4e7' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #5722CF, #f877af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Lumi
          </div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#18181b', textAlign: 'center', margin: '0 0 16px' }}>
          Merci {prenom} ! 🙏
        </h1>
        <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, textAlign: 'center', margin: '0 0 32px' }}>
          Nous avons bien reçu votre demande de partenariat. Notre équipe reviendra vers vous dans les plus brefs délais pour discuter de notre collaboration.
        </p>
        <div style={{ textAlign: 'center' }}>
          <a href="https://lumi-safety.com" style={{ display: 'inline-block', padding: '12px 32px', background: 'linear-gradient(135deg, #5722CF, #f877af)', color: '#ffffff', borderRadius: 12, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
            En savoir plus sur Lumi
          </a>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid #e4e4e7', margin: '32px 0 16px' }} />
        <p style={{ fontSize: 12, color: '#a1a1aa', textAlign: 'center', margin: 0 }}>
          © 2026 Lumi Safety — Votre sécurité, notre priorité.
        </p>
      </div>
    </div>
  );
}
