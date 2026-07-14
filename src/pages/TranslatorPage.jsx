import { useState } from "react";
import { translateText } from "../services/translatorService";
import LoadingSpinner from "../components/LoadingSpinner";

function TranslatorPage() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) {
      setError("Please enter some text.");
      return;
    }

    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const data = await translateText(text, language);

      // Adjust this if your API response structure is different
      setTranslatedText(data.trans || data.translation || data.data || JSON.stringify(data));
    } catch (err) {
      setError("Translation failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-[85vh] bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          🌍 Text Translator
        </h1>

        <label className="font-semibold">
          Enter English Text
        </label>

        <textarea
          rows="5"
          className="w-full border rounded-lg p-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label className="font-semibold">
          Translate To
        </label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border rounded-lg p-3 mt-2 mb-6"
        >
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
        </select>

        <button
          onClick={handleTranslate}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Translate
        </button>

        {loading && <LoadingSpinner />}

        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}

        {translatedText && (
          <div className="mt-8">

            <h2 className="text-xl font-bold mb-2">
              Translated Text
            </h2>

            <div className="border rounded-lg p-4 bg-gray-50 break-words">
              {translatedText}
            </div>

            <button
              onClick={copyToClipboard}
              className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Copy Translation
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default TranslatorPage;
