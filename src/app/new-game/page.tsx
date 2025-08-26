// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { TileData, allTiles } from "../utils/util";
// // import Tile from "../components/tile";

// // const getRandomTiles = (num: number): TileData[] => {
// //   const shuffledTiles = [...allTiles].sort(() => 0.5 - Math.random());
// //   return shuffledTiles.slice(0, num);
// // };

// // const NewGame: React.FC = () => {
// //   const [deck, setDeck] = useState<TileData[]>(allTiles); // Deck of tiles
// //   const [playerHand, setPlayerHand] = useState<TileData[]>([]);
// //   const [selectedTile, setSelectedTile] = useState<TileData | null>(null);
// //   const [playerScore, setPlayerScore] = useState<number>(100);
// //   const [botScore, setBotScore] = useState<number>(100);
// //   const [botDiscardedTiles, setBotDiscardedTiles] = useState<TileData[]>([]);
// //   const [hasDrawnTile, setHasDrawnTile] = useState<boolean>(false); // Track if a tile has been drawn

// //   useEffect(() => {
// //     setPlayerHand(getRandomTiles(5)); // Start with a smaller hand
// //   }, []);

// //   const WINNING_SCORE = 80; // Define the winning score

// //   const checkWinner = () => {
// //     if (playerScore <= WINNING_SCORE) {
// //       alert("Player Wins!");
// //       resetGame(); // Call a function to reset the game
// //     } else if (botScore <= WINNING_SCORE) {
// //       alert("Bot Wins!");
// //       resetGame(); // Call a function to reset the game
// //     }
// //   };

// //   const resetGame = () => {
// //     setPlayerScore(100); // Reset player score
// //     setBotScore(100); // Reset bot score
// //     setPlayerHand(getRandomTiles(5)); // Reset player hand
// //     setBotDiscardedTiles([]); // Clear bot's discarded tiles
// //     setHasDrawnTile(false); // Reset draw state
// //   };

// //   const handleSelectTile = (tile: TileData) => {
// //     if (selectedTile?.svgPath === tile.svgPath) {
// //       setSelectedTile(null); // Deselect if the same tile is clicked
// //     } else {
// //       setSelectedTile(tile); // Select new tile
// //     }
// //   };

// //   const handleDiscardTile = () => {
// //     if (selectedTile) {
// //       setPlayerHand((prevHand) =>
// //         prevHand.filter((tile) => tile.svgPath !== selectedTile.svgPath)
// //       );
// //       setPlayerScore((prevScore) => prevScore - selectedTile.value);
// //       setSelectedTile(null);
// //       botTurn();
// //       setHasDrawnTile(false); // Allow drawing again after discarding
// //       checkWinner();
// //     }
// //   };

// //   const botTurn = () => {
// //     const botTile = getRandomTiles(1)[0]; // Bot discards a random tile
// //     setBotDiscardedTiles((prev) => [...prev, botTile]);
// //     setBotScore((prevScore) => prevScore - botTile.value);
// //     checkWinner(); // Check for a winner after the bot's turn

// //   };

// //   const drawTile = () => {
// //     if (deck.length > 0) {
// //       const drawnTile = deck[Math.floor(Math.random() * deck.length)];
// //       setPlayerHand((prevHand) => [...prevHand, drawnTile]);
// //       setDeck((prevDeck) =>
// //         prevDeck.filter((tile) => tile.svgPath !== drawnTile.svgPath)
// //       ); // Remove from deck
// //       setHasDrawnTile(true); // Mark that a tile has been drawn
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-purple-300 p-4 overflow-hidden">
// //       <h1 className="text-2xl font-bold text-white mb-4">New Game</h1>

// //       <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mb-4 flex-grow">
// //         <h2 className="text-xl font-semibold mb-2">Player Hand</h2>
// //         <div className="flex overflow-x-auto mb-2">
// //           {playerHand.map((tile, index) => (
// //             <Tile
// //               key={index}
// //               tile={tile.svgPath}
// //               selected={selectedTile?.svgPath === tile.svgPath}
// //               onSelect={() => handleSelectTile(tile)}
// //               size="w-24 h-24" // Adjust size of tiles
// //             />
// //           ))}
// //         </div>
// //         <h2 className="text-xl font-semibold mb-2">Score: {playerScore}</h2>
// //         <button
// //           onClick={handleDiscardTile}
// //           className="w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition duration-200 text-sm"
// //           disabled={!selectedTile}
// //         >
// //           Discard Selected Tile
// //         </button>
// //         <button
// //           onClick={drawTile}
// //           className={`w-full rounded-lg py-2 transition duration-200 ${
// //             hasDrawnTile
// //               ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// //               : "bg-green-500 text-white hover:bg-green-600"
// //           } mt-2 text-sm`}
// //           disabled={hasDrawnTile}
// //         >
// //           Draw Tile
// //         </button>
// //       </div>

