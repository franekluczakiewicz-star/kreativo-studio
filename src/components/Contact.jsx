import { useState } from 'react'
import { site } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(initial)
  }

  return (
    <section id="kontakt" className="section-pad border-t border-white/5">
      <div className="container-page">
        <div ref={ref} className="reveal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-green">04</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost-50 sm:text-4xl">
              Kontakt
            </h2>
            <p className="mt-4 max-w-md text-frost-300">
              Masz pomysł na projekt? Napisz — odpowiem tak szybko, jak to możliwe.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-frost-300/50">
                  E-mail
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-lg text-signal-blue transition hover:text-[#5a9fff]"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-frost-300/50">
                  Social
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-frost-200 transition hover:text-frost-50"
                  >
                    GitHub
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-frost-200 transition hover:text-frost-50"
                  >
                    Instagram
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-frost-200 transition hover:text-frost-50"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 border border-white/10 bg-ink-900/40 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs text-frost-300">Imię</span>
                <input
                  className="field"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  autoComplete="name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs text-frost-300">E-mail</span>
                <input
                  className="field"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-xs text-frost-300">Temat</span>
              <input
                className="field"
                name="subject"
                value={form.subject}
                onChange={onChange}
                required
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs text-frost-300">Wiadomość</span>
              <textarea
                className="field min-h-[140px] resize-y"
                name="message"
                value={form.message}
                onChange={onChange}
                required
              />
            </label>

            <button type="submit" className="btn-primary w-full sm:w-auto">
              Wyślij wiadomość
            </button>

            {sent && (
              <p className="text-sm text-signal-green" role="status">
                Dziękuję! Formularz jest gotowy — podłączymy wysyłkę w kolejnym etapie.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
