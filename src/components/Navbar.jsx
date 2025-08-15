import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:text-yellow-400 transition-colors duration-200 ${
      isActive ? "text-yellow-400 font-semibold" : ""
    }`;

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink
            to="/"
            className="flex text-2xl font-bold tracking-wide hover:text-yellow-400 rounded py-1 px-2 transition-colors duration-200"
          >
            <img
              src="/logo1.jpg"
              alt="Logo"
              className="h-8 w-8 mr-2 rounded-full"
            />
            Movie Search
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClasses} end>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses}>
              Contact
            </NavLink>
            <NavLink to="/watchlist" className={linkClasses}>
              Watchlist
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col space-y-4 px-4 pb-4 bg-gray-800 transition-all duration-600 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <NavLink
          to="/"
          className={linkClasses}
          end
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={linkClasses}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={linkClasses}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/watchlist"
          className={linkClasses}
          onClick={() => setIsOpen(false)}
        >
          Watchlist
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
