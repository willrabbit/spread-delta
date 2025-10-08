import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    async function fetchPrices() {
      const res = await fetch('/api/get-prices')
      const data = await res.json()
      setPrices(data)
    }
    fetchPrices()
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 SpreadDelta Dashboard</h1>
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
