import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SwapPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
          Stablecoin FX
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          Swap on <span style={{ color: '#E3C896' }}>Arc</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Onchain stablecoin FX and swaps on Arc are coming soon, once mainnet launches.
        </p>
      </div>

      <div className="flex justify-center items-start py-16 px-4">
        <div
          className="w-full max-w-md rounded-2xl border px-6 py-16 text-center text-sm text-gray-500"
          style={{ borderColor: 'rgba(227,200,150,0.2)', backgroundColor: 'rgba(227,200,150,0.04)' }}
        >
          Swap widget coming soon.
        </div>
      </div>

      <Footer />
    </main>
  )
}
