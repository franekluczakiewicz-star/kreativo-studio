import { useState } from 'react'
import { ADMIN_PASSWORD, shopCategoryOptions, site } from '../data/content'
import { useShop } from '../context/ShopContext'

const emptyForm = {
  name: '',
  price: '',
  description: '',
  includes: '',
  link: '',
  categoryId: shopCategoryOptions[0]?.id || 'other',
  featured: false,
}

function formatPrice(value) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function Admin() {
  const { products, isAdmin, login, logout, addProduct, updateProduct, deleteProduct } = useShop()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  const onLogin = (e) => {
    e.preventDefault()
    const ok = login(password, ADMIN_PASSWORD)
    setError(ok ? '' : 'Nieprawidłowe hasło.')
    if (ok) setPassword('')
  }

  const startEdit = (product) => {
    setEditingId(product.id)
    setForm({
      name: product.name,
      price: String(product.price),
      description: product.description,
      includes: (product.includes || []).join('\n'),
      link: product.link || '',
      categoryId: product.categoryId || 'other',
      featured: Boolean(product.featured),
    })
  }

  const resetForm = () => {
    setEditingId(null)
    setForm(emptyForm)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const price = Number(form.price)
    if (!form.name.trim() || Number.isNaN(price) || price < 0) {
      setError('Podaj nazwę i poprawną cenę.')
      return
    }

    const payload = {
      name: form.name.trim(),
      price,
      description: form.description.trim(),
      includes: form.includes
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean),
      link: form.link.trim(),
      categoryId: form.categoryId,
      featured: form.featured,
    }

    if (editingId) {
      updateProduct(editingId, payload)
    } else {
      addProduct(payload)
    }

    setError('')
    resetForm()
  }

  if (!isAdmin) {
    return (
      <div className="bg-mesh flex min-h-screen items-center justify-center px-5">
        <form
          onSubmit={onLogin}
          className="w-full max-w-md border border-white/10 bg-ink-900/80 p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-green">Admin</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-frost-50">
            Panel administratora
          </h1>
          <p className="mt-3 text-sm text-frost-300">
            Zaloguj się, aby dodawać i edytować produkty w sklepie.
          </p>
          <label className="mt-8 block">
            <span className="mb-1.5 block text-xs text-frost-300">Hasło</span>
            <input
              className="field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </label>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <button type="submit" className="btn-primary mt-6 w-full">
            Zaloguj
          </button>
          <a href="#/" className="mt-4 inline-block text-sm text-frost-300 hover:text-frost-50">
            ← Wróć na stronę
          </a>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-mesh min-h-screen">
      <header className="border-b border-white/8 bg-ink-950/80 backdrop-blur-xl">
        <div className="container-page flex h-16 items-center justify-between sm:h-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-green">Admin</p>
            <h1 className="font-display text-lg font-semibold tracking-tight text-frost-50">
              Zarządzanie sklepem
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a href="#/" className="btn-ghost !px-4 !py-2 text-sm">
              Strona
            </a>
            <button type="button" onClick={logout} className="btn-ghost !px-4 !py-2 text-sm">
              Wyloguj
            </button>
          </div>
        </div>
      </header>

      <main className="container-page grid gap-10 py-10 lg:grid-cols-[1fr_1fr]">
        <section className="border border-white/10 bg-ink-900/50 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-frost-50">
            {editingId ? 'Edytuj produkt' : 'Dodaj produkt'}
          </h2>
          <p className="mt-2 text-sm text-frost-300">
            Nowe produkty pojawią się od razu w sekcji Sklep.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs text-frost-300">Nazwa</span>
              <input
                className="field"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs text-frost-300">Cena (PLN)</span>
                <input
                  className="field"
                  type="number"
                  min="0"
                  step="1"
                  value={form.price}
                  onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs text-frost-300">Kategoria</span>
                <select
                  className="field"
                  value={form.categoryId}
                  onChange={(e) => setForm((f) => ({ ...f, categoryId: e.target.value }))}
                >
                  {shopCategoryOptions.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs text-frost-300">Opis</span>
              <textarea
                className="field min-h-[100px] resize-y"
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                required
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs text-frost-300">Link do produktu</span>
              <input
                className="field"
                type="url"
                placeholder="https://przyklad.netlify.app"
                value={form.link}
                onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
              />
              <span className="mt-1.5 block text-xs text-frost-300/70">
                Na stronie nie da się kupić produktu — link tylko do podglądu / realizacji.
              </span>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs text-frost-300">
                Co zawiera (każda linia = jeden punkt)
              </span>
              <textarea
                className="field min-h-[110px] resize-y"
                value={form.includes}
                onChange={(e) => setForm((f) => ({ ...f, includes: e.target.value }))}
                placeholder={'Projekt strony głównej\nDostosowanie do telefonu'}
              />
            </label>

            <label className="flex items-center gap-3 text-sm text-frost-200">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
                className="h-4 w-4 accent-signal-green"
              />
              Oznacz jako polecany
            </label>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="btn-primary">
                {editingId ? 'Zapisz zmiany' : 'Dodaj produkt'}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} className="btn-ghost">
                  Anuluj edycję
                </button>
              )}
            </div>
          </form>

          <p className="mt-8 font-mono text-[10px] font-semibold leading-relaxed tracking-[0.06em] text-frost-300">
            {site.moneyNotice}
          </p>
        </section>

        <section className="border border-white/10 bg-ink-900/50 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-frost-50">
            Twoje produkty ({products.length})
          </h2>

          {products.length === 0 ? (
            <p className="mt-6 text-sm text-frost-300">
              Brak produktów. Dodaj pierwszą ofertę po lewej stronie.
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {products.map((product) => {
                const category = shopCategoryOptions.find((c) => c.id === product.categoryId)
                return (
                  <li key={product.id} className="border border-white/10 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-lg font-semibold text-frost-50">
                          {product.name}
                        </p>
                        <p className="mt-1 text-sm text-signal-blue">{formatPrice(product.price)}</p>
                        <p className="mt-1 text-xs text-frost-300/70">
                          {category?.name || 'Inne'}
                          {product.featured ? ' · Polecany' : ''}
                        </p>
                        {product.link && (
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-block break-all text-xs text-signal-blue hover:underline"
                          >
                            {product.link}
                          </a>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(product)}
                          className="border border-white/15 px-3 py-1.5 text-xs text-frost-200 hover:border-white/30"
                        >
                          Edytuj
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (confirm(`Usunąć „${product.name}”?`)) deleteProduct(product.id)
                          }}
                          className="border border-red-400/30 px-3 py-1.5 text-xs text-red-300 hover:border-red-400/60"
                        >
                          Usuń
                        </button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-frost-300">{product.description}</p>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </main>
    </div>
  )
}
