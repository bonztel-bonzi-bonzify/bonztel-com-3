import { Gamepad2, Clapperboard, Building2, type LucideIcon } from 'lucide-react';
import { pathOptions } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Gamepad2,
  Clapperboard,
  Building2,
};

export default function PathSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 lg:py-28">
      <div
        ref={ref}
        className={`container-x reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Choose Your Path</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Tailored solutions for every performance need.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pathOptions.map((path, i) => {
            const Icon = iconMap[path.icon];
            return (
              <article
                key={path.id}
                className="group card-surface relative overflow-hidden p-8 hover:border-electric-400/40 hover:shadow-[0_0_40px_rgba(192,132,252,0.1)]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-electric-400/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-400/10 ring-1 ring-electric-400/20 transition-all duration-300 group-hover:bg-electric-400/20 group-hover:ring-electric-400/40">
                    <Icon className="h-7 w-7 text-electric-400" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{path.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{path.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {path.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
