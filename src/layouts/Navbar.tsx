import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`text-xl font-bold transition ${
            isNotHomePage
              ? "text-black hover:text-blue-600"
              : "text-white hover:text-blue-400"
          }`}
        >
          TodoApp
        </Link>

        <Link
          to="/"
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            isNotHomePage
              ? "text-black hover:bg-black/10 hover:text-blue-600"
              : "text-white hover:bg-white/10 hover:text-blue-400"
          }`}
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;