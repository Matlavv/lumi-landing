import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_EMAIL, AUDIENCE_ID } from '@/lib/resend';
import { WelcomeEmail } from '@/components/emails/WelcomeEmail';

export async function POST(req: NextRequest) {
  try {
    const { email, type = 'newsletter' } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    // Store contact in Resend Audience
    if (AUDIENCE_ID) {
      const { error: contactError } = await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
        unsubscribed: false,
      });
      if (contactError) {
        console.error('Erreur Resend Audience:', contactError);
      } else {
        console.log(`Email ${email} ajouté à l'audience ${AUDIENCE_ID}`);
      }
    } else {
      console.warn('RESEND_AUDIENCE_ID n\'est pas défini, le contact n\'a pas été sauvegardé dans Resend.');
    }

    // Send welcome email
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: type === 'waitlist' ? 'Bienvenue sur la liste d\'attente Lumi !' : 'Merci pour votre inscription à Lumi !',
      react: WelcomeEmail({ type: type as 'waitlist' | 'newsletter' }),
    });

    if (error) {
      console.error({ error }, 'Failed to send subscribe email');
      return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error({ error: err }, 'Subscribe route error');
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
