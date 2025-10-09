import Tile from './Tile';

type TileData = {
  name: string;
  price: string;
  signal: 'buy' | 'sell' | 'neutral' | 'opportunity';
};

export default function TileGrid({ tiles }: { tiles: TileData[] }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">SpreadDelta Gateway Tiles</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
        {tiles.map((tile, idx) => (
          <Tile key={idx} {...tile} />
        ))}
      </div>
    </div>
  );
}
