import { Download, ShieldCheck, PackageOpen, MessageCircle, PlayCircle, Phone, Mail, Star, type LucideIcon } from 'lucide-react';
import { supportTools, tutorials, forumThreads } from '@/data/products';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Download,
  ShieldCheck,
  PackageOpen,
  MessageCircle,
};

export default function Support() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="support" className="relative py-24 lg:py-32">
      <div
        ref={ref}
        className={`container-x reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Support Center</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl text-balance">
            Get the help you need — comprehensive resources and expert guidance.
          </h2>
        </div>

        {/* Quick access tools */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportTools.map((tool, i) => {
            const Icon = iconMap[tool.icon];
            return (
              <a
                key={tool.title}
                href="#support"
                className="group card-surface p-6 hover:border-electric-400/40 hover:shadow-[0_0_30px_rgba(192,132,252,0.08)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-400/10 ring-1 ring-electric-400/20 transition-all group-hover:bg-electric-400/20">
                  <Icon className="h-6 w-6 text-electric-400" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{tool.description}</p>
              </a>
            );
          })}
        </div>

        {/* Tutorials + Forum */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Tutorials */}
          <div className="card-surface p-7">
            <div className="flex items-center gap-3 border-b border-ink-700/50 pb-4">
              <PlayCircle className="h-5 w-5 text-electric-400" />
              <h3 className="font-display text-lg font-bold text-white">Featured Tutorials</h3>
            </div>
            <div className="mt-4 space-y-3">
              {tutorials.map((tut) => (
                <div
                  key={tut.title}
                  className="group flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-colors hover:bg-ink-800/60"
                >
                  <span className="flex h-14 w-20 shrink-0 items-center justify-center rounded-lg bg-ink-800 transition-colors group-hover:bg-electric-400/10">
                    <PlayCircle className="h-7 w-7 text-slate-500 transition-colors group-hover:text-electric-400" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-white">{tut.title}</div>
                    <div className="mt-0.5 truncate text-xs text-slate-500">{tut.description}</div>
                    <div className="mt-1 flex gap-3 font-mono text-xs text-slate-600">
                      <span>{tut.duration}</span>
                      <span>{tut.views} views</span>
                      <span>{tut.updated}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Forum */}
          <div className="card-surface p-7">
            <div className="flex items-center gap-3 border-b border-ink-700/50 pb-4">
              <MessageCircle className="h-5 w-5 text-electric-400" />
              <h3 className="font-display text-lg font-bold text-white">Community Forum</h3>
            </div>
            <div className="mt-4 space-y-3">
              {forumThreads.map((thread) => (
                <div
                  key={thread.title}
                  className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl p-3 transition-colors hover:bg-ink-800/60"
                >
                  <div className="min-w-0">
                    <div className="truncate font-medium text-white">{thread.title}</div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                      <span className="rounded-full bg-electric-400/10 px-2.5 py-0.5 font-mono text-electric-400">
                        {thread.category}
                      </span>
                      <span>by {thread.author}</span>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="font-mono text-sm font-bold text-slate-300">{thread.replies}</div>
                    <div className="text-xs text-slate-600">replies</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-ink-800/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2">
                  <span className="h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
                  <span className="absolute h-2 w-2 rounded-full bg-mint-400" />
                </span>
                <span className="text-xs text-slate-400">∞ specialists online</span>
              </div>
              <span className="text-xs text-slate-500">8.4B members</span>
            </div>
          </div>
        </div>

        {/* Contact channels */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="card-surface flex items-center gap-4 p-6 hover:border-electric-400/30">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-400/10 ring-1 ring-electric-400/20">
              <Phone className="h-6 w-6 text-electric-400" strokeWidth={1.8} />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-white">Phone Support</div>
              <div className="text-xs text-slate-500">Mon–Fri 8am–8pm ET</div>
            </div>
          </div>
          <div className="card-surface flex items-center gap-4 p-6 hover:border-electric-400/30">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-400/10 ring-1 ring-electric-400/20">
              <Mail className="h-6 w-6 text-electric-400" strokeWidth={1.8} />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-white">Email Support</div>
              <div className="text-xs text-slate-500">support@bonztel.com</div>
            </div>
          </div>
          <div className="card-surface flex items-center gap-4 p-6 hover:border-electric-400/30">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember-400/10 ring-1 ring-ember-400/20">
              <Star className="h-6 w-6 text-ember-400" strokeWidth={1.8} />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-white">Priority Support</div>
              <div className="text-xs text-slate-500">Enterprise customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
