import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/5 border-b border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'backdrop-blur-sm bg-white/0 border-b border-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-white">
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="text-white">Tempat</span>
          <span className="text-cyan-400">Hosting</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
          <a href="#features" className="hover:text-white">Why Us</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </div>
        <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 text-black px-4 py-2 font-semibold hover:bg-cyan-400 transition-colors">
          <Rocket className="w-4 h-4" /> Get Started
        </a>
      </nav>
    </div>
  );
}
