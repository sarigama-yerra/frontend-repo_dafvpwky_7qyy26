import Spline from '@splinetool/react-spline';

// Calmer hero: softer gradients, muted palette, gentle motion
export default function Hero() {
  return (
    <section className="relative min-h-[88vh] isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a3Q1n8bM-BasicScene/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft overlays for readability without being flashy */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(12,12,14,0.35),rgba(12,12,14,0.85))]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          Tenang & Fokus • Infrastruktur stabil
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Hosting cepat yang tampil kalem
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-300">
          Tanpa efek yang menyilaukan. Hanya performa tinggi, uptime kuat, dan pengalaman yang nyaman.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-white px-5 py-2.5 transition-colors">
            Mulai sekarang
          </a>
          <a href="#features" className="rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 transition-colors">
            Lihat fitur
          </a>
        </div>
      </div>
    </section>
  );
}
