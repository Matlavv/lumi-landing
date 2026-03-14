
interface ContactConfirmationEmailProps {
  prenom: string;
}

// Auto-reply sent to professionals after submitting the contact form
export function ContactConfirmationEmail({ prenom }: ContactConfirmationEmailProps) {
  return (
    <div style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: 600, margin: '0 auto', padding: '40px 20px', backgroundColor: '#f9f8fc' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 24, padding: '40px 48px', boxShadow: '0 24px 48px -12px rgba(87, 34, 207, 0.08), 0 4px 24px rgba(0, 0, 0, 0.02)', border: '1px solid rgba(87, 34, 207, 0.05)' }}>
        
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="https://lumi-safety.com/logo_color_text.png" alt="Lumi" width="120" style={{ display: 'inline-block' }} />
        </div>

        {/* Content Section */}
        <h1 style={{ fontSize: 24, fontWeight: 700, color: '#18181b', textAlign: 'center', margin: '0 0 24px', letterSpacing: '-0.5px' }}>
          Merci pour votre message, {prenom} !
        </h1>
        
        <p style={{ fontSize: 16, color: '#3f3f46', lineHeight: 1.6, textAlign: 'left', margin: '0 0 20px' }}>
          Nous avons bien reçu votre demande et tenions à vous remercier chaleureusement pour votre intérêt envers <strong style={{color: '#5722CF'}}>Lumi</strong>.
        </p>

        <p style={{ fontSize: 16, color: '#3f3f46', lineHeight: 1.6, textAlign: 'left', margin: '0 0 32px' }}>
          Chez Lumi, nous construisons plus qu'une simple application : nous développons un véritable écosystème de sécurité et d'entraide. Les professionnels comme vous (associations, psychologues, institutions) sont le cœur battant de notre dispositif d'accompagnement.
        </p>

        {/* Special Info Box */}
        <div style={{ backgroundColor: '#f8f6fd', borderLeft: '4px solid #5722CF', padding: '20px 24px', borderRadius: '0 12px 12px 0', marginBottom: 40 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ width: 32, verticalAlign: 'top', paddingTop: 2 }}>
                  <span style={{ fontSize: 20 }}>⏱</span>
                </td>
                <td>
                  <p style={{ margin: 0, fontSize: 15, color: '#27272a', lineHeight: 1.6, fontWeight: 500 }}>
                    Notre équipe étudie actuellement votre profil. Nous reviendrons vers vous sous <strong>48 heures</strong> pour échanger de vive voix sur les possibilités de collaboration.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <a href="https://lumi-safety.com" style={{ 
            display: 'inline-block', 
            padding: '16px 36px', 
            background: 'linear-gradient(135deg, #5722CF, #f877af)', 
            color: '#ffffff', 
            borderRadius: 100, 
            textDecoration: 'none', 
            fontWeight: 600, 
            fontSize: 15,
            boxShadow: '0 8px 16px -4px rgba(248, 119, 175, 0.3)'
          }}>
            Découvrir notre mission
          </a>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f4f4f5', margin: '0 0 32px' }} />
        
        {/* Footer */}
        <p style={{ fontSize: 13, color: '#71717a', textAlign: 'center', margin: '0 0 12px' }}>
          Ensemble, redéfinissons la sécurité urbaine.
        </p>
        <p style={{ fontSize: 12, color: '#a1a1aa', textAlign: 'center', margin: 0 }}>
          © 2026 Lumi Safety — Votre sécurité, notre priorité.<br />
          Paris, France
        </p>
      </div>
    </div>
  );
}
