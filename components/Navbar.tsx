'use client';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#about' },
    { name: 'Alerte', href: '#sos' },
    { name: 'Carte', href: '#map' },
    { name: 'Professionnels', href: '#professionals' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-lumi-darkbg/80 backdrop-blur-lg border-b border-zinc-200 dark:border-white/5 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center">
          <Image src="/logo_text_black.png" alt="Lumi Logo" width={120} height={40} className="dark:hidden h-8 w-auto transition-transform hover:scale-105" />
          <Image src="/logo_text_white.png" alt="Lumi Logo" width={120} height={40} className="hidden dark:block h-8 w-auto transition-transform hover:scale-105" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-zinc-600 hover:text-lumi-violet dark:text-zinc-300 dark:hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button variant="gradient" size="sm" className="ml-2">
            Rejoindre la liste d'attente
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4 relative z-10">
          <ThemeToggle />
          <button 
            className="p-2 text-zinc-900 dark:text-zinc-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white dark:bg-lumi-darkbg flex flex-col items-center justify-center p-6 transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col items-center gap-8 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-zinc-900 dark:text-white"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full h-px bg-zinc-200 dark:bg-white/10 my-4" />
          <Button variant="gradient" className="w-full text-lg h-14" onClick={() => setMobileMenuOpen(false)}>
            Rejoindre la liste d'attente
          </Button>
        </nav>
      </div>
    </header>
  );
}
