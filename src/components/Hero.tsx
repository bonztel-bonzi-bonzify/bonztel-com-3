import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-electric-500/20 blur-[120px] animate-pulse-glow" />

      {/* Floating accent orbs */}
      <div className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-electric-400 shadow-[0_0_20px_rgba(192,132,252,0.8)] animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute left-[15%] top-[60%] h-1.5 w-1.5 rounded-full bg-ember-400 shadow-[0_0_16px_rgba(244,114,182,0.8)] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute right-[25%] bottom-[20%] h-1 w-1 rounded-full bg-mint-400 shadow-[0_0_12px_rgba(167,139,250,0.8)] animate-float" style={{ animationDelay: '4s' }} />

      <div className="container-x relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-electric-400/30 bg-electric-400/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-electric-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric-400" />
            Power Beyond Limits
          </span>
        </div>

        <h1
          className="mt-8 max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-8xl animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Power. Precision.
          <br />
          <span className="bg-gradient-to-r from-electric-300 via-electric-400 to-mint-400 bg-clip-text text-transparent glow-text">
            BONZTEL.
          </span>
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance sm:text-xl animate-fade-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          Makers of Core Ultra Bonzi processors, BonziBook laptops, BONZTEL GPUs, and
          high-performance desktops. Hardware, systems, drivers, and support — all connected.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a href="#ecosystem" className="btn-primary">
            Explore the Ecosystem
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#pc-builder" className="btn-ghost">
            Build Your System
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-700/60 bg-ink-700/40 sm:grid-cols-4 animate-fade-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          {[
            { value: '2018', label: 'Founded' },
            { value: '100.0%', label: 'Satisfaction' },
            { value: '0.001s', label: 'Burn-in Test' },
            { value: '∞', label: 'Renewable Energy' },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink-900/80 px-4 py-5 text-center">
              <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#ecosystem"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-electric-400"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
