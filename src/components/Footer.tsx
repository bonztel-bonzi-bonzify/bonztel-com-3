import { Cpu, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const productLinks = ['BonziBook Laptops', 'Core Ultra Bonzi CPUs', 'BONZTEL Graphics', 'BonziVision Monitors', 'Custom PC Builder'];
const supportLinks = ['Driver Downloads', 'Warranty Lookup', 'RMA Portal', 'Live Chat', 'Community Forum'];
const companyLinks = ['About BONZTEL', 'Leadership Team', 'Sustainability', 'Careers', 'Press Kit'];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700/60 bg-ink-950">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-400/10 ring-1 ring-electric-400/30">
                <Cpu className="h-5 w-5 text-electric-400" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                BONZ<span className="text-electric-400">TEL</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Premium PC systems engineered for performance without compromise.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-slate-400 transition-all hover:border-electric-400/40 hover:text-electric-400"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Products</h4>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#ecosystem" className="text-sm text-slate-400 transition-colors hover:text-electric-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Support</h4>
            <ul className="mt-4 space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#support" className="text-sm text-slate-400 transition-colors hover:text-electric-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#about" className="text-sm text-slate-400 transition-colors hover:text-electric-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-700/50 pt-8 sm:flex-row">
          <p className="text-xs text-slate-600">© 2025 BONZTEL Hardware. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="#top" className="transition-colors hover:text-slate-400">Privacy Policy</a>
            <a href="#top" className="transition-colors hover:text-slate-400">Terms of Service</a>
            <a href="#top" className="transition-colors hover:text-slate-400">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