// //       <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full flex-grow">
// //         <h2 className="text-xl font-semibold mb-2">Bot's Discarded Tiles</h2>
// //         <div className="flex overflow-x-auto mb-2">
// //           {botDiscardedTiles.map((tile, index) => (
// //             <img
// //               key={index}
// //               src={`/tiles/${tile.svgPath}`}
// //               alt={`Bot Discarded Tile`}
// //               className="w-24 h-24 bg-red-200 rounded-lg mx-2"
// //             />
// //           ))}
// //         </div>
// //         <h2 className="text-xl font-semibold mt-2">Bot's Score: {botScore}</h2>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NewGame;

// "use client";

// import React, { useEffect, useState } from "react";
// import { TileData, allTiles } from "../utils/util";
// import Tile from "../components/tile";

// const getRandomTiles = (num: number): TileData[] => {
//   const shuffledTiles = [...allTiles].sort(() => 0.5 - Math.random());
//   return shuffledTiles.slice(0, num);
// };

// const NewGame: React.FC = () => {
//   const [deck, setDeck] = useState<TileData[]>(allTiles);
//   const [playerHand, setPlayerHand] = useState<TileData[]>([]);
//   const [selectedTile, setSelectedTile] = useState<TileData | null>(null);
//   const [playerScore, setPlayerScore] = useState<number>(100);
//   const [botScore, setBotScore] = useState<number>(100);
//   const [botDiscardedTiles, setBotDiscardedTiles] = useState<TileData[]>([]);
//   const [hasDrawnTile, setHasDrawnTile] = useState<boolean>(false);

//   useEffect(() => {
//     resetGame();
//   }, []);

//   const resetGame = () => {
//     setPlayerScore(100);
//     setBotScore(100);
//     setPlayerHand(getRandomTiles(5));
//     setBotDiscardedTiles([]);
//     setDeck(allTiles);
//     setHasDrawnTile(false);
//     setSelectedTile(null);
//   };

//   const drawTile = () => {
//     if (deck.length > 0) {
//       const drawnTile = deck[Math.floor(Math.random() * deck.length)];
//       setPlayerHand((prevHand) => [...prevHand, drawnTile]);
//       setDeck((prevDeck) =>
//         prevDeck.filter((tile) => tile.svgPath !== drawnTile.svgPath)
//       );
//       setHasDrawnTile(true);
//     }
//   };

//   const handleSelectTile = (tile: TileData) => {
//     if (selectedTile?.svgPath === tile.svgPath) {
//       setSelectedTile(null); // Deselect if the same tile is clicked
//     } else {
//       setSelectedTile(tile); // Select new tile
//     }
//   };

//   const handleDiscardTile = () => {
//     if (selectedTile) {
//       setPlayerHand((prevHand) =>
//         prevHand.filter((tile) => tile.svgPath !== selectedTile.svgPath)
//       );
//       setPlayerScore((prevScore) => prevScore - selectedTile.value);
//       setSelectedTile(null);
//       botTurn();
//       setHasDrawnTile(false); // Reset draw state
//       checkWinner(); // Check for a winner after discarding
//     }
//   };

//   const botTurn = () => {
//     const botTile = getRandomTiles(1)[0];
//     setBotDiscardedTiles((prev) => [...prev, botTile]);
//     setBotScore((prevScore) => prevScore - botTile.value);
//     checkWinner(); // Check for a winner after the bot's turn
//   };

//   const checkWinner = () => {
//     if (playerScore <= 0) {
//       alert("Player Wins!");
//       resetGame();
//     } else if (botScore <= 0) {
//       alert("Bot Wins!");
//       resetGame();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-purple-300 p-4 overflow-hidden">
//       <h1 className="text-2xl font-bold text-white mb-4">New Game</h1>

//       <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mb-4 flex-grow">
//         <h2 className="text-xl font-semibold mb-2">Player Hand</h2>
//         <div className="flex overflow-x-auto mb-2">
//           {playerHand.map((tile, index) => (
//             <Tile
//               key={index}
//               tile={tile.svgPath}
//               selected={selectedTile?.svgPath === tile.svgPath}
//               onSelect={() => handleSelectTile(tile)}
//               size="w-24 h-24"
//             />
//           ))}
//         </div>
//         <h2 className="text-xl font-semibold mb-2">Score: {playerScore}</h2>
//         <button
//           onClick={drawTile}
//           className={`w-full rounded-lg py-2 transition duration-200 ${
//             hasDrawnTile
//               ? "bg-gray-400 text-gray-200 cursor-not-allowed"
//               : "bg-green-500 text-white hover:bg-green-600"
//           } mt-2`}
//           disabled={hasDrawnTile} // Disable if a tile has been drawn
//         >
//           Draw Tile
//         </button>
//         <button
//           onClick={handleDiscardTile}
//           className={`w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition duration-200 ${
//             !hasDrawnTile || !selectedTile
//               ? "cursor-not-allowed bg-gray-400 text-gray-200"
//               : ""
//           } mt-4`} // Added mt-4 for spacing
//           disabled={!hasDrawnTile || !selectedTile} // Disable if tile hasn't been drawn or no tile is selected
//         >
//           Discard Selected Tile
//         </button>
//       </div>

