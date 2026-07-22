import { site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-10">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            <span className="text-signal-blue">Kreativo</span> Studio
          </p>
          <p className="mt-1 text-sm text-frost-300/70">
            Portfolio · sklep · rozwiązania cyfrowe
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-frost-300">
          <a href="#portfolio" className="hover:text-frost-50">
            Portfolio
          </a>
          <a href="#sklep" className="hover:text-frost-50">
            Sklep
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-frost-50">
            {site.email}
          </a>
        </div>

        <p className="text-xs text-frost-300/50">© {year} {site.name}</p>
      </div>
    </footer>
  )
}
