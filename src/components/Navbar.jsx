import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-3xl font-bold"
      >
        <Leaf size={28} />
        AgriBridge
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/disease-detection">Disease Detection</Link>
        <Link to="/chatbot">AI Chatbot</Link>
        <Link to="/recommendation">Recommendation</Link>
      </div>
    </nav>
  );
}

export default Navbar;