//       <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full flex-grow">
//         <h2 className="text-xl font-semibold mb-2">Bot's Discarded Tiles</h2>
//         <div className="flex overflow-x-auto mb-2">
//           {botDiscardedTiles.map((tile, index) => (
//             <img
//               key={index}
//               src={`/tiles/${tile.svgPath}`}
//               alt={`Bot Discarded Tile`}
//               className="w-24 h-24 bg-red-200 rounded-lg mx-2"
//             />
//           ))}
//         </div>
//         <h2 className="text-xl font-semibold mt-2">Bot's Score: {botScore}</h2>
//       </div>
//     </div>
//   );
// };

// export default NewGame;

"use client";

import React, { useEffect, useState } from "react";
import { TileData, allTiles, checkWinner } from "../utils/util";
import Tile from "../components/tile";


const getRandomTiles = (num: number): TileData[] => {
  const shuffledTiles = [...allTiles].sort(() => 0.5 - Math.random());
  return shuffledTiles.slice(0, num);
};

const NewGame: React.FC = () => {
  const [deck, setDeck] = useState<TileData[]>(allTiles);
  const [playerHand, setPlayerHand] = useState<TileData[]>([]);
  const [selectedTile, setSelectedTile] = useState<TileData | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(100);
  const [botScore, setBotScore] = useState<number>(100);
  const [botDiscardedTiles, setBotDiscardedTiles] = useState<TileData[]>([]);
  const [hasDrawnTile, setHasDrawnTile] = useState<boolean>(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setPlayerScore(100);
    setBotScore(100);
    setPlayerHand(getRandomTiles(5));
    setBotDiscardedTiles([]);
    setDeck(allTiles);
    setHasDrawnTile(false);
    setSelectedTile(null);
  };

  const drawTile = () => {
    if (deck.length > 0) {
      const drawnTile = deck[Math.floor(Math.random() * deck.length)];
      setPlayerHand((prevHand) => [...prevHand, drawnTile]);
      setDeck((prevDeck) =>
        prevDeck.filter((tile) => tile.svgPath !== drawnTile.svgPath)
      );
      setHasDrawnTile(true);
    }
  };

  const handleSelectTile = (tile: TileData) => {
    if (selectedTile?.svgPath === tile.svgPath) {
      setSelectedTile(null); // Deselect if the same tile is clicked
    } else {
      setSelectedTile(tile); // Select new tile
    }
  };

  const handleDiscardTile = () => {
    if (selectedTile) {
      setPlayerHand((prevHand) =>
        prevHand.filter((tile) => tile.svgPath !== selectedTile.svgPath)
      );
      setPlayerScore((prevScore) => prevScore - selectedTile.value);
      setSelectedTile(null);
      botTurn();
      setHasDrawnTile(false); // Reset draw state

      const winnerMessage = checkWinner(
        playerHand,
        botDiscardedTiles,
        playerScore,
        botScore
      );
      if (winnerMessage) {
        alert(winnerMessage);
        resetGame();
      }
    }
  };

  const botTurn = () => {
    const botTile = getRandomTiles(1)[0];
    setBotDiscardedTiles((prev) => [...prev, botTile]);
    setBotScore((prevScore) => prevScore - botTile.value);

    const winnerMessage = checkWinner(
      playerHand,
      botDiscardedTiles,
      playerScore,
      botScore
    );
    if (winnerMessage) {
      alert(winnerMessage);
      resetGame();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-purple-300 p-4 overflow-hidden">
      <h1 className="text-2xl font-bold text-white mb-4">New Game</h1>

      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full mb-4 flex-grow">
        <h2 className="text-xl font-semibold mb-2">Player Hand</h2>
        <div className="flex overflow-x-auto mb-2">
          {playerHand.map((tile, index) => (
            <Tile
              key={index}
              tile={tile.svgPath}
              selected={selectedTile?.svgPath === tile.svgPath}
              onSelect={() => handleSelectTile(tile)}
              size="w-24 h-24"
            />
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2">Score: {playerScore}</h2>
        <button
          onClick={drawTile}
          className={`w-full rounded-lg py-2 transition duration-200 ${
            hasDrawnTile
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          } mt-2`}
          disabled={hasDrawnTile} // Disable if a tile has been drawn
        >
          Draw Tile
        </button>
        <button
          onClick={handleDiscardTile}
          className={`w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition duration-200 ${
            !hasDrawnTile || !selectedTile
              ? "cursor-not-allowed bg-gray-400 text-gray-200"
              : ""
          } mt-4`}
          disabled={!hasDrawnTile || !selectedTile} // Disable if tile hasn't been drawn or no tile is selected
        >
          Discard Selected Tile
        </button>
      </div>

      <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full flex-grow">
        <h2 className="text-xl font-semibold mb-2">Bot's Discarded Tiles</h2>
        <div className="flex overflow-x-auto mb-2">
          {botDiscardedTiles.map((tile, index) => (
            <img
              key={index}
              src={`/tiles/${tile.svgPath}`}
              alt={`Bot Discarded Tile`}
              className="w-24 h-24 bg-red-200 rounded-lg mx-2"
            />
          ))}
        </div>
        <h2 className="text-xl font-semibold mt-2">Bot's Score: {botScore}</h2>
      </div>
    </div>
  );
};

export default NewGame;
