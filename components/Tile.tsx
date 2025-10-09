type TileProps = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

export default function Tile({ name, price, signal }: TileProps) {
  let bgColor = '';
  let borderColor = '';
  let textColor = '';

  switch (signal) {
    case 'buy':
      bgColor = 'bg-green-100';
      borderColor = 'border-green-300';
      textColor = 'text-green-700';
      break;
    case 'sell':
      bgColor = 'bg-red-100';
      borderColor = 'border-red-300';
      textColor = 'text-red-700';
      break;
    case 'neutral':
      bgColor = 'bg-yellow-100';
      borderColor = 'border-yellow-300';
      textColor = 'text-yellow-700';
      break;
    case 'opportunity':
      bgColor = 'bg-blue-100';
      borderColor = 'border-blue-300';
      textColor = 'text-blue-700';
      break;
    default:
      bgColor = 'bg-gray-100';
      borderColor = 'border-gray-300';
      textColor = 'text-gray-700';
  }

  return (
    <div
      className={`aspect-square w-full max-w-[140px] min-w-[120px] flex flex-col justify-between items-start rounded-lg p-3 shadow hover:shadow-md transition border ${bgColor} ${borderColor}`}
    >
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-700">Price: {price}</p>
      <p className={`text-xs font-bold ${textColor}`}>{signal.toUpperCase()}</p>
    </div>
  );
}
