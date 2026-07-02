import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/ddl_logo4.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px scroll ke baad change
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-black/40 border-b border-white/10 shadow-lg text-white"
            : "bg-transparent text-white"
          : "bg-black/30 shadow-md text-white"
        //   ? "bg-black/20 border-b border-white/20 shadow-lg text-white backdrop-blur-md"
        //   : "bg-transparent text-white"
        // : "bg-black/10 shadow-md text-white backdrop-blur-md"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-5 overflow-visible">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <img
            onClick={() => navigate(`/`)}
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain cursor-pointer"
          />

          {/* Desktop Menu */}
          <ul className="flex gap-6 font-semibold">
            <li>
              <Link to="/" className="hover:text-[#fa8816]">
                Home
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-[#fa8816]">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/service" className="hover:text-[#fa8816]">
                Service
              </Link>
            </li>

            <li className="relative group">
              <Link
                to="/about"
                className="hover:text-[#fa8816] flex items-center gap-1"
              >
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  to="/faq"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#fa8816] hover:text-white"
                >
                  FAQ
                </Link>

                <Link
                  to="/blogs"
                  className="block px-4 py-3 text-gray-700 hover:bg-[#fa8816] hover:text-white"
                >
                  Blogs
                </Link>
              </div>
            </li>

            <li>
              <Link to="/Contact" className="hover:text-[#fa8816]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="border border-white px-6 py-3 flex items-center gap-2 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              <Phone size={18} />
              <span className="hidden lg:block">Contact Us</span>
            </Link>

            <a
              href="https://wa.me/9027208460"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fa8816] px-6 py-3 flex items-center gap-2 text-white uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              <span className="hidden lg:block">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden items-center justify-between w-full">
          {/* Left Burger */}
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Center Logo */}
          <img
            onClick={() => navigate(`/`)}
            src={logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="border border-white p-2 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Phone size={18} />
            </Link>

            <a
              href="https://wa.me/9027208460"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fa8816]   p-2 rounded-full flex items-center justify-center text-white"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 text-white px-6 py-5">
          <ul className="flex flex-col gap-4 font-semibold">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="/service" onClick={() => setMenuOpen(false)}>
                Service
              </Link>
            </li>

            {/* About Us Dropdown */}
            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between"
              >
                <span>About Us</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {aboutOpen && (
                <ul className="mt-3 ml-4 flex flex-col gap-3 text-gray-300">
                  <li>
                    <Link
                      to="/about"
                      onClick={() => {
                        setAboutOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/faq"
                      onClick={() => {
                        setAboutOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/blogs"
                      onClick={() => {
                        setAboutOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
