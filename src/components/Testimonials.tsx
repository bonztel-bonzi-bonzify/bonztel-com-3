import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 lg:py-28">
      <div
        ref={ref}
        className={`container-x reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">What Our Customers Say</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Real experiences from the BONZTEL community.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className="card-surface relative p-8 hover:border-electric-400/30"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-electric-400/30" />
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-ink-700/50 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-electric-400/10 font-display text-sm font-bold text-electric-400 ring-1 ring-electric-400/20">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-ember-400 text-ember-400" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>

        {/* Press recognition */}
        <div className="mt-20">
          <p className="text-center font-mono text-xs uppercase tracking-[0.25em] text-slate-600">
            Press & Recognition
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { pub: 'PC Gamer', award: 'Best Gaming PC Builder 2024', sub: "Editor's Choice" },
              { pub: "Tom's Hardware", award: 'Outstanding Workstation Performance', sub: 'Professional Review' },
              { pub: 'AnandTech', award: 'Innovation in System Integration', sub: 'Technical Excellence' },
              { pub: 'Customer Choice', award: 'Highest Satisfaction Rating', sub: '100.0% Rating' },
            ].map((rec) => (
              <div key={rec.pub} className="card-surface p-5 text-center">
                <div className="font-display text-sm font-bold text-electric-400">{rec.pub}</div>
                <div className="mt-2 text-xs text-slate-300">{rec.award}</div>
                <div className="mt-1 text-xs text-slate-600">{rec.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
