
// Welcome email sent to users who join the waitlist
export function WelcomeEmail() {
  return (
    <div style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: 600, margin: '0 auto', padding: '40px 20px', backgroundColor: '#f8f8fa' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 24, padding: '48px 40px', boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)', border: '1px solid #e4e4e7' }}>
        
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="https://lumi-safety.com/logo_color_text.png" alt="Lumi" width="120" style={{ display: 'inline-block' }} />
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#18181b', textAlign: 'center', margin: '0 0 16px', letterSpacing: '-0.3px' }}>
          Merci pour votre intérêt pour Lumi ! 💜
        </h1>

        <p style={{ fontSize: 15, color: '#52525b', lineHeight: 1.7, textAlign: 'center', margin: '0 0 32px' }}>
          Vous faites partie des premiers à croire en notre mission. Lumi, c&apos;est l&apos;application qui vous accompagne pour des déplacements plus sereins en ville.
        </p>

        {/* Features */}
        <div style={{ backgroundColor: '#faf9ff', borderRadius: 16, padding: 24, marginBottom: 32, border: '1px solid #f0ecfb' }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: '#5722CF', margin: '0 0 20px', textAlign: 'center' }}>
            Ce qui vous attend :
          </h2>
          
          <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td width="40" style={{ verticalAlign: 'top', paddingBottom: 16 }}>
                  <span style={{ fontSize: 22 }}>🗺️</span>
                </td>
                <td style={{ paddingBottom: 16 }}>
                  <strong style={{ fontSize: 14, color: '#18181b' }}>Carte collaborative</strong>
                  <br />
                  <span style={{ fontSize: 13, color: '#52525b', lineHeight: 1.5 }}>Signalez et consultez les zones à risque en temps réel avec la communauté.</span>
                </td>
              </tr>
              <tr>
                <td width="40" style={{ verticalAlign: 'top', paddingBottom: 16 }}>
                  <span style={{ fontSize: 22 }}>🚨</span>
                </td>
                <td style={{ paddingBottom: 16 }}>
                  <strong style={{ fontSize: 14, color: '#18181b' }}>Bouton d&apos;urgence</strong>
                  <br />
                  <span style={{ fontSize: 13, color: '#52525b', lineHeight: 1.5 }}>Alertez vos proches, les utilisateurs à proximité et les secours en un seul geste.</span>
                </td>
              </tr>
              <tr>
                <td width="40" style={{ verticalAlign: 'top' }}>
                  <span style={{ fontSize: 22 }}>🤝</span>
                </td>
                <td>
                  <strong style={{ fontSize: 14, color: '#18181b' }}>Accompagnement post-agression</strong>
                  <br />
                  <span style={{ fontSize: 13, color: '#52525b', lineHeight: 1.5 }}>Mise en relation avec des psychologues et associations pour ne jamais rester seul·e.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tagline + CTA */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p style={{ fontSize: 15, color: '#3f3f46', marginBottom: 20, fontWeight: 500, fontStyle: 'italic' }}>
            La sécurité n&apos;a pas de prix, mais elle a désormais une app.
          </p>
          <a href="https://lumi-safety.com" style={{
            display: 'inline-block',
            padding: '14px 36px',
            backgroundColor: '#5722CF',
            color: '#ffffff',
            borderRadius: 100,
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 15,
          }}>
            Découvrir Lumi
          </a>
        </div>

        {/* Footer */}
        <hr style={{ border: 'none', borderTop: '1px solid #f4f4f5', margin: '0 0 24px' }} />
        <p style={{ fontSize: 14, color: '#71717a', textAlign: 'center', margin: '0 0 12px' }}>
          Suivez notre progression et partagez Lumi autour de vous. 💜
        </p>
        <p style={{ fontSize: 12, color: '#a1a1aa', textAlign: 'center', margin: 0 }}>
          © 2026 Lumi Safety — Votre sécurité, notre priorité.
        </p>
      </div>
    </div>
  );
}
