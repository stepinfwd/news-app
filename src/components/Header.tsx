import React, { ReactElement } from "react";

interface Props {
  query?: string;
  handleSearch?: () => void;
}

function Header({ query, handleSearch }: Props): ReactElement {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <li className="flex items-center py-4 px-2">
                <img
                  src="images/devwares-logo.png"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">
                  NEWZ
                </span>
              </li>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <p className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold">
                Home
              </p>

              <p className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">
                About
              </p>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none menu-button">
                <svg
                  className="w-6 h-6 text-gray-500"
                  x-show="! showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 00 24 24"
                  stroke="currentColor"
                >
                  <path d="m4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div className="hidden mobile-menu">
              <ul className="">
                <li className="active">Home</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
