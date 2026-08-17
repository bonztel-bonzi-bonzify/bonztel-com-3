import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ecosystemProducts } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const accentMap: Record<string, { text: string; border: string; glow: string; bg: string }> = {
  electric: {
    text: 'text-electric-400',
    border: 'border-electric-400/40',
    glow: 'group-hover:shadow-[0_0_40px_rgba(192,132,252,0.15)]',
    bg: 'bg-electric-400/10',
  },
  ember: {
    text: 'text-ember-400',
    border: 'border-ember-400/40',
    glow: 'group-hover:shadow-[0_0_40px_rgba(244,114,182,0.15)]',
    bg: 'bg-ember-400/10',
  },
  mint: {
    text: 'text-mint-400',
    border: 'border-mint-400/40',
    glow: 'group-hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]',
    bg: 'bg-mint-400/10',
  },
};

export default function Ecosystem() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="ecosystem" className="relative py-24 lg:py-32">
      <div ref={ref} className={`container-x reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">The BONZTEL Ecosystem</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Hardware, systems, drivers, and support — all connected.
          </h2>
          <p className="mt-5 text-lg text-slate-400 text-balance">
            One ecosystem engineered to work in harmony. From the silicon up to the support desk,
            every layer is designed for performance without compromise.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {ecosystemProducts.map((product, i) => {
            const accent = accentMap[product.accent];
            const isHovered = hovered === product.id;
            return (
              <article
                key={product.id}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group card-surface relative overflow-hidden p-6 lg:p-8 ${accent.glow} ${
                  isHovered ? accent.border : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className={`h-56 w-full object-cover transition-transform duration-700 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <div className={`absolute right-3 top-3 rounded-full ${accent.bg} px-3 py-1 font-mono text-xs ${accent.text}`}>
                    {product.tagline}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{product.description}</p>
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                      isHovered ? `${accent.text} translate-x-0 -translate-y-0` : 'text-slate-600'
                    }`}
                  />
                </div>

                {/* Stats */}
                <div className="mt-6 flex gap-6 border-t border-ink-700/50 pt-5">
                  {product.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className={`font-display text-lg font-bold ${accent.text}`}>{stat.value}</div>
                      <div className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
