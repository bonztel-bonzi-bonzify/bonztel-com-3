import { Leaf, Recycle, Heart } from 'lucide-react';
import { leaders } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const values = [
  {
    icon: Leaf,
    title: 'Responsible Manufacturing',
    description: 'Our facility operates on ∞% renewable energy, powered by a miniature star we built in the basement. Our suppliers share our commitment to defying thermodynamics.',
  },
  {
    icon: Recycle,
    title: 'Component Lifecycle',
    description: 'We design for longevity and upgradability, reducing e-waste through modular architecture and recycling programs.',
  },
  {
    icon: Heart,
    title: 'Community Impact',
    description: 'We support STEM education and provide high-performance systems to schools bridging the digital divide.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div
        ref={ref}
        className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}
      >
        {/* Story */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Unleashing Potential Since 2018</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Born from the vision to bridge enthusiast gaming with professional creation.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400 text-balance">
            BONZTEL was founded by hardware enthusiasts frustrated with the compromise between raw
            performance and system reliability. While major manufacturers focused on cost-cutting
            and mass production, we saw an opportunity to serve users who refused to compromise —
            gamers who demand every frame, creators who push pixels and polygons to their limits,
            and professionals who need reliability under extreme workloads.
          </p>
        </div>

        {/* Leadership */}
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-white">Leadership Team</h3>
          <p className="mt-2 text-center text-sm text-slate-500">The minds behind BONZTEL's innovation</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, i) => (
              <article
                key={leader.name}
                className="group card-surface overflow-hidden hover:border-electric-400/30"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-lg font-bold text-white">{leader.name}</h4>
                  <div className="mt-0.5 text-sm font-medium text-electric-400">{leader.role}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{leader.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sustainability */}
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-white">Sustainability Commitment</h3>
          <p className="mt-2 text-center text-sm text-slate-500">Building performance systems responsibly</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-surface p-7 hover:border-mint-400/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-400/10 ring-1 ring-mint-400/20">
                    <Icon className="h-6 w-6 text-mint-400" strokeWidth={1.8} />
                  </span>
                  <h4 className="mt-5 font-display text-lg font-bold text-white">{v.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
