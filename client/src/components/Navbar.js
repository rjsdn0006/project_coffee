import React, { useState } from "react";
import classNames from "classnames";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* 왼쪽메뉴 */}
            <div>
              <a href="#" className="flex items-center px-2 py-5 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
                <span className="font-bold">HOME</span>
              </a>
            </div>
            {/* 왼쪽메뉴 - 선택가능 메뉴 */}
            <div className="items-center hidden space-x-1 md:flex">
              <a
                href="#"
                className="px-3 py-5 text-gray-700 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="px-2 py-5 text-gray-700 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* 오른쪽메뉴 */}
          <div className="items-center hidden space-x-1 md:flex">
            <a href="#" className="px-3 py-5">
              Login
            </a>
            <a
              href="#"
              className="px-3 py-2 text-yellow-900 transition duration-300 bg-yellow-400 rounded hover:bg-yellow-300 hover:text-yellow-800"
            >
              Signup
            </a>
          </div>

          {/* 햄버거메뉴 */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={classNames("md:hidden", {
          hidden: !menuToggle,
        })}
      >
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
          Pricing
        </a>
        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">
          Features
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
