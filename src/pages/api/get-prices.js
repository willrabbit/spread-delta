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
    .limit(50)

  if (error) {
    console.error('Supabase error:', error)
    return res.status(500).json({ error: 'Failed to fetch prices' })
  }

  res.status(200).json(data)
}
