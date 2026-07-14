function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Lexora
            </h2>

            <p className="mt-2 text-slate-500 max-w-md">
              A modern translation and utility application built with
              React, Tailwind CSS and RapidAPI.
            </p>

          </div>

          <div className="text-slate-500 text-sm text-center md:text-right">

            <p>Built with React • Tailwind CSS • RapidAPI</p>

            <p className="mt-2">
              © 2026 Lexora. All rights reserved.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;