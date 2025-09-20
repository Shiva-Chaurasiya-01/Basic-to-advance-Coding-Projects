import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full min-h-screen transition-colors duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 bottom-12 px-4 flex justify-center">
        <div className="flex flex-wrap gap-3 items-center bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-gray-100">
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-md bg-red-500 hover:brightness-90 focus-visible:ring-4 focus-visible:ring-red-200"
            onClick={() => {
              setColor("Red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-md bg-green-500 hover:brightness-90 focus-visible:ring-4 focus-visible:ring-green-200"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black font-medium shadow-md bg-yellow-400 hover:brightness-95 focus-visible:ring-4 focus-visible:ring-yellow-200"
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-md bg-orange-500 hover:brightness-90 focus-visible:ring-4 focus-visible:ring-orange-200"
            onClick={() => {
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-md bg-purple-500 hover:brightness-90 focus-visible:ring-4 focus-visible:ring-purple-200"
            onClick={() => {
              setColor("purple");
            }}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-md bg-pink-500 hover:brightness-90 focus-visible:ring-4 focus-visible:ring-pink-200"
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-md bg-teal-500 hover:brightness-90 focus-visible:ring-4 focus-visible:ring-teal-200"
            onClick={() => {
              setColor("teal");
            }}
          >
            Teal
          </button>
        </div>
      </div>
    </div>
  );
}
