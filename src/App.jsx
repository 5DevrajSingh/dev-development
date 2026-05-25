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
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <NavBar/>
    < div className="w-full">
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path=  "/projects" element = {<Projects/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  
  )
}

export default App
