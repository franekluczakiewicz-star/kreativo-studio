import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultProducts, shopCategoryOptions } from '../data/content'

const STORAGE_KEY = 'kreativo-shop-products'
const AUTH_KEY = 'kreativo-admin-auth'

const ShopContext = createContext(null)

function loadProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProducts
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : defaultProducts
  } catch {
    return defaultProducts
  }
}

function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
}

export function ShopProvider({ children }) {
  const [products, setProducts] = useState(() => loadProducts())
  const [isAdmin, setIsAdmin] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1')

  useEffect(() => {
    saveProducts(products)
  }, [products])

  const login = (password, expected) => {
    if (password === expected) {
      sessionStorage.setItem(AUTH_KEY, '1')
      setIsAdmin(true)
      return true
    }
    return false
  }

  const logout = () => {
    sessionStorage.removeItem(AUTH_KEY)
    setIsAdmin(false)
  }

  const addProduct = (product) => {
    const id = product.id || `product-${Date.now()}`
    setProducts((prev) => [...prev, { ...product, id }])
  }

  const updateProduct = (id, updates) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates, id } : p)))
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const productsByCategory = useMemo(() => {
    return shopCategoryOptions
      .map((category) => ({
        ...category,
        products: products.filter((p) => p.categoryId === category.id),
      }))
      .filter((category) => category.products.length > 0)
  }, [products])

  const value = {
    products,
    productsByCategory,
    isAdmin,
    login,
    logout,
    addProduct,
    updateProduct,
    deleteProduct,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const ctx = useContext(ShopContext)
  if (!ctx) throw new Error('useShop must be used within ShopProvider')
  return ctx
}
