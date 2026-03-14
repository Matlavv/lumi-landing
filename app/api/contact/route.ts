import { ContactConfirmationEmail } from '@/components/emails/ContactConfirmationEmail';
import { ContactNotificationEmail } from '@/components/emails/ContactNotificationEmail';
import { AUDIENCE_ID, CONTACT_EMAIL, FROM_EMAIL, resend } from '@/lib/resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { nom, prenom, email, message } = await req.json();

    if (!nom || !prenom || !email || !message) {
      return NextResponse.json({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    // Store contact in Resend Audience
    if (AUDIENCE_ID) {
      const { error: contactError } = await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
        firstName: prenom,
        lastName: nom,
        unsubscribed: false,
      });
      if (contactError) {
        console.error('Erreur Resend Audience (Professionnel):', contactError);
      } else {
        console.log(`Professionnel ${email} ajouté à l'audience ${AUDIENCE_ID}`);
      }
    } else {
      console.warn('RESEND_AUDIENCE_ID n\'est pas défini, le professionnel n\'a pas été sauvegardé dans Resend.');
    }

    // Send both emails in a single batch to avoid Resend rate limit (2 req/s)
    const { error: batchError } = await resend.batch.send([
      {
        from: FROM_EMAIL,
        to: CONTACT_EMAIL,
        subject: `Nouvelle demande de partenariat : ${prenom} ${nom}`,
        react: ContactNotificationEmail({ nom, prenom, email, message }),
      },
      {
        from: FROM_EMAIL,
        to: email,
        subject: 'Lumi — Nous avons bien reçu votre demande !',
        react: ContactConfirmationEmail({ prenom }),
      },
    ]);

    if (batchError) {
      console.error({ error: batchError }, 'Failed to send contact emails');
      return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error({ error: err }, 'Contact route error');
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
