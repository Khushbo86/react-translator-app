import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4">

      <h1 className="text-5xl font-bold text-blue-700 mb-4">
        Welcome to Translator App
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Translate English text into multiple languages using RapidAPI and
        generate random strings using React Hooks.
      </p>

      <div className="flex gap-6">
        <Link
          to="/translator"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Open Translator
        </Link>

        <Link
          to="/random"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Random Generator
        </Link>
      </div>

    </div>
  );
}

export default HomePage;