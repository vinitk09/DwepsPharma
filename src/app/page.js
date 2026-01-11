import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Strengths from './components/Strengths'
import Products from './components/Products'
import Blogs from './components/Blogs'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Blogs />
      <Products />
      <Strengths />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  )
}

export default page