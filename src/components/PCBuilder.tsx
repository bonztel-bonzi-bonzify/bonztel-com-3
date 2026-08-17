import { useMemo, useState } from 'react';
import { Cpu, Zap, MemoryStick, HardDrive, Snowflake, Box, Check, RotateCcw, type LucideIcon } from 'lucide-react';
import { pcBuilderCategories } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Zap,
  MemoryStick,
  HardDrive,
  Snowflake,
  Box,
};

export default function PCBuilder() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [selections, setSelections] = useState<Record<string, string>>({
    cpu: 'bonzi-9',
    gpu: 'rtx-4080',
    ram: 'ram-32',
    storage: 'ssd-2',
    cooling: 'aio',
    case: 'case-mid',
  });

  const totalPrice = useMemo(() => {
    return pcBuilderCategories.reduce((total, cat) => {
      const selectedId = selections[cat.id];
      const option = cat.options.find((o) => o.id === selectedId);
      return total + (option?.price ?? 0);
    }, 0);
  }, [selections]);

  const selectCount = Object.keys(selections).length;
  const basePrice = 299; // assembly & testing

  return (
    <section id="pc-builder" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div
        ref={ref}
        className={`container-x relative reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Custom PC Builder</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Pick every major component and build your own BONZTEL system.
          </h2>
          <p className="mt-5 text-lg text-slate-400 text-balance">
            Configure your dream machine. Every system includes professional assembly, cable
            management, and 72-hour burn-in testing.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Builder options */}
          <div className="lg:col-span-2 space-y-4">
            {pcBuilderCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              const selectedId = selections[cat.id];
              return (
                <div key={cat.id} className="card-surface p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-400/10 ring-1 ring-electric-400/20">
                      <Icon className="h-5 w-5 text-electric-400" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">{cat.label}</h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {cat.options.map((opt) => {
                      const isSelected = selectedId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() =>
                            setSelections((prev) => ({ ...prev, [cat.id]: opt.id }))
                          }
                          className={`relative rounded-xl border p-4 text-left transition-all duration-200 ${
                            isSelected
                              ? 'border-electric-400 bg-electric-400/10'
                              : 'border-ink-700 bg-ink-800/40 hover:border-ink-600 hover:bg-ink-800/80'
                          }`}
                        >
                          {isSelected && (
                            <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-electric-400 text-ink-950">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                          )}
                          <div className={`pr-6 text-sm font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                            {opt.name}
                          </div>
                          <div className="mt-1 text-xs text-slate-500">{opt.detail}</div>
                          <div className="mt-2 font-mono text-sm font-bold text-electric-400">
                            {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 card-surface overflow-hidden">
              <div className="border-b border-ink-700/50 bg-ink-800/40 px-6 py-5">
                <h3 className="font-display text-lg font-bold text-white">Build Summary</h3>
                <p className="mt-1 text-xs text-slate-500">{selectCount}/6 components selected</p>
              </div>

              <div className="space-y-3 px-6 py-5">
                {pcBuilderCategories.map((cat) => {
                  const selectedId = selections[cat.id];
                  const option = cat.options.find((o) => o.id === selectedId);
                  if (!option) return null;
                  return (
                    <div key={cat.id} className="flex items-start justify-between gap-3 text-sm">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-slate-500">{cat.label}</div>
                        <div className="mt-0.5 font-medium text-slate-200">{option.name}</div>
                      </div>
                      <span className="font-mono text-xs text-electric-400">
                        {option.price === 0 ? '—' : `$${option.price}`}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-ink-700/50 bg-ink-800/40 px-6 py-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Components</span>
                  <span className="font-mono">${totalPrice}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
                  <span>Assembly & Testing</span>
                  <span className="font-mono">${basePrice}</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-ink-700/50 pt-4">
                  <span className="font-display text-lg font-bold text-white">Total</span>
                  <span className="font-display text-2xl font-bold text-electric-400 glow-text">
                    ${(totalPrice + basePrice).toLocaleString()}
                  </span>
                </div>
                <button className="btn-primary mt-5 w-full">
                  Add to Cart
                </button>
                <button
                  onClick={() => setSelections({})}
                  className="mt-2 flex w-full items-center justify-center gap-2 text-xs text-slate-500 transition-colors hover:text-slate-300"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
