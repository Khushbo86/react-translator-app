import { useState } from "react";
import { translateText } from "../services/translatorService";
import LoadingSpinner from "../components/LoadingSpinner";

function TranslatorPage() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

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

      setTranslatedText(
        data.trans ||
          data.translation ||
          data.data ||
          JSON.stringify(data)
      );
    } catch (err) {
      setError("Translation failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-blue-100 via-white to-purple-100 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          🌍 Language Translator
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Translate English text into multiple languages instantly.
        </p>

        <label className="font-semibold text-gray-700">
          Enter English Text
        </label>

        <textarea
          rows="6"
          className="w-full border border-gray-300 rounded-lg p-4 mt-2 mb-6 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Example: Hello, how are you today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label className="font-semibold text-gray-700">
          Translate To
        </label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="hi">🇮🇳 Hindi</option>
          <option value="es">🇪🇸 Spanish</option>
          <option value="fr">🇫🇷 French</option>
          <option value="de">🇩🇪 German</option>
          <option value="it">🇮🇹 Italian</option>
          <option value="pt">🇵🇹 Portuguese</option>
          <option value="ru">🇷🇺 Russian</option>
          <option value="ja">🇯🇵 Japanese</option>
          <option value="ko">🇰🇷 Korean</option>
          <option value="zh-CN">🇨🇳 Chinese</option>
          <option value="ar">🇸🇦 Arabic</option>
        </select>

        <button
          onClick={handleTranslate}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {loading && <LoadingSpinner />}

        {error && (
          <p className="text-red-500 mt-4 text-center font-medium">
            {error}
          </p>
        )}

        {!translatedText && !loading && !error && (
          <div className="mt-8 border border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-400">
            No translation yet.
          </div>
        )}

        {translatedText && (
          <div className="mt-8">

            <h2 className="text-xl font-bold mb-3 text-gray-700">
              Translated Text
            </h2>

            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[120px] break-words text-gray-700">
              {translatedText}
            </div>

            <button
              onClick={copyToClipboard}
              className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              📋 Copy Translation
            </button>

            {copied && (
              <p className="text-green-600 mt-3 font-semibold animate-pulse">
                ✅ Copied Successfully!
              </p>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

export default TranslatorPage;