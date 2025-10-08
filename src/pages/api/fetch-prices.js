import { createClient } from '@supabase/supabase-js'
import fetch from 'node-fetch'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  const timestamp = new Date().toISOString()
  const prices = []

  // Bitstamp
  try {
    const bitstampRes = await fetch('https://www.bitstamp.net/api/v2/ticker/xrpusd/')
    const bitstampData = await bitstampRes.json()
    prices.push({ source: 'Bitstamp', price_usd: parseFloat(bitstampData.last) })
  } catch (err) {
    console.error('Bitstamp error:', err)
  }

  // Kraken
  try {
    const krakenRes = await fetch('https://api.kraken.com/0/public/Ticker?pair=XRPUSD')
    const krakenData = await krakenRes.json()
    const price = krakenData.result?.XXRPZUSD?.c?.[0]
    if (price) prices.push({ source: 'Kraken', price_usd: parseFloat(price) })
  } catch (err) {
    console.error('Kraken error:', err)
  }

  // Push to Supabase
  const inserts = prices.map(p =>
    supabase.from('prices').insert({
      timestamp,
      source: p.source,
      price_usd: p.price_usd
    })
  )

  await Promise.all(inserts)

  res.status(200).json({ status: 'Prices logged', prices })
}
