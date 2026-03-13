import { About } from '@/components/About';
import { EmailCapture } from '@/components/EmailCapture';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { MapFeature } from '@/components/MapFeature';
import { Navbar } from '@/components/Navbar';
import { Professionals } from '@/components/Professionals';
import { SOSFeature } from '@/components/SOSFeature';
import { Waitlist } from '@/components/Waitlist';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-white dark:bg-black overflow-hidden relative">
        <Hero />
        <About />
        <SOSFeature />
        <MapFeature />
        <EmailCapture />
        <Professionals />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
