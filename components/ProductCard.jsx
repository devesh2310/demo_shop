import Link from 'next/link'

export default function ProductCard({ product }){
  return (
    <div className="border rounded overflow-hidden">
      <img src={product.image} className="w-full h-48 object-cover" alt={product.name} />
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="mt-2">${product.price.toFixed(2)}</p>
        <Link href={`/product/${product.id}`}>
          <a className="inline-block mt-3 bg-blue-600 text-white px-3 py-1 rounded">View</a>
        </Link>
      </div>
    </div>
  )
}
