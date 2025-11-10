import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <footer className="bg-black border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} TempatHosting. All rights reserved.</p>
          <div className="text-sm text-neutral-400">Fast, secure, and minimalist hosting with neon blue highlights.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
