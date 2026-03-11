import { villes } from '@/datas/villes';
import Link from 'next/link';

export function SEOFooterMesh({ currentCitySlug }: { currentCitySlug: string }) {
  // Get other cities, limit to 20 for the mesh to avoid massive footer
  const otherCities = villes
    .filter((v) => v.slug !== currentCitySlug)
    .slice(0, 20);

  return (
    <section className="py-16 bg-zinc-50 dark:bg-lumi-darkbg border-t border-zinc-200 dark:border-zinc-800/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            La sécurité partout en France
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Découvrez comment Lumi protège vos déplacements dans les autres villes de France.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {otherCities.map((ville) => (
            <Link
              key={ville.slug}
              href={`/ville/${ville.slug}`}
              className="text-zinc-600 hover:text-lumi-violet dark:text-zinc-400 dark:hover:text-lumi-pink transition-colors text-sm font-medium"
            >
              Sécurité à {ville.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
