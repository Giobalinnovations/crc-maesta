import Hero from '@/components/sections/hero';
import ScrollToTop from '@/components/scroll-to-top';
import AboutUs from '@/components/sections/about-us';

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/*  */}
        <Hero />
        <AboutUs />

        <ScrollToTop />
      </main>
    </>
  );
}
