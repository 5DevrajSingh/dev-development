import hero from "../assets/home2.jpg";
import profileImage from "../assets/dev3.jpeg"
import {  Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Hero() {
  const navigate  = useNavigate()
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      
    });
   }, []);
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen  h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div
          // className="absolute bottom-24 right-5 md:right-40 z-10"
          className="absolute bottom-5 right-5 md:right-75 lg:right-75 z-20"
          data-aos="zoom-in"
        >
          <div 
          className="w-35 h-35 md:w-60 md:h-60 rounded-full overflow-hidden  shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          // className="w-35 h-35 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl"
          >
            <img
              src={profileImage} // apni image ka path
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="relative z-20 flex flex-col items-start justify-center text-left px-4 sm:pl-12 md:pl-20 h-screen"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight" data-aos="fade-up">
            Devraj Singh,
            <br />
            Full Stack Developer
          </h1>

          <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-white leading-relaxed">
            Experienced Full Stack Developer with 5+ years of expertise in
            Flutter, React.js, Node.js, Firebase, REST APIs, and modern web
            technologies. Building scalable mobile and web applications with
            clean architecture and excellent user experiences.
          </p>

          <button 
          data-aos="slide-right"
          onClick={() => navigate(`/projects`)}
          className="mt-8 bg-[#616060] hover:bg-[#FF9933] transition-all duration-300 px-8 py-4 rounded-[10px] text-white text-lg">
            View My Work
          </button>
        </div>
      </section>

      
    </>
  );
}

export default Hero;
