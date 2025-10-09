import TileGrid from '../components/TileGrid';

const sampleTiles = [
  { name: 'XRP/USD', price: '$2.83', signal: 'buy' },
  { name: 'BTC/USD', price: '$64,200', signal: 'sell' },
  { name: 'ETH/USD', price: '$3,150', signal: 'neutral' },
  { name: 'XRPL Gateway', price: 'Spread: 0.45%', signal: 'opportunity' },
];

export default function Dashboard() {
  return <TileGrid tiles={sampleTiles} />;
}