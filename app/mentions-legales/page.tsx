import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales - Lumi',
  description: 'Mentions légales de Lumi, application de sécurité urbaine.',
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Link href="/" className="text-lumi-violet hover:underline text-sm mb-8 inline-block">← Retour à l&apos;accueil</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-12">Mentions Légales</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">1. Éditeur du site</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Le site <strong>lumi-safety.com</strong> est édité par Lumi Safety.<br />
                Email : <a href="mailto:contact@lumi-safety.com" className="text-lumi-violet hover:underline">contact@lumi-safety.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">2. Hébergement</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">3. Propriété intellectuelle</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                L&apos;ensemble des contenus présents sur le site (textes, images, graphismes, logos, icônes) sont la propriété exclusive de Lumi Safety, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">4. Responsabilité</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Lumi Safety s&apos;efforce de fournir des informations aussi précises que possible. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour de ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">5. Contact</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Pour toute question concernant ces mentions légales, veuillez nous contacter à l&apos;adresse : <a href="mailto:contact@lumi-safety.com" className="text-lumi-violet hover:underline">contact@lumi-safety.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
