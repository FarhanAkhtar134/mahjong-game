// src/app/load-game/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { TileData } from "../utils/util";

interface SavedGame {
  id: number;
  playerHand: TileData[];
  playerScore: number;
  botScore: number;
  botDiscardedTiles: TileData[];
  createdAt: string; 
}

const LoadGame: React.FC = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSavedGames = async () => {
      try {
        const response = await fetch("http://localhost:8000/loadGames");
        if (response.ok) {
          const games = await response.json();

          const mappedGames: SavedGame[] = games.map((game: any) => ({
            id: game.id,
            playerHand: game.player_hand,
            playerScore: game.player_score,
            botScore: game.bot_score,
            botDiscardedTiles: game.bot_discarded_tiles,
            createdAt: game.created_at, 
          }));

          // Sort games by createdAt in descending order
          mappedGames.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());


          setSavedGames(mappedGames);
        } else {
          console.error("Failed to load saved games");
        }
      } catch (error) {
        console.error("Error fetching saved games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedGames();
  }, []);

  const loadGame = (game: SavedGame) => {
    localStorage.setItem("loadedGame", JSON.stringify(game));
    window.location.href = "/loaded-game";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to right, #2196F3, #E91E63)",
        p: 4,
      }}
      p={4}
    >
      <Typography variant="h4" color="white" mb={4}>
        Load Game
      </Typography>

      {loading ? (
        <Typography variant="h6" color="white">
          Loading saved games...
        </Typography>
      ) : (
        savedGames.map((game) => (
          <Paper
            key={game.id}
            elevation={3}
            sx={{ padding: 2, maxWidth: 600, width: "100%", mb: 2 }}
          >
            <Typography variant="h6" gutterBottom>
              Game ID: {game.id}
            </Typography>
            <Typography variant="body1">
              Player Score: {game.playerScore} | Bot Score: {game.botScore}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Created At: {new Date(game.createdAt).toLocaleString()}
            </Typography>
            <Button
              onClick={() => loadGame(game)}
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Load This Game
            </Button>
          </Paper>
        ))
      )}
    </Box>
  );
};

export default LoadGame;
