import { useEffect, useState } from 'react'
import { site } from '../data/content'

const links = [
  { href: '#o-mnie', label: 'O mnie' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/8 bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-frost-50 sm:text-xl">
          <span className="text-signal-blue">Kreativo</span> Studio
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-frost-300 transition hover:text-frost-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden rounded-md border border-white/10 px-3 py-2 text-sm text-frost-100 transition hover:border-white/25 sm:inline-flex"
          >
            Kontakt
          </a>

          <button
            type="button"
            className="rounded-md border border-white/10 p-2 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span className="block h-0.5 w-5 bg-frost-50" />
            <span className="mt-1.5 block h-0.5 w-5 bg-frost-50" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/8 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-frost-200 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <p className="mt-2 px-2 text-xs text-frost-300/70">{site.email}</p>
          </nav>
        </div>
      )}
    </header>
  )
}
