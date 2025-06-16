import { Suspense } from 'react';
import dynamic from 'next/dynamic';
// import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Journey from '@/components/Journey';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Project';
import ContactMe from '@/components/ContactMe';
import { ThemeProvider } from '@/lib/theme-provider';
import { MotionProvider } from '@/lib/motion-provider';
import { HeroParallaxDemo } from '@/components/Products';
import { BackgroundBeams } from '@/components/ui/background-beams';

// Dynamically import components with loading
const DynamicHeader = dynamic(() => import('@/components/Header'), { 
  loading: () => <div>Loading...</div> 
});

export default function Home() {
  return (
    <ThemeProvider>
      <MotionProvider>
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicHeader />
            <AboutMe />
            <Journey />
            <TechStack />
            <HeroParallaxDemo/>
            <Projects />
            <ContactMe />
            <BackgroundBeams/>
          </Suspense>
        </main>
      </MotionProvider>
    </ThemeProvider>
  );
}