import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Server, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden">
      {/* Spline full-cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle overlays for contrast (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_35%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/30 backdrop-blur-sm px-3 py-1 text-cyan-300 text-sm">
            <Shield className="w-4 h-4" />
            Lightning-fast, secure hosting
          </div>
          <h1 className="mt-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
            Futuristic Web Hosting for Modern Builders
          </h1>
          <p className="mt-5 text-neutral-200/90 leading-relaxed max-w-xl">
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
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500/40 text-cyan-200 hover:text-cyan-100 hover:border-cyan-400 px-6 py-3 font-semibold transition-colors"
            >
              <Server className="w-5 h-5" />
              Explore Features
            </a>
          </div>
          <div className="mt-6 text-sm text-neutral-200">
            Student offer: <span className="text-cyan-300 font-medium">50% off</span> or <span className="text-cyan-300 font-medium">Rp10k/month</span>
          </div>
        </div>

        {/* Spacer for hero height */}
        <div className="h-[30vh] sm:h-[35vh] md:h-[40vh]" />
      </div>
    </section>
  );
}
