import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              Fast • Reliable • Secure
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Translate Text
              <br />
              <span className="text-indigo-600">
                Without Boundaries.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              Translate English text into multiple languages in seconds using
              a powerful translation API. Generate secure random strings with
              a clean and intuitive interface designed for productivity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/translator"
                className="px-7 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md"
              >
                Start Translating
              </Link>

              <Link
                to="/random"
                className="px-7 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-white hover:shadow-md transition-all duration-300"
              >
                Generate Strings
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8">

              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Why Choose Lexora?
              </h2>

              <div className="space-y-7">

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl">
                    ⚡
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Instant Translation
                    </h3>

                    <p className="text-slate-500 mt-1">
                      Translate text quickly using a reliable cloud-based API.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-xl">
                    🌐
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Multiple Languages
                    </h3>

                    <p className="text-slate-500 mt-1">
                      Easily switch between popular languages from one place.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">
                    🔒
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Random String Generator
                    </h3>

                    <p className="text-slate-500 mt-1">
                      Generate secure random strings for development, testing,
                      and unique identifiers.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8">

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-indigo-600">
                    10+
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Languages
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-indigo-600">
                    2
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Utilities
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-indigo-600">
                    100%
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    Responsive
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default HomePage;