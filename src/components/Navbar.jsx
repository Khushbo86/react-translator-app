import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) =>
    `relative text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-indigo-600"
        : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-bold">
            L
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Lexora
            </h1>

            <p className="text-xs text-slate-500">
              AI Translation Suite
            </p>
          </div>
        </NavLink>

        <nav className="flex gap-8">

          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/translator" className={navStyle}>
            Translator
          </NavLink>

          <NavLink to="/random" className={navStyle}>
            Random Generator
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;