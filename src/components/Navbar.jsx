import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Navbar() {
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

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">

            <Link
              to="/"
              className="text-white hover:text-green-200 transition font-medium"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="text-white hover:text-green-200 transition font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="text-white hover:text-green-200 transition font-medium"
            >
              Register
            </Link>

            <Link
              to="/dashboard"
              className="text-white hover:text-green-200 transition font-medium"
            >
              Dashboard
            </Link>

            <Link
              to="/disease-detection"
              className="text-white hover:text-green-200 transition font-medium"
            >
              Disease Detection
            </Link>

            <Link
              to="/chatbot"
              className="text-white hover:text-green-200 transition font-medium"
            >
              AI Chatbot
            </Link>

            <Link
              to="/recommendation"
              className="text-white hover:text-green-200 transition font-medium"
            >
              Recommendation
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}