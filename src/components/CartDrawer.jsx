import { useCart } from '../context/CartContext'

function formatPrice(value) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, total, clear } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Koszyk">
      <button
        type="button"
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-label="Zamknij koszyk"
      />

      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-ink-900 shadow-2xl animate-fade-in">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <h2 className="font-display text-xl font-semibold tracking-tight">Koszyk</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-sm text-frost-300 transition hover:text-frost-50"
          >
            Zamknij
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-frost-300">Koszyk jest pusty. Dodaj produkt ze sklepu.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="border border-white/10 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium text-frost-50">{item.name}</p>
                      <p className="mt-1 text-sm text-signal-blue">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-frost-300 hover:text-frost-50"
                    >
                      Usuń
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      type="button"
                      className="h-8 w-8 border border-white/15 text-sm"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span className="min-w-6 text-center text-sm">{item.qty}</span>
                    <button
                      type="button"
                      className="h-8 w-8 border border-white/15 text-sm"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-white/8 px-5 py-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-frost-300">Suma</span>
            <span className="font-display text-xl font-semibold text-frost-50">{formatPrice(total)}</span>
          </div>
          <button
            type="button"
            disabled={items.length === 0}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => {
              alert('Płatności podłączymy w kolejnym etapie. Dziękuję za zainteresowanie!')
              clear()
              setOpen(false)
            }}
          >
            Przejdź do zamówienia
          </button>
        </div>
      </aside>
    </div>
  )
}
