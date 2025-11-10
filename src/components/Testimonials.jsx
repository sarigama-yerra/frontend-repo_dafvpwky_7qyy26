import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alya Putri',
    role: 'Indie Developer',
    quote: 'TempatHosting is ridiculously fast. My Next.js sites feel instant and the support is top-tier.'
  },
  {
    name: 'Rizky Mahendra',
    role: 'Startup Founder',
    quote: 'We migrated in hours and saw latency drop across SEA. Zero downtime, zero hassle.'
  },
  {
    name: 'Nadia Salsabila',
    role: 'Student',
    quote: 'The student plan is a lifesaver. Cheap, secure, and easy to use for my portfolio.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by builders</h2>
          <p className="mt-3 text-neutral-300">Real feedback from creators and teams using TempatHosting daily.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-cyan-500/20 bg-neutral-900/40 p-6">
              <div className="flex items-center gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              <p className="mt-4 text-neutral-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-neutral-400">{t.name} • {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
