type TileProps = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
  preferences?: Record<string, string>;
};

export default function Tile({ name, price, signal, preferences }: TileProps) {
  const defaultColors = {
    buy: { bg: '#d1fae5', border: '#6ee7b7', text: '#047857' },
    sell: { bg: '#fee2e2', border: '#fca5a5', text: '#b91c1c' },
    neutral: { bg: '#fef3c7', border: '#fde68a', text: '#92400e' },
    opportunity: { bg: '#dbeafe', border: '#93c5fd', text: '#1e3a8a' },
  };

  const colors = preferences
    ? {
        bg: preferences[`${signal}_bg`] || defaultColors[signal].bg,
        border: preferences[`${signal}_border`] || defaultColors[signal].border,
        text: preferences[`${signal}_text`] || defaultColors[signal].text,
      }
    : defaultColors[signal];

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
