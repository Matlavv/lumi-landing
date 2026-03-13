import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

export const resend = new Resend(process.env.RESEND_API_KEY);
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Lumi <onboarding@resend.dev>';
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@lumi-safety.com';
export const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';
