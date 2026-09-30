import { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
import Footer from './components/Footer';
import LiquidBackground from './components/LiquidBackground';
import ClickRipple from './components/ClickRipple';
import FishLoading from './components/FishLoading';
const WhaleAnimation = lazy(() => import('./components/WhaleAnimation'));

export default function App() {
  // Specular mouse position tracker for liquid spotlight elements
  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const cards = document.querySelectorAll<HTMLElement>('.apple-glass, .apple-glass-hover');
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        });
        ticking = false;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-sky-500/30 selection:text-white relative">
      {/* Dynamic 60fps Liquid Background Mesh */}
      <LiquidBackground />

      {/* Screen Click Visual Ripple Feedback */}
      <ClickRipple />

      {/* Animated 3D Whale Swimming Across Screen */}
      <Suspense fallback={<FishLoading />}>
        <WhaleAnimation />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Suspense fallback={<div className="h-screen" />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-screen" />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div className="h-screen" />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}
