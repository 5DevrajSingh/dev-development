import hero from "../assets/home2.jpg";
import { Link, useNavigate } from "react-router-dom";
function Hero() {
  const navigate  = useNavigate()
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* CONTENT */}
        <div
          className="relative z-20 flex flex-col items-start justify-center text-left px-4 sm:pl-12 md:pl-20 h-screen"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
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


/*{

      <section className="relative z-30  px-5 lg:px-20">
        <div className="bg-white text-center max-w-6xl mx-auto">
      
          <p className="mt-10 lg:mt-15 uppercase tracking-[6px] text-gray-500 text-sm">
            Latest Launch
          </p>

        
          <h2 className="text-2xl lg:text-4xl font-bold mt-5 text-black">
            Dev Development
          </h2>

         
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-5 lg:mt-10 mb-10 lg:mb-15">
            <button className="bg-[#FF9933] hover:bg-black text-white px-8 py-4  transition-all duration-300">
              DISCOVER
            </button>

            <Link
              to="/contact-us"
              className="border border-black hover:bg-black hover:text-white text-black px-8 py-4 transition-all duration-300 inline-block"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
}*/