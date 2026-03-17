import { Heart, Linkedin, Map, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-50 dark:bg-[#080808] border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo_color_text.png" alt="Lumi Logo" width={200} height={32} className="dark:hidden h-12 w-auto" style={{ width: 'auto' }} />
              <Image src="/logo_color_text_white.png" alt="Lumi Logo" width={200} height={32} className="hidden dark:block h-12 w-auto" style={{ width: 'auto' }} />
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm text-lg">
              Votre sécurité, éclairée. Une application mobile qui veille sur vous lors de vos déplacements quotidiens et nocturnes.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/lumi-safety/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-lumi-violet hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg text-lumi-black dark:text-white mb-6">L&apos;Application</h4>
            <ul className="space-y-4">
              <li><Link href="#alert" className="text-zinc-600 dark:text-zinc-400 hover:text-lumi-violet dark:hover:text-lumi-violet transition-colors flex items-center gap-2"><Shield size={16} /> L&apos;Alerte</Link></li>
              <li><Link href="#map" className="text-zinc-600 dark:text-zinc-400 hover:text-lumi-violet dark:hover:text-lumi-violet transition-colors flex items-center gap-2"><Map size={16} /> Carte collaborative</Link></li>
              <li><Link href="#resources" className="text-zinc-600 dark:text-zinc-400 hover:text-lumi-violet dark:hover:text-lumi-violet transition-colors flex items-center gap-2"><Heart size={16} /> Accompagnement</Link></li>
            </ul>
          </div>
          
          {/* <div>
            <h4 className="font-semibold text-lg text-lumi-black dark:text-white mb-6">Professionnels</h4>
            <ul className="space-y-4">
              <li><a href="mailto:contact@lumi-safety.com" className="text-zinc-600 dark:text-zinc-400 hover:text-lumi-violet dark:hover:text-lumi-violet transition-colors">Devenir partenaire</a></li>
              <li><a href="mailto:contact@lumi-safety.com" className="text-zinc-600 dark:text-zinc-400 hover:text-lumi-violet dark:hover:text-lumi-violet transition-colors">Espace professionnels</a></li>
              <li><a href="mailto:contact@lumi-safety.com" className="text-zinc-600 dark:text-zinc-400 hover:text-lumi-violet dark:hover:text-lumi-violet transition-colors">Associations</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 dark:text-zinc-500 text-sm">
            © {currentYear} Lumi. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-500">
            <Link href="/mentions-legales" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
