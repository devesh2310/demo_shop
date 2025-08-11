import { useRouter } from 'next/router'
import products from '../../data/products.json'
import Header from '../../components/Header'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)
  if (!product) return <div>Loading...</div>

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img src={product.image} className="w-full md:w-1/2 rounded" alt={product.name} />
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-4">{product.description}</p>
            <p className="mt-4 text-xl font-semibold">${product.price.toFixed(2)}</p>
            <a
              href={`/cart?add=${product.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 mt-6 rounded"
            >
              Add to cart
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
