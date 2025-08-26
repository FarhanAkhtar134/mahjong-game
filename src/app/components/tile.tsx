
import React from 'react';

interface TileProps {
  tile: string;
  selected: boolean;
  onSelect: (tile: string) => void;
  size?: string; 
}

const Tile: React.FC<TileProps> = ({ tile, selected, onSelect, size = 'w-16 h-16' }) => {
  return (
    <div className="mx-2">
      <img
        src={`/tiles/${tile}`}
        alt={`Tile ${tile}`}
        className={`cursor-pointer ${size} transition-transform duration-150 
          ${selected ? 'shadow-lg border-2 border-blue-500' : 'hover:scale-105'}`}
        onClick={() => onSelect(selected ? '' : tile)} // Deselect if selected
      />
    </div>
  );
};

export default Tile;