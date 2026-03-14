
interface ContactNotificationEmailProps {
  nom: string;
  prenom: string;
  email: string;
  message: string;
}

// Email sent to the Lumi team when a professional submits the contact form
export function ContactNotificationEmail({ nom, prenom, email, message }: ContactNotificationEmailProps) {
  return (
    <div style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: 600, margin: '0 auto', padding: '40px 20px', backgroundColor: '#f4f4f5' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 24, padding: '48px', boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.05)', border: '1px solid #e4e4e7', position: 'relative', overflow: 'hidden' }}>
        
        {/* Accent border */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 6, background: 'linear-gradient(180deg, #5722CF, #f877af)' }} />

        <div style={{ fontSize: 26, fontWeight: 800, color: '#18181b', marginBottom: 32, letterSpacing: '-0.5px' }}>
          Une nouvelle demande de partenariat !
        </div>

        <div style={{ backgroundColor: '#faf9ff', borderRadius: 16, padding: '24px', marginBottom: 32, border: '1px solid #f0ecfb' }}>
          <table style={{ width: '100%', fontSize: 15, color: '#18181b', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '12px 0', borderBottom: '1px solid #e4e4e7', fontWeight: 600, color: '#71717a', width: '30%' }}>Nom</td>
                <td style={{ padding: '12px 0', borderBottom: '1px solid #e4e4e7', fontWeight: 500 }}>{nom}</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 0', borderBottom: '1px solid #e4e4e7', fontWeight: 600, color: '#71717a' }}>Prénom</td>
                <td style={{ padding: '12px 0', borderBottom: '1px solid #e4e4e7', fontWeight: 500 }}>{prenom}</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 0', fontWeight: 600, color: '#71717a' }}>Email</td>
                <td style={{ padding: '12px 0', fontWeight: 500 }}>
                  <a href={`mailto:${email}`} style={{ color: '#5722CF', textDecoration: 'none' }}>{email}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginBottom: 16, fontSize: 14, fontWeight: 600, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Message du contact :
        </div>

        <div style={{ 
          padding: '24px', 
          backgroundColor: '#f8f8fa', 
          borderRadius: 16, 
          fontSize: 15, 
          color: '#27272a', 
          lineHeight: 1.7,
          fontStyle: 'italic',
          borderLeft: '4px solid #e4e4e7'
        }}>
          "{message}"
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href={`mailto:${email}?subject=Suite à votre demande de partenariat avec Lumi&body=Bonjour ${prenom},%0D%0A%0D%0AMerci d'avoir contacté Lumi...`} style={{ 
            display: 'inline-block', 
            padding: '14px 32px', 
            backgroundColor: '#18181b', 
            color: '#ffffff', 
            borderRadius: 100, 
            textDecoration: 'none', 
            fontWeight: 600, 
            fontSize: 14,
            boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.2)'
          }}>
            Répondre à {prenom}
          </a>
        </div>
      </div>
    </div>
  );
}
