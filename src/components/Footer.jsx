import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img
            onClick={() => navigate(`/`)}
            src="/ddl_logo4.png"
            alt="Logo"
            className="h-15 w-auto object-contain cursor-pointer"
          />
            {/* <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#FF9933]">Dev</span>Development
            </h2> */}

            <p className="text-gray-400 leading-relaxed">
              Building modern mobile applications and web solutions using
              Flutter, React.js, Node.js, Firebase, and MongoDB.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/5DevrajSingh/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-[#FF9933] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/devraj-singh-40096720b/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-[#FF9933] transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#FF9933]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/projects" className="hover:text-white">Projects</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#FF9933]">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Flutter App Development</li>
              <li>Android & iOS Apps</li>
              <li>React Web Development</li>
              <li>Node.js Backend</li>
              <li>Firebase Integration</li>
              <li>API Development</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#FF9933]">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF9933]" />
                <span>devrajsingh3213@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF9933]" />
                <span>+91 9027208460</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FF9933]" />
                <span>Ghaziabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} DevDevelopment. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed & Developed by Devraj Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;