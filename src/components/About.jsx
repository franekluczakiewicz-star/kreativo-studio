import { about } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="o-mnie" className="section-pad border-t border-white/5">
      <div ref={ref} className="container-page reveal grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-green">01</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost-50 sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-5 h-px w-16 origin-left bg-gradient-to-r from-signal-blue to-signal-green" />
        </div>

        <div className="space-y-5 text-base leading-relaxed text-frost-300 sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
