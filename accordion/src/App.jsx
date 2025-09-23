// App.jsx
import React, { useState } from "react";
import Data from "./Data";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);
  const [multiEnable, setMultiEnable] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  // handle multi-selection toggle
  function handleMultiSelect(id) {
    setMultiSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id); // remove id if already open
      }
      return [...prev, id]; // add id if not open
    });
  }

  // helper: is this item open?
  function isOpen(id) {
    return multiEnable ? multiSelected.includes(id) : selected === id;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center p-6">
      {/* toggle mode button */}
      <button
        className="mb-6 px-4 py-2 bg-white text-black rounded-xl font-bold font-mono hover:scale-105 transition"
        onClick={() => setMultiEnable((prev) => !prev)}
      >
        {multiEnable ? "Multi Select Mode" : "Single Select Mode"}
      </button>

      {/* accordion items */}
      <div className="w-full max-w-md space-y-4">
        {Data.map((item) => (
          <div
            key={item.id}
            className="border border-gray-600 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition"
            onClick={() =>
              multiEnable
                ? handleMultiSelect(item.id)
                : setSelected((prev) => (prev === item.id ? null : item.id))
            }
          >
            <h3 className="flex justify-between items-center font-semibold">
              {item.question}
              <span>{isOpen(item.id) ? "-" : "+"}</span>
            </h3>

            {isOpen(item.id) && (
              <p className="mt-2 text-gray-300">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
