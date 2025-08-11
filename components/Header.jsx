import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link href="/"><a className="font-bold text-xl">MyShop</a></Link>
        <nav>
          <Link href="/cart"><a className="ml-4">Cart</a></Link>
        </nav>
      </div>
    </header>
  )
}
