import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              Fast • Reliable • Modern
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Translate Text
              <br />
              <span className="text-indigo-600">
                Without Boundaries.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
              Lexora helps you translate English text into multiple
              languages instantly using a fast translation engine,
              while also providing a secure random string generator
              for developers and students.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/translator"
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
              >
                Start Translating
              </Link>

              <Link
                to="/random"
                className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
              >
                Random Generator
              </Link>

            </div>

          </div>

          {/* Right Card */}
          <div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8">

              <h2 className="text-2xl font-semibold text-slate-800">
                Why Choose Lexora?
              </h2>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    ⚡
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Lightning Fast
                    </h3>

                    <p className="text-slate-500">
                      Translate text within seconds using RapidAPI.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    🌎
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Multiple Languages
                    </h3>

                    <p className="text-slate-500">
                      Translate into multiple global languages with ease.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                    🔐
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Random Generator
                    </h3>

                    <p className="text-slate-500">
                      Generate secure random strings for development and testing.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-slate-900">
              Fast Translation
            </h3>

            <p className="mt-3 text-slate-500">
              Translate text instantly with minimal latency.
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-slate-900">
              Clean Interface
            </h3>

            <p className="mt-3 text-slate-500">
              A distraction-free experience designed for productivity.
            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-slate-900">
              Built with React
            </h3>

            <p className="mt-3 text-slate-500">
              Developed using React, Tailwind CSS and RapidAPI.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default HomePage;