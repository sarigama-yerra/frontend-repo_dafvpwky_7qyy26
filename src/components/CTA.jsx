import React from 'react';
import { ArrowRight, Headphones } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-black p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to launch with TempatHosting?</h3>
              <p className="mt-2 text-neutral-300 max-w-2xl">Deploy in minutes with global edge, automated SSL, and one-click scaling. Minimal, fast, and future-ready.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 text-black px-5 py-3 font-semibold hover:bg-cyan-400 transition-colors">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#support" className="inline-flex items-center gap-2 rounded-md border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-cyan-100 px-5 py-3 font-semibold transition-colors">
                <Headphones className="w-4 h-4" /> Talk to Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
