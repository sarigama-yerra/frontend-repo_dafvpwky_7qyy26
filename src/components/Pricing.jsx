import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Rp 25.000/bln',
    features: ['1 vCPU', '512MB RAM', '5GB NVMe', 'Bandwidth 200GB'],
    cta: 'Mulai'
  },
  {
    name: 'Pro',
    price: 'Rp 75.000/bln',
    features: ['2 vCPU', '2GB RAM', '30GB NVMe', 'Bandwidth 1TB'],
    cta: 'Paling populer',
    highlight: true
  },
  {
    name: 'Scale',
    price: 'Rp 180.000/bln',
    features: ['4 vCPU', '8GB RAM', '100GB NVMe', 'Bandwidth 3TB'],
    cta: 'Hubungi kami'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Paket harga yang masuk akal</h2>
          <p className="mt-2 text-zinc-300">Dapatkan performa stabil tanpa membakar anggaran.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border border-white/10 p-6 bg-white/[0.03] transition-colors ${
                plan.highlight ? 'ring-1 ring-emerald-400/40 bg-white/[0.06]' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-medium">{plan.name}</h3>
                {plan.highlight && (
                  <span className="text-xs rounded-full bg-emerald-500/20 text-emerald-300 px-2 py-1">Paling populer</span>
                )}
              </div>
              <p className="mt-2 text-2xl text-white">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-200">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                plan.highlight ? 'bg-emerald-500/90 hover:bg-emerald-500 text-white' : 'border border-white/10 bg-white/5 hover:bg-white/10 text-white'
              }`}>
                {plan.cta}
              </button>
              <p className="mt-3 text-xs text-zinc-400">Diskon pelajar 30% dengan verifikasi.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
