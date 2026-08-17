import { useEffect, useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { navItems } from '@/data/products';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-700/60 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-electric-400/10 ring-1 ring-electric-400/30 transition-all group-hover:bg-electric-400/20 group-hover:ring-electric-400/50">
            <Cpu className="h-5 w-5 text-electric-400" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            BONZ<span className="text-electric-400">TEL</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#pc-builder" className="btn-primary">
            Build Your System
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-700/60 bg-ink-950/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-ink-800 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#pc-builder"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Build Your System
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
