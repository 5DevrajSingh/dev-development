import React from "react";
import logo from "../assets/ddl_logo.png";
import {
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaComments,
  FaTools,
} from "react-icons/fa";

import { MdOutlineSupportAgent, MdHealthAndSafety } from "react-icons/md";

import { BsFillBriefcaseFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl text-[#fa8816] lg:text-6xl font-bold mb-8">
              About Me
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hi, I'm{" "}
              <span className="font-semibold text-[#FF9933]">Devraj Singh</span>
              , a Full Stack Developer with 5+ years of experience in building
              modern mobile applications and web solutions. I specialize in
              creating scalable, secure, and user-friendly digital products that
              help businesses grow and streamline their operations.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My expertise includes Flutter, React.js, Node.js, Firebase,
              MongoDB, SQLite, and REST APIs. I focus on delivering clean code,
              modern UI/UX, and high-performance applications across Android,
              iOS, and Web platforms.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Throughout my career, I have developed Educational Platforms,
              Utility Applications, HRM Systems, CRM Solutions, Healthcare Apps,
              and Real-Time Chat Applications. From planning and development to
              deployment and maintenance, I provide complete end-to-end software
              development services.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I believe in building long-term relationships with clients by
              delivering reliable solutions, transparent communication, and
              continuous support to ensure project success.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-[#FF9933]">
              Professional Overview
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <BsFillBriefcaseFill className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Experience:</strong> 5+ Years in Mobile & Web
                  Development
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMobileAlt className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Mobile Apps:</strong> Flutter, Android, iOS & Hybrid
                  Apps
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaReact className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Frontend:</strong> React.js, JavaScript, Tailwind CSS
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaNodeJs className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Backend:</strong> Node.js, Express.js & REST APIs
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaDatabase className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Database:</strong> Firebase Firestore, MongoDB &
                  SQLite
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaComments className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Specialization:</strong> Real-Time Chat, CRM, HRM &
                  Utility Apps
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MdHealthAndSafety className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Industries:</strong> Education, Healthcare, Business &
                  Utility Solutions
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaTools className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Integrations:</strong> Push Notifications, WebRTC,
                  Maps, Payment Gateway & APIs
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MdOutlineSupportAgent className="text-[#FF9933] text-xl" />
                <span>
                  <strong>Free Support:</strong> 3 Months Maintenance &
                  Technical Support
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-4 py-2 bg-orange-100 text-[#FF9933] rounded-full text-sm font-medium">
            5+ Years Experience
          </span>

          <span className="px-4 py-2 bg-orange-100 text-[#FF9933] rounded-full text-sm font-medium">
            Flutter Developer
          </span>

          <span className="px-4 py-2 bg-orange-100 text-[#FF9933] rounded-full text-sm font-medium">
            React Developer
          </span>

          <span className="px-4 py-2 bg-orange-100 text-[#FF9933] rounded-full text-sm font-medium">
            Node.js Backend
          </span>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Technical Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Flutter",
              "Dart",
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "Firebase",
              "MongoDB",
              "SQLite",
              "REST API",
              "Git & GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-gray-100 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
