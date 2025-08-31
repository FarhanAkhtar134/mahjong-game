"use client";

import React from 'react';
import Link from 'next/link';

const NewGame: React.FC = () => {
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-purple-300">
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Digital Mahjong</h1>
      <p className="text-lg text-white mb-8">
        Choose an option below to proceed.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <Link href="/new-game">
          <button className="w-full bg-blue-500 text-white rounded-lg py-2 mb-4 hover:bg-blue-600 transition duration-200">
            New Game
          </button>
        </Link>
        <Link href="/load-game">
          <button className="w-full bg-blue-500 text-white rounded-lg py-2 mb-4 hover:bg-blue-600 transition duration-200">
            Load Game
          </button>
        </Link>
        <button
          onClick={() => console.log('Game Quit')}
          className="w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-600 transition duration-200"
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default NewGame;