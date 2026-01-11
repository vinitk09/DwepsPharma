'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault()
        // Close mobile menu if open
        setIsMobileMenuOpen(false)
        
        // If we're on a different page, navigate to home first
        if (pathname !== '/') {
            window.location.href = `/#${sectionId}`
            return
        }
        
        // Scroll to section on current page
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
    return (
        <nav className="bg-white shadow-sm w-full font-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <a 
                            href="#home" 
                            onClick={(e) => handleScrollToSection(e, 'home')}
                            className="cursor-pointer"
                        >
                            <Image
                                src="/dwepsl.png"
                                alt="DWEPS Pharmaceuticals Logo"
                                width={70}
                                height={70}
                                className="h-auto"
                                priority
                            />
                        </a>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                        <a 
                            href="#home" 
                            onClick={(e) => handleScrollToSection(e, 'home')}
                            className="text-[#049fe5] font-medium hover:text-[#028ccc] transition-colors"
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            onClick={(e) => handleScrollToSection(e, 'about')}
                            className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
                        >
                            About Us
                        </a>
                        <a 
                            href="#services" 
                            onClick={(e) => handleScrollToSection(e, 'services')}
                            className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
                        >
                            Services
                        </a>
                        <div className="relative group">
                            <a 
                                href="#products" 
                                onClick={(e) => handleScrollToSection(e, 'products')}
                                className="text-gray-800 font-medium hover:text-gray-600 transition-colors flex items-center"
                            >
                                Products
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /> */}
                                </svg>
                            </a>
                        </div>
                        <Link 
                            href="/contact"
                            className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Call to Action Button - Desktop */}
                    <div className="hidden md:block shrink-0">
                        <a
                            href="tel:+917209121333"
                            className="bg-[#049fe5] hover:bg-[#028ccc] text-white font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                        >
                            Call Us: +91 72091 21333
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden shrink-0">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4 space-y-3">
                        <a 
                            href="#home" 
                            onClick={(e) => handleScrollToSection(e, 'home')}
                            className="block text-purple-600 font-medium hover:text-purple-700 transition-colors py-2"
                        >
                            Home
                        </a>
                        <a 
                            href="#about" 
                            onClick={(e) => handleScrollToSection(e, 'about')}
                            className="block text-gray-800 font-medium hover:text-gray-600 transition-colors py-2"
                        >
                            About Us
                        </a>
                        <a 
                            href="#services" 
                            onClick={(e) => handleScrollToSection(e, 'services')}
                            className="block text-gray-800 font-medium hover:text-gray-600 transition-colors py-2"
                        >
                            Services
                        </a>
                        <a 
                            href="#products" 
                            onClick={(e) => handleScrollToSection(e, 'products')}
                            className="block text-gray-800 font-medium hover:text-gray-600 transition-colors py-2"
                        >
                            Products
                        </a>
                        <Link 
                            href="/contact"
                            className="block text-gray-800 font-medium hover:text-gray-600 transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:+917209121333"
                            className="block bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-center"
                        >
                            Call Us: +91 72091 21333
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar