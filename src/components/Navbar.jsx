import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

 const toggleTheme = () => {
  setDarkMode(!darkMode);

  const hero = document.getElementById("hero-section");

  if (!darkMode) {
    document.body.style.backgroundColor = "#111827";
    document.body.style.color = "white";

    if (hero) {
      hero.style.background = "#111827";
    }
  } else {
    document.body.style.backgroundColor = "#f8fafc";
    document.body.style.color = "black";

    if (hero) {
      hero.style.background = "";
    }
  }
};

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col md:flex-row items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-2 mb-3 md:mb-0"
          >
            <Leaf size={32} className="text-green-200" />

            <div>
              <h1 className="text-2xl font-bold text-white">
                AgriBridge
              </h1>

              <p className="text-xs text-green-100">
                Bridging Farmers with Smart Agriculture
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center">

            <Link to="/" className="text-white hover:text-green-200">
              Home
            </Link>

            <Link to="/login" className="text-white hover:text-green-200">
              Login
            </Link>

            <Link to="/register" className="text-white hover:text-green-200">
              Register
            </Link>

            <Link to="/dashboard" className="text-white hover:text-green-200">
              Dashboard
            </Link>

            <Link
              to="/disease-detection"
              className="text-white hover:text-green-200"
            >
              Disease Detection
            </Link>

            <Link
              to="/chatbot"
              className="text-white hover:text-green-200"
            >
              AI Chatbot
            </Link>

            <Link
              to="/recommendation"
              className="text-white hover:text-green-200"
            >
              Recommendation
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="bg-white text-green-700 px-3 py-1 rounded-lg font-semibold hover:bg-green-100"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

          </div>
        </div>

      </div>
    </nav>
  );
}