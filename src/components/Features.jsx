import { Shield, Rocket, Server, Globe2 } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Keamanan Solid',
    desc: 'Proteksi DDoS, sertifikat SSL gratis, dan isolasi kontainer untuk ketenangan Anda.'
  },
  {
    icon: Rocket,
    title: 'Performa Tinggi',
    desc: 'Jaringan cepat dengan edge caching dan NVMe storage untuk waktu muat yang singkat.'
  },
  {
    icon: Server,
    title: 'Skalabilitas Mudah',
    desc: 'Naik-turun sumber daya secara fleksibel tanpa downtime.'
  },
  {
    icon: Globe2,
    title: 'Global CDN',
    desc: 'Jangkau pengguna di seluruh dunia dengan latensi minimal.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Fitur utama yang Anda butuhkan</h2>
          <p className="mt-2 text-zinc-300">Disusun untuk stabilitas dan kemudahan, tanpa kerumitan.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
