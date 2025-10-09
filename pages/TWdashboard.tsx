import TileGrid from '../components/TileGrid';

const sampleTiles = [
  { name: 'XRP/USD', price: '$2.83', signal: 'buy' as const },
  { name: 'BTC/USD', price: '$64,200', signal: 'sell' as const },
  { name: 'ETH/USD', price: '$3,150', signal: 'neutral' as const },
  { name: 'XRPL Gateway', price: 'Spread: 0.45%', signal: 'opportunity' as const },
];

export default function Dashboard() {
  return <TileGrid tiles={sampleTiles} />;
}
