// All components statically imported — they SSR on first load and stay mounted.
// Images use loading="lazy" for deferred fetch, but once loaded they are browser-cached
// and never reload on scroll-back. This gives the best UX.

import Hero from './components/home/Hero';
import Trending from './components/home/Trending';
import Recommended from './components/home/Recommended';
import SeriesSpotlight from './components/home/SeriesSpotlight';
import NewlyAdded from './components/home/NewlyAdded';
import MembersOnly from './components/home/MembersOnly';
import AboutCreator from './components/home/AboutCreator';
import BingeSeries from './components/home/BingeSeries';
import SponsoredProducts from './components/home/SponsoredProducts';
import PremiumTease from './components/home/PremiumTease';
import EmailCTA from './components/home/EmailCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | DezinetVerse',
  description: 'Watch trending vlogs, exclusive series, and members-only content from the world of Dezinet.',
};

export default function Home() {
  const isLoggedIn = false;

  return (
    <main suppressHydrationWarning>

      {/* 1. Hero Slider */}
      <Hero isLoggedIn={isLoggedIn} />

      {/* 2. Viral Originals */}
      <Trending />

      {/* 3. Handpicked Today */}
      <Recommended isLoggedIn={isLoggedIn} />

      {/* 4. Series & Sagas */}
      <SeriesSpotlight />

      {/* 5. Newly Added */}
      <NewlyAdded />

      {/* 6. Members Only */}
      <MembersOnly />

      {/* 7. About Creator */}
      <AboutCreator />

      {/* 8. Binge-worthy Series */}
      <BingeSeries />

      {/* 9. Sponsored Products */}
      <SponsoredProducts />

      {/* 10. Premium Tease */}
      <PremiumTease />

      {/* 11. Email CTA */}
      <EmailCTA />

    </main>
  );
}
