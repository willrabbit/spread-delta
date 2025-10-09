type TileProps = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

export default function Tile({ name, price, signal }: TileProps) {
  let tileClass = '';

  if (signal === 'buy') {
    tileClass = 'bg-green-100 border-green-300 text-green-700';
  } else if (signal === 'sell') {
    tileClass = 'bg-red-100 border-red-300 text-red-700';
  } else if (signal === 'neutral') {
    tileClass = 'bg-yellow-100 border-yellow-300 text-yellow-700';
  } else if (signal === 'opportunity') {
    tileClass = 'bg-blue-100 border-blue-300 text-blue-700';
  } else {
    tileClass = 'bg-gray-100 border-gray-300 text-gray-700';
  }

  return (
    <div
      className={`aspect-square w-full max-w-[140px] min-w-[120px] flex flex-col justify-between items-start rounded-lg p-3 shadow hover:shadow-md transition border ${tileClass}`}
    >
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-700">Price: {price}</p>
      <p className="text-xs font-bold">{signal.toUpperCase()}</p>
    </div>
  );
}
