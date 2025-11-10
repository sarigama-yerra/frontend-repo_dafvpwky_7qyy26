import React from 'react';
import { Check, GraduationCap, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Rp20k',
    period: '/month',
    highlight: false,
    features: ['1 Website', '10 GB NVMe', 'Free SSL', 'Email Support']
  },
  {
    name: 'Pro',
    price: 'Rp60k',
    period: '/month',
    highlight: true,
    features: ['Unlimited Websites', '100 GB NVMe', 'Priority Support', 'Daily Backups']
  },
  {
    name: 'VPS',
    price: 'Rp200k',
    period: '/month',
    highlight: false,
    features: ['2 vCPU', '4 GB RAM', '80 GB NVMe', 'Root Access']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3 text-neutral-300">Pay for what you need. Upgrade anytime without downtime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)]' : 'border-cyan-500/20'} bg-neutral-900/40 p-6 flex flex-col`}>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-cyan-300">{p.price}</span>
                  <span className="text-neutral-400">{p.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-neutral-300">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#cta" className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold transition-colors ${p.highlight ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'border border-cyan-500/40 text-cyan-300 hover:border-cyan-400 hover:text-cyan-100'}`}>
                Choose {p.name}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-neutral-900/50 p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold">Student Discount</h4>
                <p className="text-sm text-neutral-300">Get 50% off or just Rp10k/month on Starter plan.</p>
              </div>
            </div>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 text-black px-4 py-2 font-semibold hover:bg-cyan-400 transition-colors">
              Claim Offer <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
