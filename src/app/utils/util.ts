export interface TileData {
  type: string;
  value: number;
  svgPath: string;
}

export const allTiles: TileData[] = [
  // Bamboo tiles (1-9)
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-1.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-2.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-3.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-4.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-5.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-6.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-7.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-8.svg" },
  { type: "bamboo", value: 1, svgPath: "/bamboo/bamboo-9.svg" },

  // Characters tiles (1-9)
  { type: "characters", value: 1, svgPath: "/characters/characters-1.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-2.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-3.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-4.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-5.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-6.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-7.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-8.svg" },
  { type: "characters", value: 1, svgPath: "/characters/characters-9.svg" },

  // Circles tiles (1-9)
  { type: "circles", value: 1, svgPath: "/circles/circles-1.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-2.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-3.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-4.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-5.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-6.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-7.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-8.svg" },
  { type: "circles", value: 1, svgPath: "/circles/circles-9.svg" },

  // Dragons tiles
  { type: "dragons", value: 5, svgPath: "/dragons/dragons-red.svg" },
  { type: "dragons", value: 5, svgPath: "/dragons/dragons-green.svg" },
  { type: "dragons", value: 5, svgPath: "/dragons/dragons-white.svg" },

  // Winds tiles
  { type: "winds", value: 3, svgPath: "/winds/winds-north.svg" },
  { type: "winds", value: 3, svgPath: "/winds/winds-south.svg" },
  { type: "winds", value: 3, svgPath: "/winds/winds-east.svg" },
  { type: "winds", value: 3, svgPath: "/winds/winds-west.svg" },
];

export const checkWinningHand = (hand: TileData[]): boolean => {
  const tileCounts = hand.reduce((acc, tile) => {
    acc[tile.svgPath] = (acc[tile.svgPath] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const hasPongs = Object.values(tileCounts).some((count) => count >= 3);
  // Further checks for Chows, Kongs, etc. can be added here

  return hasPongs; // Update this logic to include all desired winning conditions
};

export const checkWinner = (
  playerHand: TileData[],
  botHand: TileData[],
  playerScore: number,
  botScore: number
) => {
  const playerWins = checkWinningHand(playerHand);
  const botWins = checkWinningHand(botHand);

  if (playerWins) {
    return "Player Wins with a Winning Hand!";
  } else if (botWins) {
    return "Bot Wins with a Winning Hand!";
  } else if (playerScore <= 0) {
    return "Player Wins by Score!";
  } else if (botScore <= 0) {
    return "Bot Wins by Score!";
  }
  return null; // No winner yet
};
