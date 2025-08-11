import Header from '../components/Header'

export default function Success() {
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Thanks — your order is on its way!</h1>
        <p className="mt-4">This was a test purchase using Stripe Test mode.</p>
      </main>
    </div>
  )
}
