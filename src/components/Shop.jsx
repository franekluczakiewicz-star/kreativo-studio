import { shopCategories, site } from '../data/content'
import { useCart } from '../context/CartContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

function formatPrice(value) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value)
}

function ProductCard({ product, onAdd }) {
  return (
    <article
      className={`flex h-full flex-col border p-6 transition duration-300 sm:p-7 ${
        product.featured
          ? 'border-signal-green/40 bg-signal-green/[0.06]'
          : 'border-white/10 bg-ink-900/50 hover:border-white/20'
      }`}
    >
      {product.featured && (
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">
          Polecany
        </p>
      )}
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="font-display text-xl font-semibold tracking-tight text-frost-50">{product.name}</h4>
        <p className="shrink-0 font-display text-lg font-semibold text-signal-blue">{formatPrice(product.price)}</p>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-frost-300">{product.description}</p>
      <ul className="mt-5 space-y-2">
        {product.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-frost-200">
            <span className="mt-1.5 h-1 w-1 shrink-0 bg-signal-blue" />
            {item}
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => onAdd(product)} className="btn-primary mt-7 w-full">
        Dodaj do koszyka
      </button>
    </article>
  )
}

export default function Shop() {
  const ref = useScrollReveal()
  const { addItem } = useCart()

  return (
    <section id="sklep" className="section-pad border-t border-white/5">
      <div className="container-page">
        <div ref={ref} className="reveal mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal-green">03</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost-50 sm:text-4xl">
            Sklep
          </h2>
          <p className="mt-4 text-frost-300">
            Produkty cyfrowe i usługi — od gotowych szablonów po kompleksowe strony internetowe.
          </p>
          <p className="mt-6 border border-signal-blue/30 bg-signal-blue/10 px-4 py-3 font-mono text-[11px] font-semibold leading-relaxed tracking-[0.06em] text-frost-50 sm:text-xs">
            {site.moneyNotice}
          </p>
        </div>

        <div className="space-y-16">
          {shopCategories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-6 font-display text-2xl font-semibold tracking-tight text-frost-50">
                {category.name}
              </h3>
              <div className="grid gap-5 md:grid-cols-2">
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={addItem} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
