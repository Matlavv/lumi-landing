import { CitySecurityIntro } from '@/components/CitySecurityIntro';
import { Footer } from '@/components/Footer';
import { HeroCity } from '@/components/HeroCity';
import { Navbar } from '@/components/Navbar';
import { SEOFooterMesh } from '@/components/SEOFooterMesh';
import { Waitlist } from '@/components/Waitlist';
import { WhyLumiCity } from '@/components/WhyLumiCity';
import { villes } from '@/datas/villes';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return villes.map((v) => ({
    slug: v.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const ville = villes.find((v) => v.slug === resolvedParams.slug);
  
  if (!ville) {
    return {};
  }

  const quartiersList = ville.quartiers.join(', ');

  return {
    title: `Lumi - Sécurité et protection à ${ville.name}`,
    description: `Découvrez comment Lumi protège vos déplacements à ${ville.name}. Que vous soyez à ${quartiersList}, sortez l'esprit tranquille avec notre application de sécurité urbaine.`,
    keywords: [
      `sécurité ${ville.name}`,
      `application sécurité ${ville.name}`,
      `quartiers sécurisés ${ville.name}`,
      `sortir ${ville.name} sécurité`,
      ...ville.quartiers.map(q => `sécurité ${q}`),
    ],
  };
}

export default async function CityPage({ params }: Props) {
  const resolvedParams = await params;
  const ville = villes.find((v) => v.slug === resolvedParams.slug);
  
  if (!ville) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-white dark:bg-black overflow-hidden relative">
        <HeroCity cityName={ville.name} />
        <CitySecurityIntro cityName={ville.name} quartiers={ville.quartiers} />
        <WhyLumiCity cityName={ville.name} />
        <Waitlist />
      </main>
      <SEOFooterMesh currentCitySlug={ville.slug} />
      <Footer />
    </>
  );
}
