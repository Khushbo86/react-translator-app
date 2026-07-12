import { useState, useEffect, useCallback } from "react";

function RandomPage() {
  const [randomString, setRandomString] = useState("");
  const [length, setLength] = useState(12);

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

  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Random String Generator
        </h1>

        <label className="block mb-2 font-medium">
          String Length
        </label>

        <input
          type="number"
          min="4"
          max="30"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="border w-full rounded-lg px-4 py-2 mb-5"
        />

        <button
          onClick={generateRandomString}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Generate Random String
        </button>

        <div className="mt-6 bg-gray-100 p-4 rounded-lg break-all">
          {randomString}
        </div>

      </div>
    </div>
  );
}

export default RandomPage;