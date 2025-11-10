import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-zinc-900/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="font-semibold text-white">TempatHosting</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white transition-colors">Fitur</a>
          <a href="#pricing" className="hover:text-white transition-colors">Harga</a>
          <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          <a href="#" className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors">Masuk</a>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-900/70 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2 text-sm text-zinc-300">
            <a onClick={() => setOpen(false)} href="#features" className="block py-2 hover:text-white">Fitur</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="block py-2 hover:text-white">Harga</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block py-2 hover:text-white">Kontak</a>
            <a onClick={() => setOpen(false)} href="#" className="block py-2 text-white">Masuk</a>
          </div>
        </div>
      )}
    </header>
  );
}
