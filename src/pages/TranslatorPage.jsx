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
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-slate-900">
            Text Translator
          </h1>

          <p className="mt-4 text-slate-500 text-lg">
            Translate English text into multiple languages instantly.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Input Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <h2 className="text-xl font-semibold text-slate-800 mb-6">
              Source Text
            </h2>

            <textarea
              rows="8"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your English text..."
              className="w-full rounded-xl border border-slate-300 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="mt-6">
              <label className="block mb-2 font-medium text-slate-700">
                Target Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
                <option value="ja">Japanese</option>
                <option value="ko">Korean</option>
                <option value="zh-CN">Chinese</option>
                <option value="ar">Arabic</option>
              </select>
            </div>

            <button
              onClick={handleTranslate}
              disabled={loading}
              className={`w-full mt-8 py-3 rounded-xl font-medium transition ${
                loading
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {loading ? "Translating..." : "Translate"}
            </button>

            {loading && <LoadingSpinner />}

            {error && (
              <p className="mt-4 text-red-500 text-sm">
                {error}
              </p>
            )}
          </div>

          {/* Output Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-xl font-semibold text-slate-800">
                Translation
              </h2>

              {translatedText && (
                <button
                  onClick={copyToClipboard}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Copy
                </button>
              )}

            </div>

            <div className="min-h-[300px] rounded-xl border border-slate-200 bg-slate-50 p-5">

              {translatedText ? (
                <p className="text-slate-700 whitespace-pre-wrap leading-7">
                  {translatedText}
                </p>
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  Your translated text will appear here.
                </div>
              )}

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

export default TranslatorPage;