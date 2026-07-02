import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Projets from './Projects'
import Service from './Service'
// import FutureProduct from './FutureProduct'
// import WhyChooseUs from './WhyChooseUs'
import Contact from './Contact'
import Blogs from './Blogs'
import FAQ from './FAQ'
// import WhyDrymato from './WhyDrymato'

function Home() {
  return (
    <div className='w-full'>
      <Hero />
      <Projets/>

      <Service/>
       <About/>
      <Contact/>
     
      
      
    </div>
  )
}

export default Home;