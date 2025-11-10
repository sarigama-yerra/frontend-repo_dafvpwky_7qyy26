import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,153,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,255,255,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(0,153,255,0.1),transparent_40%)] pointer-events-none" />
      </div>

      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-white">Tempat</span>
          <span className="text-cyan-400">Hosting</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white">Why Us</a>
          <a href="#features" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
        </nav>
        <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 text-black px-4 py-2 font-semibold hover:bg-cyan-400 transition-colors">
          <Rocket className="w-4 h-4" /> Get Started
        </a>
      </header>

      <div className="relative max-w-7xl mx-auto px-6 pt-12 md:pt-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-cyan-300 text-sm">
            <Shield className="w-4 h-4" />
            Lightning-fast, secure hosting
          </div>
          <h1 className="mt-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
            Futuristic Web Hosting for Modern Builders
          </h1>
          <p className="mt-5 text-neutral-300 leading-relaxed max-w-xl">
            Scale globally with rock-solid uptime, ironclad security, and 24/7 support — all in a minimal, blazing-fast experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 font-semibold transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Start Hosting Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500/40 text-cyan-300 hover:text-cyan-100 hover:border-cyan-400 px-6 py-3 font-semibold transition-colors"
            >
              <Server className="w-5 h-5" />
              Explore Features
            </a>
          </div>
          <div className="mt-6 text-sm text-neutral-400">
            Student offer: <span className="text-cyan-300 font-medium">50% off</span> or <span className="text-cyan-300 font-medium">Rp10k/month</span>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[620px] lg:h-[560px] rounded-xl overflow-hidden border border-cyan-500/20 bg-gradient-to-b from-neutral-900 to-black">
          <Spline
            scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
