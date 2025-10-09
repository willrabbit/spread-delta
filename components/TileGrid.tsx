import Tile from './Tile';

type TileData = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

type Preferences = Record<string, string>;

export default function TileGrid({
  tiles,
  preferences,
}: {
  tiles: TileData[];
  preferences?: Preferences;
}) {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">SpreadDelta Gateway Tiles</h2>
      <div className="flex flex-wrap gap-4 justify-start">
        {tiles.map((tile, idx) => (
          <Tile key={idx} {...tile} preferences={preferences} />
        ))}
      </div>
    </div>
  );
}
