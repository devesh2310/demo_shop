import Header from '../components/Header'
import products from '../data/products.json'
import { useRouter } from 'next/router'

function getCartFromQuery(q) {
  const params = new URLSearchParams(q || '')
  const add = params.get('add')
  const cart = params.get('cart')
  if (add) return [add]
  if (!cart) return []
  return cart.split(',')
}

export default function Cart() {
  const router = useRouter()
  const cartItems = getCartFromQuery(router.asPath.split('?')[1] || '')
  const items = cartItems.map(id => products.find(p => p.id === id)).filter(Boolean)
  const total = items.reduce((s, i) => s + (i?.price || 0), 0)

  async function checkout() {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems })
    })
    const data = await res.json()
    if (data.url) window.location = data.url
    else alert('Checkout failed')
  }

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {items.length === 0 && <p>Your cart is empty.</p>}
        <ul>
          {items.map(item => (
            <li key={item.id} className="py-3 border-b">{item.name} — ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="font-semibold">Total: ${total.toFixed(2)}</p>
          <button onClick={checkout} className="mt-3 bg-green-600 text-white px-4 py-2 rounded">Checkout (Stripe)</button>
        </div>
      </main>
    </div>
  )
}
