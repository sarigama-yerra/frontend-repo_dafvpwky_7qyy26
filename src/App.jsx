import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-semibold text-white">Butuh bantuan memilih paket?</h2>
              <p className="mt-2 text-zinc-300">Tim kami siap membantu menentukan solusi yang paling pas.</p>
              <form className="mt-6 grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Nama" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
                <input type="email" placeholder="Email" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
                <textarea placeholder="Pesan" rows="3" className="sm:col-span-2 w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
                <button className="sm:col-span-2 inline-flex justify-center rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-white px-5 py-2.5 text-sm font-medium transition-colors">Kirim</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} TempatHosting. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-200">Kebijakan Privasi</a>
            <a href="#" className="hover:text-zinc-200">Syarat Layanan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
