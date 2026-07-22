import { testimonials } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="opinie" className="section-pad border-t border-white/5">
      <div className="container-page">
        <div ref={ref} className="reveal mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-green">04</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost-50 sm:text-4xl">
            Opinie klientów
          </h2>
          <p className="mt-4 text-frost-300">Miejsce na przyszłe opinie — przykładowe wpisy poniżej.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="border border-white/10 bg-ink-900/40 p-7 sm:p-8"
            >
              <div className="flex gap-1" aria-label={`${item.rating} na 5`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-signal-green">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-frost-200">„{item.text}”</p>
              <footer className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-frost-300/60">
                — {item.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
