import * as React from 'react';

interface WelcomeEmailProps {
  type: 'waitlist' | 'newsletter';
}

export function WelcomeEmail({ type }: WelcomeEmailProps) {
  const title = type === 'waitlist'
    ? 'Bienvenue sur la liste d\'attente Lumi ! 🎉'
    : 'Merci pour votre inscription ! 💜';

  const body = type === 'waitlist'
    ? 'Vous faites désormais partie des premiers à être informés du lancement de Lumi. Nous vous préviendrons dès que l\'application sera disponible.'
    : 'Vous recevrez nos actualités importantes concernant Lumi. Aucun spam, promis.';

  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', maxWidth: 560, margin: '0 auto', padding: 40, backgroundColor: '#fafafa' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 16, padding: 40, border: '1px solid #e4e4e7' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #5722CF, #f877af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Lumi
          </div>
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#18181b', textAlign: 'center', margin: '0 0 16px' }}>
          {title}
        </h1>
        <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, textAlign: 'center', margin: '0 0 32px' }}>
          {body}
        </p>
        <div style={{ textAlign: 'center' }}>
          <a href="https://lumi-safety.com" style={{ display: 'inline-block', padding: '12px 32px', background: 'linear-gradient(135deg, #5722CF, #f877af)', color: '#ffffff', borderRadius: 12, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
            Découvrir Lumi
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
