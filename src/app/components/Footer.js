'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative w-full bg-gray-50 py-12 md:py-16 font-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #049fe5 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Left Section - Company Introduction */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <Image
                src="/dwepsl.png"
                alt="DWEPS Pharmaceuticals Logo"
                width={80}
                height={80}
                className="h-auto"
              />
            </div>
            
            {/* Company Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              DWEPS Pharmaceutical Pvt Ltd is a progressive Indian pharmaceutical company incorporated in 2016.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-[#049fe5] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Our Products</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products Section */}
          <div className="space-y-4">
            <h3 className="text-[#049fe5] font-bold text-lg mb-4">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Gynecological Range</span>
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Skin Care Solutions</span>
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>General Wellness</span>
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-700 hover:text-[#049fe5] transition-colors flex items-center group">
                  <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                  <span>Injections</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-[#049fe5] font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#049fe5] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917209121333" className="text-gray-700 hover:text-[#049fe5] transition-colors">
                  +91 7209121333
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#049fe5] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dwepspharma.com" className="text-gray-700 hover:text-[#049fe5] transition-colors wrap-break-word">
                  info@dwepspharma.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#049fe5] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Corporate Office:- 3rd floor, The hub unit 1, Sarjapur- Marathahalli Rd, Bellandur, Bengaluru, Karnataka, 560103
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} DWEPS Pharmaceutical Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#049fe5] hover:bg-[#028ccc] text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  )
}

export default Footer