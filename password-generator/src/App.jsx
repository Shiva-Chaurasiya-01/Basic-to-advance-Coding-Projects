import { useState, useCallback, useEffect } from "react";

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    // base letters
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // add numbers and symbols if allowed
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}_-~`[]";

    // build password
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * str.length); // 0..str.length-1
      pass += str.charAt(idx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // regenerate when options change
  useEffect(() => {
    passwordGenerator();
    // only depend on passwordGenerator (which itself depends on length, flags)
  }, [passwordGenerator]);

  // copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      // small visual feedback could be added; keep it simple
      alert("Password copied to clipboard");
    } catch {
      alert("Copy failed — please select and copy manually.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-neutral-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-700">
        <h1 className="text-white text-2xl font-semibold text-center mb-4">
          Password Generator
        </h1>

        {/* output + copy */}
        <div className="flex gap-2 items-center mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent border border-slate-600 rounded-md px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Generated password"
          />
          <button
            onClick={copyToClipboard}
            className="ml-2 px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white shadow"
          >
            Copy
          </button>
        </div>

        {/* length control */}
        <div className="mb-4">
          <label className="text-sm text-slate-300 block mb-1">
            Length: {length}
          </label>
          <input
            type="range"
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* options */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <label className="inline-flex items-center gap-2 text-slate-200">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((p) => !p)}
              className="h-4 w-4 rounded text-indigo-500"
            />
            <span>Include numbers</span>
          </label>

          <label className="inline-flex items-center gap-2 text-slate-200">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((p) => !p)}
              className="h-4 w-4 rounded text-indigo-500"
            />
            <span>Include special characters</span>
          </label>

          <button
            onClick={passwordGenerator}
            className="ml-auto px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white shadow"
          >
            Regenerate
          </button>
        </div>

        {/* helper / note */}
        <p className="text-xs text-slate-400">
          Tip: Increase length and enable numbers/special characters for a
          stronger password.
        </p>
      </div>
    </div>
  );
}
