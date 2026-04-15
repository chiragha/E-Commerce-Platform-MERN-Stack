import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#fafafa]  shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-gray-900 cursor-pointer">
          Ecommerce
        </div>

        {/* Center - Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            About Us
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact Us
          </li>
        </ul>

        {/* Right - Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;