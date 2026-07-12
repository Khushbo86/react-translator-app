import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold">
          🌍 Translator App
        </Link>

        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:text-gray-200"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/translator"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:text-gray-200"
            }
          >
            Translator
          </NavLink>

          <NavLink
            to="/random"
            className={({ isActive }) =>
              isActive ? "font-bold underline" : "hover:text-gray-200"
            }
          >
            Random Generator
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;