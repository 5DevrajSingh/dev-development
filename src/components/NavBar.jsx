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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px scroll ke baad change
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHomePage
          ? scrolled
            ? "bg-black/40 border-b border-white/10 shadow-lg text-white"
            : "bg-transparent text-white"
          : "bg-black/30 shadow-md text-white"
        //   ? "bg-black/20 border-b border-white/20 shadow-lg text-white backdrop-blur-md"
        //   : "bg-transparent text-white"
        // : "bg-black/10 shadow-md text-white backdrop-blur-md"

        }`}
    >

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-5 overflow-hidden">
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

            <li>
              <Link to="/about" className="hover:text-[#fa8816]">
                About Us
              </Link>
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
              className="bg-[#24a052] px-6 py-3 flex items-center gap-2 text-white uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300"
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
              className="bg-[#24a052]   p-2 rounded-full flex items-center justify-center text-white"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 text-white px-6 pb-5">
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

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>


            <li>
              <Link to="/Contact" onClick={() => setMenuOpen(false)}>
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