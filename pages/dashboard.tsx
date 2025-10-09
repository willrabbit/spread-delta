import { useEffect, useState } from 'react';
import TileGrid from '../components/TileGrid';
import { supabase } from '../lib/supabaseClient';

type Preferences = Record<string, string>;

export default function Dashboard() {
  const [preferences, setPreferences] = useState<Preferences | null>(null);

  useEffect(() => {
    const fetchPreferences = async () => {
      const { data, error } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', 'your-user-id') // Replace with actual user ID
        .single();

      if (data) setPreferences(data);
    };

    fetchPreferences();
  }, []);

  const sampleTiles = [
    { name: 'XRP/USD', price: '$2.83', signal: 'buy' as const },
    { name: 'BTC/USD', price: '$64,200', signal: 'sell' as const },
    { name: 'ETH/USD', price: '$3,150', signal: 'neutral' as const },
    { name: 'XRPL Gateway', price: 'Spread: 0.45%', signal: 'opportunity' as const },
  ];

  return <TileGrid tiles={sampleTiles} preferences={preferences || undefined} />;
}
