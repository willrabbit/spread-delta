type TileProps = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

const signalColors = {
  buy: 'bg-green-100 border-green-300 text-green-700',
  sell: 'bg-red-100 border-red-300 text-red-700',
  neutral: 'bg-yellow-100 border-yellow-300 text-yellow-700',
  opportunity: 'bg-blue-100 border-blue-300 text-blue-700',
};

export default function Tile({ name, price, signal }: TileProps) {
  return (
    <div className={`border rounded-lg p-4 shadow hover:shadow-lg transition ${signalColors[signal]}`}>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Price: {price}</p>
      <p className="text-sm font-bold">{signal.toUpperCase()}</p>
    </div>
  );
}