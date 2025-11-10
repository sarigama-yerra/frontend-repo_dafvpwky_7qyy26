import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Server, Globe2, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    title: 'Blazing Performance',
    desc: 'NVMe SSDs, HTTP/3, and global CDN for ultra-low latency.'
  },
  {
    icon: <Shield className="w-5 h-5 text-cyan-400" />,
    title: 'Security First',
    desc: 'Free SSL, DDoS protection, and automatic backups.'
  },
  {
    icon: <Server className="w-5 h-5 text-cyan-400" />,
    title: 'Scalable by Design',
    desc: 'From shared to VPS — grow without migrations.'
  },
  {
    icon: <Globe2 className="w-5 h-5 text-cyan-400" />,
    title: 'Global Edge',
    desc: 'Serve from multiple regions for worldwide audiences.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Why choose us</h2>
          <p className="mt-3 text-neutral-300">Minimal, reliable, and engineered for speed. Here’s what makes us different.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-cyan-500/20 bg-neutral-900/40 p-5">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 mb-3">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-neutral-300 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-cyan-300">
          <CheckCircle2 className="w-5 h-5" />
          <span>24/7 human support • 99.99% uptime SLA • 30-day refund</span>
        </div>
      </div>
    </section>
  );
}
