import { projects } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProjectCard({ project, index }) {
  const accent =
    project.accent === 'green'
      ? 'from-signal-green/20 to-transparent border-signal-green/25'
      : 'from-signal-blue/20 to-transparent border-signal-blue/25'

  return (
    <article
      className={`group flex flex-col border bg-gradient-to-b ${accent} border-white/10 bg-ink-900/40 p-6 transition duration-300 hover:border-white/20 sm:p-8`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold tracking-tight text-frost-50 sm:text-2xl">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-frost-300/60">0{index + 1}</span>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-frost-300 sm:text-base">{project.description}</p>

      <div className="mt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-frost-300/50">Technologie</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="border border-white/10 px-2.5 py-1 text-xs text-frost-200">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-frost-300/50">Funkcje</p>
        <ul className="mt-2 space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-frost-300">
              <span className="h-1 w-1 shrink-0 bg-signal-green" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-signal-blue transition group-hover:gap-3"
      >
        Zobacz projekt
        <span aria-hidden>→</span>
      </a>
    </article>
  )
}

export default function Portfolio() {
  const ref = useScrollReveal()

  return (
    <section id="portfolio" className="section-pad border-t border-white/5">
      <div className="container-page">
        <div ref={ref} className="reveal mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-green">02</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost-50 sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 text-frost-300">
            Wybrane realizacje live — m.in. Bielszowice Trail i KADOKA.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
