type TileProps = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

const signalStyles = {
  buy: {
    bg: 'bg-green-100',
    border: 'border-green-300',
    text: 'text-green-700',
  },
  sell: {
    bg: 'bg-red-100',
    border: 'border-red-300',
    text: 'text-red-700',
  },
  neutral: {
    bg: 'bg-yellow-100',
    border: 'border-yellow-300',
    text: 'text-yellow-700',
  },
  opportunity: {
    bg: 'bg-blue-100',
    border: 'border-blue-300',
    text: 'text-blue-700',
  },
};

export default function Tile({ name, price, signal }: TileProps) {
  const style = signalStyles[signal];

  return (
    <div className={`aspect-square min-h-[150px] flex flex-col justify-between rounded-lg p-4 shadow hover:shadow-lg transition border ${style.bg} ${style.border}`}>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Price: {price}</p>
      <p className={`text-sm font-bold ${style.text}`}>{signal.toUpperCase()}</p>
    </div>
  );
}
