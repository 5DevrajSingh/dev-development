import { div } from "framer-motion/client"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Service from "./pages/Service"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import UploadProject from "./pages/UploadProject"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fab } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Analytics from "./components/Analytics";
import AOS from "aos";
import "aos/dist/aos.css";

ReactGA.initialize("G-T6V7Q3BEQK");
function App() {

  useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false
      });
     }, []);
  
const handleDownload = () => {
  const fileUrl = `${import.meta.env.BASE_URL}Devraj-Resume.pdf`;

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Devraj-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <BrowserRouter>
     <Analytics />
    <ScrollToTop/>
    <NavBar/>
    < div className="w-full">
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path=  "/projects" element = {<Projects/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/upload-project" element={<UploadProject/>}/>
    </Routes>
    <Fab
          data-aos="fade-up-left"
          variant="extended" // 1. Circle से Extended शेप में बदलने के लिए
          aria-label="download resume"
          onClick={handleDownload}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#FF9933", // भगवा रंग
            color: "#FFFFFF", // सफेद टेक्स्ट और आइकॉन
            textTransform: "none", // "Resume" को ऑल-कैप्स (RESUME) होने से रोकने के लिए
            gap: 1, // आइकॉन और टेक्स्ट के बीच स्पेस के लिए
            "&:hover": {
              backgroundColor: "#CC7A24",
            },
          }}
        >
          <DownloadIcon />
          DevResume
        </Fab>
    </div>
    <Footer/>
    </BrowserRouter>
  
  )
}

export default App
