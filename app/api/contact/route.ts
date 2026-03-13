import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_EMAIL, CONTACT_EMAIL, AUDIENCE_ID } from '@/lib/resend';
import { ContactNotificationEmail } from '@/components/emails/ContactNotificationEmail';
import { ContactConfirmationEmail } from '@/components/emails/ContactConfirmationEmail';

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

    // Send notification to Lumi team
    const { error: notifError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      subject: `Nouveau partenaire : ${prenom} ${nom}`,
      react: ContactNotificationEmail({ nom, prenom, email, message }),
    });

    if (notifError) {
      console.error({ error: notifError }, 'Failed to send contact notification');
      return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
    }

    // Send confirmation to the professional
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Lumi — Nous avons bien reçu votre demande !',
      react: ContactConfirmationEmail({ prenom }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error({ error: err }, 'Contact route error');
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
