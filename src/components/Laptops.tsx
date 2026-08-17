import { useState } from 'react';
import { Check } from 'lucide-react';
import { laptopModels } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function Laptops() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const model = laptopModels[active];

  return (
    <section id="laptops" className="relative py-24 lg:py-32">
      <div
        ref={ref}
        className={`container-x reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">BonziBook</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Redefining portable power.
          </h2>
          <p className="mt-5 text-lg text-slate-400 text-balance">
            Desktop-class performance in ultraportable designs. Gaming-grade graphics,
            professional-level processing, and all-day battery life — in laptops that weigh less
            than 3.5 pounds.
          </p>
        </div>

        {/* Model tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-full border border-ink-700 bg-ink-850/60 p-1">
            {laptopModels.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? 'bg-electric-400 text-ink-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active model */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-ink-700/60">
            <img
              key={model.id}
              src={model.image}
              alt={model.name}
              loading="lazy"
              className="h-80 w-full object-cover animate-scale-in lg:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="font-mono text-xs uppercase tracking-wider text-electric-400">{model.useCase}</div>
              <div className="mt-1 font-display text-3xl font-bold text-white">{model.name}</div>
            </div>
            <div className="absolute right-6 top-6 rounded-full bg-ink-950/80 px-4 py-2 font-display text-lg font-bold text-electric-400 backdrop-blur-sm">
              {model.price}
            </div>
          </div>

          {/* Specs */}
          <div key={`specs-${model.id}`} className="animate-fade-in">
            <p className="text-lg text-slate-300">{model.tagline}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {model.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="card-surface p-4 hover:border-electric-400/30"
                >
                  <div className="text-xs uppercase tracking-wider text-slate-500">{spec.label}</div>
                  <div className="mt-1.5 flex items-center gap-2 font-display text-base font-bold text-white">
                    <Check className="h-4 w-4 text-electric-400" strokeWidth={2.5} />
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pc-builder" className="btn-primary">
                Configure & Buy
              </a>
              <a href="#support" className="btn-ghost">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
