import { useEffect, useState } from 'react'
import PriceChart from '../components/PriceChart'


export default function Dashboard() {
  const [prices, setPrices] = useState([])
  const [sourceFilter, setSourceFilter] = useState('all')

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch('/api/get-prices')
      const data = await res.json()
      setPrices(data)
    }
    fetchPrices()
  }, [])

  const filteredPrices =
    sourceFilter === 'all'
      ? prices
      : prices.filter(p => p.source === sourceFilter)

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 SpreadDelta Dashboard</h1>

        {/* Filter Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Source</label>
          <select
            value={sourceFilter}
            onChange={e => setSourceFilter(e.target.value)}
            className="border rounded px-3 py-2 w-full max-w-xs"
          >
            <option value="all">All Sources</option>
            <option value="Binance">Binance</option>
            <option value="Coinbase">Coinbase</option>
            <option value="Kraken">Kraken</option>
          </select>
        </div>

        <PriceChart prices={filteredPrices} />

        <a
          href="/api/export-prices"
          className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          download
        >
          📤 Download CSV
        </a>


// Inside your return block
<PriceChart prices={prices} />
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-sm text-gray-700">
              <th className="p-3">Timestamp</th>
              <th className="p-3">Source</th>
              <th className="p-3">Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((p, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3 text-sm text-gray-600">{p.timestamp}</td>
                <td className="p-3 text-sm text-gray-600">{p.source}</td>
                <td className="p-3 text-sm text-gray-600">${p.price_usd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
