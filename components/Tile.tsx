type TileProps = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

const signalColors = {
  buy: {
    bg: '#d1fae5', // Tailwind green-100
    border: '#6ee7b7', // Tailwind green-300
    text: '#047857', // Tailwind green-700
  },
  sell: {
    bg: '#fee2e2', // Tailwind red-100
    border: '#fca5a5', // Tailwind red-300
    text: '#b91c1c', // Tailwind red-700
  },
  neutral: {
    bg: '#fef3c7', // Tailwind yellow-100
    border: '#fde68a', // Tailwind yellow-300
    text: '#92400e', // Tailwind yellow-700
  },
  opportunity: {
    bg: '#dbeafe', // Tailwind blue-100
    border: '#93c5fd', // Tailwind blue-300
    text: '#1e3a8a', // Tailwind blue-700
  },
};

export default function Tile({ name, price, signal }: TileProps) {
  const colors = signalColors[signal] || {
    bg: '#f3f4f6', // gray-100
    border: '#d1d5db', // gray-300
    text: '#374151', // gray-700
  };

  return (
    <div
      className="aspect-square w-full max-w-[140px] min-w-[120px] flex flex-col justify-between items-start rounded-lg p-3 shadow hover:shadow-md transition border"
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border,
        borderWidth: '1px',
      }}
    >
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-700">Price: {price}</p>
      <p className="text-xs font-bold" style={{ color: colors.text }}>
        {signal.toUpperCase()}
      </p>
    </div>
  );
}
