import { useState, useEffect, useCallback } from "react";

function RandomPage() {
  const [randomString, setRandomString] = useState("");
  const [length, setLength] = useState(12);
  const [copied, setCopied] = useState(false);

  const generateRandomString = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setRandomString(result);
  }, [length]);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomString);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-slate-900">
            Random String Generator
          </h1>

          <p className="mt-4 text-slate-500 text-lg">
            Generate secure random strings for testing, development, or unique identifiers.
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <div className="mb-8">

            <label className="block text-slate-700 font-medium mb-3">
              String Length
            </label>

            <input
              type="range"
              min="4"
              max="50"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />

            <div className="flex justify-between mt-2 text-sm text-slate-500">
              <span>4</span>
              <span className="font-semibold text-indigo-600">
                {length} Characters
              </span>
              <span>50</span>
            </div>

          </div>

          <button
            onClick={generateRandomString}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-3 rounded-xl"
          >
            Generate String
          </button>

          <div className="mt-10">

            <div className="flex justify-between items-center mb-3">

              <h2 className="text-xl font-semibold text-slate-800">
                Generated String
              </h2>

              <button
                onClick={copyToClipboard}
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Copy
              </button>

            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 min-h-[120px] flex items-center break-all text-slate-700 font-mono text-lg">

              {randomString}

            </div>

            {copied && (
              <p className="mt-4 text-green-600 font-medium">
                Copied successfully!
              </p>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default RandomPage;