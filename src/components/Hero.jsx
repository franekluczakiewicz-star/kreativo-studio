import { site } from '../data/content'

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg animate-float lg:mx-0 lg:max-w-none">
      <div className="absolute -inset-8 rounded-full bg-signal-blue/10 blur-3xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[11px] text-frost-300/70">franciszek — index.jsx</span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <pre className="overflow-hidden p-5 font-mono text-[11px] leading-relaxed text-frost-200/90 sm:text-xs">
            <code>
              <span className="text-signal-green">const</span> studio = {'{\n'}
              {'  '}name: <span className="text-signal-blue">'{site.name}'</span>,{'\n'}
              {'  '}focus: [<span className="text-signal-blue">'web'</span>,{' '}
              <span className="text-signal-blue">'design'</span>],{'\n'}
              {'  '}ship: <span className="text-signal-green">true</span>,{'\n'}
              {'}\n\n'}
              <span className="text-signal-green">export</span> <span className="text-signal-green">default</span>{' '}
              function <span className="text-signal-blue">Build</span>() {'{\n'}
              {'  '}
              <span className="text-signal-green">return</span> &lt;Experience /&gt;{'\n'}
              {'}'}
            </code>
          </pre>

          <div className="border-t border-white/8 bg-gradient-to-br from-ink-800 to-ink-950 p-5 lg:border-l lg:border-t-0">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-display text-sm font-semibold tracking-tight">
                <span className="text-signal-blue">F</span>Ł
              </div>
              <div className="h-1.5 w-10 rounded bg-signal-green/80" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-4/5 rounded bg-white/15" />
              <div className="h-2 w-3/5 rounded bg-white/10" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-lg border border-white/8 bg-signal-blue/15" />
                <div className="h-16 rounded-lg border border-white/8 bg-signal-green/10" />
              </div>
              <div className="mt-3 h-8 rounded-md bg-signal-blue/80" />
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-frost-300/60">
              UI · code · brand
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden />

      <div className="container-page relative grid min-h-[calc(100svh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-xl">
          <p
            className="mb-5 font-display text-2xl font-bold tracking-tight text-frost-50 opacity-0 animate-fade-up sm:text-3xl lg:text-4xl"
            style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
          >
            <span className="text-signal-blue">Franciszek</span> Łuczakiewicz
          </p>

          <h1
            className="font-display text-[1.85rem] font-bold leading-[1.15] tracking-tight text-frost-50 opacity-0 animate-fade-up sm:text-4xl lg:text-[2.65rem]"
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
          >
            {site.tagline}
          </h1>

          <p
            className="mt-6 max-w-lg text-base leading-relaxed text-frost-300 opacity-0 animate-fade-up sm:text-lg"
            style={{ animationDelay: '0.28s', animationFillMode: 'forwards' }}
          >
            {site.description}
          </p>

          <div
            className="mt-9 flex flex-wrap gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <a href="#portfolio" className="btn-primary">
              Zobacz portfolio
            </a>
            <a href="#o-mnie" className="btn-ghost">
              O mnie
            </a>
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
