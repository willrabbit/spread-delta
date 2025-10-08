import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('prices')
    .select('*')
    .order('timestamp', { ascending: false })

  if (error) {
    console.error('Supabase error:', error)
    return res.status(500).json({ error: 'Failed to fetch prices' })
  }

  const headers = ['timestamp', 'source', 'price_usd']
  const rows = data.map(row =>
    [row.timestamp, row.source, row.price_usd].join(',')
  )

  const csv = [headers.join(','), ...rows].join('\n')

  res.setHeader('Content-Type', 'text/csv')
  res.setHeader('Content-Disposition', 'attachment; filename="prices.csv"')
  res.status(200).send(csv)
}
