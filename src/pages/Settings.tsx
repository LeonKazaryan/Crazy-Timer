import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type SettingsProps = {
  time: number;
  setTime: (time: number) => void;
  name: string;
  setName: (name: string) => void;
};

export function Settings({ time, setTime, name, setName }: SettingsProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-96 shadow-2xl border border-white/20">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
          Timer settings
        </h2>
        <div className="mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
          />
        </div>
        <div className="mb-8">
          <select
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-200"
          >
            <option value="10">10 seconds</option>
            <option value="20">20 seconds</option>
            <option value="30">30 seconds</option>
          </select>
        </div>
        <button
          onClick={() => navigate("/timer")}
          className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transform hover:scale-105 transition duration-200 shadow-lg hover:shadow-pink-500/50"
        >
          Start Timer
        </button>
      </div>
    </div>
  );
}
