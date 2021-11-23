import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition.js";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!mobileNavOpen || mobileNav.current.contains(target)) return;
  //     setMobileNavOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // Handle light modes
  const [darkMode] = useState(() => {
    return false;
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-5">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              {/*<svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
              {/*  <defs>*/}
              {/*    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_a">*/}
              {/*      <stop stopColor="#3ABAB4" offset="0%" />*/}
              {/*      <stop stopColor="#7F9CF5" offset="100%" />*/}
              {/*    </linearGradient>*/}
              {/*    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="logo_b">*/}
              {/*      <stop stopColor="#3ABAB4" offset="0%" />*/}
              {/*      <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />*/}
              {/*    </linearGradient>*/}
              {/*  </defs>*/}
              {/*  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#logo_a)" />*/}
              {/*  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#logo_b)" />*/}
              {/*</svg>*/}

              <svg
                className="w-10 h-10"
                viewBox="0 0 660 660"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M330 660C512.254 660 660 512.254 660 330C660 147.746 512.254 0 330 0C147.746 0 0 147.746 0 330C0 512.254 147.746 660 330 660Z"
                  fill="#00ADE6"
                />
                <path
                  d="M415.551 570.42C415.551 570.42 443.551 519.42 437.551 494.42C437.551 494.42 525.051 494.92 532.051 436.92C532.051 436.92 615.791 397.92 592.921 342.42C592.921 342.42 619.051 225.92 541.051 219.92C541.051 219.92 520.051 145.92 479.051 147.92C479.051 147.92 451.051 94.9199 388.051 110.92C388.051 110.92 332.051 60.9199 275.051 113.92C275.051 113.92 214.051 101.92 191.051 132.92C191.051 132.92 123.051 133.92 113.051 183.92C113.051 183.92 12.0506 210.92 83.0506 310.92C83.0506 310.92 78.0506 403.92 194.051 383.92C194.051 383.92 213.051 479.92 315.051 434.92C315.051 434.92 342.051 480.92 364.051 487.92L415.551 570.42Z"
                  fill="white"
                  stroke="white"
                  stroke-width="13"
                  stroke-miterlimit="10"
                />
                <path
                  d="M187.74 394.92C187.74 394.92 227.05 245.92 345.05 292.92L187.74 394.92Z"
                  fill="white"
                />
                <path
                  d="M187.74 394.92C187.74 394.92 227.05 245.92 345.05 292.92"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M602.24 342.42C602.24 342.42 511.141 335.42 497.101 283.16L602.24 342.42Z"
                  fill="white"
                />
                <path
                  d="M602.24 342.42C602.24 342.42 511.141 335.42 497.101 283.16"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M311.24 453.42C311.24 453.42 361.05 368.92 412.05 395.92L311.24 453.42Z"
                  fill="white"
                />
                <path
                  d="M311.24 453.42C311.24 453.42 361.05 368.92 412.05 395.92"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M385.051 161.92C385.051 161.92 435.051 164.92 446.051 230.92L385.051 161.92Z"
                  fill="white"
                />
                <path
                  d="M385.051 161.92C385.051 161.92 435.051 164.92 446.051 230.92"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M112.73 283.21C112.73 283.21 103.05 216.97 179.05 219.97C255.05 222.97 227.72 161.97 227.72 161.97"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M362.32 316.21C370.881 316.21 377.82 309.27 377.82 300.71C377.82 292.15 370.881 285.21 362.32 285.21C353.76 285.21 346.82 292.15 346.82 300.71C346.82 309.27 353.76 316.21 362.32 316.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M233.32 179.21C241.881 179.21 248.82 172.27 248.82 163.71C248.82 155.15 241.881 148.21 233.32 148.21C224.76 148.21 217.82 155.15 217.82 163.71C217.82 172.27 224.76 179.21 233.32 179.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M113.32 312.21C121.881 312.21 128.82 305.27 128.82 296.71C128.82 288.15 121.881 281.21 113.32 281.21C104.76 281.21 97.8203 288.15 97.8203 296.71C97.8203 305.27 104.76 312.21 113.32 312.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M375.32 173.21C383.881 173.21 390.82 166.27 390.82 157.71C390.82 149.15 383.881 142.21 375.32 142.21C366.76 142.21 359.82 149.15 359.82 157.71C359.82 166.27 366.76 173.21 375.32 173.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M446.32 264.21C454.881 264.21 461.82 257.27 461.82 248.71C461.82 240.15 454.881 233.21 446.32 233.21C437.76 233.21 430.82 240.15 430.82 248.71C430.82 257.27 437.76 264.21 446.32 264.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M492.32 297.21C500.881 297.21 507.82 290.27 507.82 281.71C507.82 273.15 500.881 266.21 492.32 266.21C483.76 266.21 476.82 273.15 476.82 281.71C476.82 290.27 483.76 297.21 492.32 297.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M422.32 412.21C430.881 412.21 437.82 405.27 437.82 396.71C437.82 388.15 430.881 381.21 422.32 381.21C413.76 381.21 406.82 388.15 406.82 396.71C406.82 405.27 413.76 412.21 422.32 412.21Z"
                  fill="white"
                  stroke="#10ACE4"
                  stroke-width="12"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">
            {/* Desktop menu links */}
            <ul className="flex flex-grow flex-wrap items-center font-medium">
              <li>
                <Link
                  to="/home"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Partners
                </Link>
              </li>
              {/* 1st level: hover */}
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="inline-flex md:hidden">
            {/* Hamburger button */}
            <button
              className={`hamburger ${mobileNavOpen && "active"}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <Transition
              show={mobileNavOpen}
              tag="ul"
              className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg"
              enter="transition ease-out duration-200 transform"
              enterStart="opacity-0 -translate-x-full"
              enterEnd="opacity-100 translate-x-0"
              leave="transition ease-out duration-200"
              leaveStart="opacity-100"
              leaveEnd="opacity-0"
            >
              <nav
                id="mobile-nav"
                ref={mobileNav}
                className="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg no-scrollbar"
              >
                <div className="py-6 pr-4 pl-20">
                  {/* Links */}
                  <ul>
                    <li>
                      <Link
                        to="/home"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/partners"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        className="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2"
                      >
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
