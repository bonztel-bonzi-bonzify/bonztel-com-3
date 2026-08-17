import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { gamingBenchmarks, creatorBenchmarks, type BenchmarkData } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

function BenchmarkBar({ data, index, isLowerBetter }: { data: BenchmarkData; index: number; isLowerBetter: boolean }) {
  const [animate, setAnimate] = useState(false);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setAnimate(true), index * 120);
      return () => clearTimeout(t);
    }
  }, [visible, index]);

  const maxVal = Math.max(data.bonztel, data.competitor);
  const bonztelPct = (data.bonztel / maxVal) * 100;
  const competitorPct = (data.competitor / maxVal) * 100;
  const bonztelWins = isLowerBetter ? data.bonztel < data.competitor : data.bonztel > data.competitor;

  return (
    <div ref={ref} className="py-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-300">{data.label}</span>
        <span className={`font-mono text-xs ${bonztelWins ? 'text-mint-400' : 'text-slate-500'}`}>
          {bonztelWins ? 'BONZTEL wins' : ''}
        </span>
      </div>
      <div className="mt-2 space-y-2">
        {/* BONZTEL bar */}
        <div className="flex items-center gap-3">
          <span className="w-20 shrink-0 font-mono text-xs text-electric-400">BONZTEL</span>
          <div className="h-7 flex-1 overflow-hidden rounded-md bg-ink-800">
            <div
              className="flex h-full items-center rounded-md bg-gradient-to-r from-electric-500 to-electric-300 transition-all duration-1000 ease-out"
              style={{ width: animate ? `${bonztelPct}%` : '0%' }}
            />
          </div>
          <span className="w-24 shrink-0 text-right font-mono text-xs font-bold text-electric-300">
            {animate ? `${data.bonztel.toLocaleString()}${data.unit}` : ''}
          </span>
        </div>
        {/* Competitor bar */}
        <div className="flex items-center gap-3">
          <span className="w-20 shrink-0 font-mono text-xs text-slate-500">Competitor</span>
          <div className="h-7 flex-1 overflow-hidden rounded-md bg-ink-800">
            <div
              className="flex h-full items-center rounded-md bg-gradient-to-r from-ink-600 to-ink-500 transition-all duration-1000 ease-out"
              style={{ width: animate ? `${competitorPct}%` : '0%' }}
            />
          </div>
          <span className="w-24 shrink-0 text-right font-mono text-xs font-medium text-slate-400">
            {animate ? `${data.competitor.toLocaleString()}${data.unit}` : ''}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Benchmarks() {
  const [tab, setTab] = useState<'gaming' | 'creator'>('gaming');
  const { ref, visible } = useReveal<HTMLDivElement>();
  const data = tab === 'gaming' ? gamingBenchmarks : creatorBenchmarks;
  const isLowerBetter = tab === 'creator';

  return (
    <section id="performance" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div
        ref={ref}
        className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Performance Spotlight</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            See how BONZTEL systems dominate the competition.
          </h2>
          <p className="mt-5 text-lg text-slate-400 text-balance">
            Real-world benchmarks, not synthetic scores. Tested on the latest CoreForce and StudioMax
            systems against flagship competitor builds.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-ink-700 bg-ink-850/60 p-1">
            <button
              onClick={() => setTab('gaming')}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                tab === 'gaming'
                  ? 'bg-electric-400 text-ink-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              Gaming
            </button>
            <button
              onClick={() => setTab('creator')}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                tab === 'creator'
                  ? 'bg-electric-400 text-ink-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="h-4 w-4" />
              Creator
            </button>
          </div>
        </div>

        {/* Benchmark chart */}
        <div className="mx-auto mt-12 max-w-3xl card-surface p-8 lg:p-10">
          <div className="mb-4 flex items-center justify-between border-b border-ink-700/50 pb-4">
            <span className="font-display text-lg font-bold text-white">
              {tab === 'gaming' ? 'Gaming Performance' : 'Creator Workload'}
            </span>
            <span className="font-mono text-xs text-slate-500">
              {isLowerBetter ? 'Lower is better' : 'Higher is better'}
            </span>
          </div>
          <div className="divide-y divide-ink-700/40">
            {data.map((b, i) => (
              <BenchmarkBar key={b.label} data={b} index={i} isLowerBetter={isLowerBetter} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
