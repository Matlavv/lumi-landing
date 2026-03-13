import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité - Lumi',
  description: 'Politique de confidentialité de Lumi, application de sécurité urbaine.',
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Link href="/" className="text-lumi-violet hover:underline text-sm mb-8 inline-block">← Retour à l&apos;accueil</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-12">Politique de Confidentialité</h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">1. Collecte des données</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Dans le cadre de l&apos;utilisation du site <strong>lumi-safety.com</strong>, nous collectons uniquement votre adresse email lorsque vous vous inscrivez à notre liste d&apos;attente ou remplissez un formulaire de contact. Aucune autre donnée personnelle n&apos;est collectée automatiquement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">2. Utilisation des données</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="text-zinc-600 dark:text-zinc-400 list-disc pl-6 space-y-2">
                <li>Vous informer du lancement de l&apos;application Lumi</li>
                <li>Répondre à vos demandes de contact ou de partenariat</li>
                <li>Vous envoyer des annonces importantes liées au projet</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">3. Partage des données</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Vos données personnelles ne sont en aucun cas vendues, échangées ou louées à des tiers. Elles peuvent être partagées avec nos sous-traitants techniques (hébergement, envoi d&apos;emails) dans le strict cadre de leur mission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">4. Conservation des données</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Vos données sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et en tout état de cause pour une durée maximale de 3 ans à compter de votre dernière interaction avec nous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">5. Vos droits</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à : <a href="mailto:contact@lumi-safety.com" className="text-lumi-violet hover:underline">contact@lumi-safety.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">6. Cookies</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Le site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement (préférence de thème). Aucun cookie de suivi ou publicitaire n&apos;est utilisé.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">7. Contact</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Pour toute question relative à la protection de vos données, contactez-nous à : <a href="mailto:contact@lumi-safety.com" className="text-lumi-violet hover:underline">contact@lumi-safety.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
