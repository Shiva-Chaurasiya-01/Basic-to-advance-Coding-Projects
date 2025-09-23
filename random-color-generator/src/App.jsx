// App.jsx
import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#3498db");
  const [hexMode, setHexMode] = useState(true);

  function handleHexValue() {
    const hex = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${hex}`;
  }

  function handleRgbValue() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-lg font-semibold">Random Color Generator</h1>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setHexMode((prev) => !prev)}
              className="px-3 py-1 rounded-full text-sm font-medium
                         bg-slate-700 text-slate-200 hover:bg-slate-600 transition"
              aria-pressed={hexMode}
            >
              {hexMode ? "HEX" : "RGB"}
            </button>

            <button
              onClick={() =>
                setColor(hexMode ? handleHexValue() : handleRgbValue())
              }
              className="px-4 py-2 rounded-full bg-emerald-400 text-slate-900 font-semibold shadow hover:scale-105 transition-transform"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Color preview */}
        <div
          className="rounded-xl overflow-hidden border-2 border-slate-700 shadow-inner mb-4"
          style={{ backgroundColor: color }}
        >
          <div className="w-full h-40 flex items-center justify-center">
            <div
              className="px-4 py-2 rounded-md bg-black/30 text-white text-sm font-medium backdrop-blur-sm"
              style={{
                textShadow: "0 1px 2px rgba(0,0,0,0.6)",
              }}
            >
              Preview
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="px-3 py-2 rounded-lg bg-slate-900/60 text-slate-100 text-sm font-mono">
            {color}
          </div>
          <div className="text-xs text-slate-400">
            Tip: Click Generate or toggle format
          </div>
        </div>
      </div>
    </div>
  );
}
