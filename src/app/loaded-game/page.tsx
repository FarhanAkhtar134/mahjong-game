"use client";

import React, { useEffect, useState } from "react";
import { TileData, allTiles, checkWinner } from "../utils/util";
import Tile from "../components/tile";
import { Box, Typography, Paper, Button } from "@mui/material";

const getRandomTiles = (num: number): TileData[] => {
  const shuffledTiles = [...allTiles].sort(() => 0.5 - Math.random());
  return shuffledTiles.slice(0, num);
};

const LoadedGame: React.FC = () => {
  const [deck, setDeck] = useState<TileData[]>(allTiles);
  const [playerHand, setPlayerHand] = useState<TileData[]>([]);
  const [selectedTile, setSelectedTile] = useState<TileData | null>(null);
  const [playerScore, setPlayerScore] = useState<number>(100);
  const [botScore, setBotScore] = useState<number>(100);
  const [botDiscardedTiles, setBotDiscardedTiles] = useState<TileData[]>([]);
  const [hasDrawnTile, setHasDrawnTile] = useState<boolean>(false);

  useEffect(() => {
    const loadedGame = localStorage.getItem("loadedGame");
    if (loadedGame) {
      const gameData = JSON.parse(loadedGame);
      setPlayerHand(gameData.playerHand);
      setPlayerScore(gameData.playerScore);
      setBotScore(gameData.botScore);
      setBotDiscardedTiles(gameData.botDiscardedTiles);
      setDeck(allTiles); // Adjust if needed
    } else {
      // Handle the case where no game data is found
      alert("No game loaded.");
    }
  }, []);

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
      setSelectedTile(null);
    } else {
      setSelectedTile(tile);
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
      setHasDrawnTile(false);
    }
  };

  const botTurn = () => {
    const botTile = getRandomTiles(1)[0];
    setBotDiscardedTiles((prev) => [...prev, botTile]);
    setBotScore((prevScore) => prevScore - botTile.value);
  };

  const saveGame = async () => {
    const gameState = {
      playerHand,
      playerScore,
      botScore,
      botDiscardedTiles,
    };

    try {
      const response = await fetch("http://localhost:8000/saveGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameState),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Failed to save game.");
      }
    } catch (error) {
      console.error("Error saving game:", error);
      alert("An error occurred while saving the game.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        background: "linear-gradient(to right, #2196F3, #E91E63)",
        p: 4,
      }}
      p={4}
    >
      <Typography variant="h4" color="white" mb={4}>
        Loaded Game
      </Typography>

      <Paper
        elevation={3}
        sx={{ padding: 2, maxWidth: 600, width: "100%", mb: 4 }}
      >
        <Typography variant="h6" gutterBottom>
          Player Hand
        </Typography>
        <Box display="flex" overflow="auto" mb={2}>
          {playerHand.map((tile, index) => (
            <Tile
              key={index}
              tile={tile.svgPath}
              selected={selectedTile?.svgPath === tile.svgPath}
              onSelect={() => handleSelectTile(tile)}
              size="w-24 h-24"
            />
          ))}
        </Box>
        <Typography variant="h6" gutterBottom>
          Score: {playerScore}
        </Typography>
        <Button
          onClick={drawTile}
          variant="contained"
          color="primary"
          disabled={hasDrawnTile}
          sx={{ width: "100%", mb: 2 }}
        >
          Draw Tile
        </Button>
        <Button
          onClick={handleDiscardTile}
          variant="contained"
          color="secondary"
          disabled={!hasDrawnTile || !selectedTile}
          sx={{ width: "100%", mb: 2 }}
        >
          Discard Selected Tile
        </Button>
        <Button
          onClick={saveGame}
          variant="contained"
          color="info"
          sx={{ width: "100%" }}
        >
          Save Game
        </Button>
      </Paper>

      <Paper
        elevation={3}
        sx={{ padding: 2, maxWidth: 600, width: "100%", flexGrow: 1 }}
      >
        <Typography variant="h6" gutterBottom>
          Bot's Discarded Tiles
        </Typography>
        <Box display="flex" overflow="auto" mb={2}>
          {botDiscardedTiles.map((tile, index) => (
            <img
              key={index}
              src={`/tiles/${tile.svgPath}`}
              alt={`Bot Discarded Tile`}
              className="w-24 h-24 bg-red-200 rounded-lg mx-2"
            />
          ))}
        </Box>
        <Typography variant="h6" gutterBottom>
          Bot's Score: {botScore}
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoadedGame;
