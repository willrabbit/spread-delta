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
    <main style={{ padding: '2rem' }}>
      <h1>SpreadDelta Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Source</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((p, i) => (
            <tr key={i}>
              <td>{p.timestamp}</td>
              <td>{p.source}</td>
              <td>{p.price_usd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
