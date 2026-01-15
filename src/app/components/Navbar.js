'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname() // Get the current path (e.g., "/about")

    // Helper function to determine if a link is active
    const getLinkClasses = (path) => {
        const isActive = pathname === path;
        return isActive 
            ? "text-[#049fe5] border-b-2 border-[#049fe5] pb-1 font-medium transition-colors" // Active State (Blue + Underline)
            : "text-gray-800 font-medium hover:text-[#049fe5] transition-colors";       // Inactive State
    };

    const handleScrollToSection = (e, sectionId) => {
        // Only prevent default if we are purely scrolling on the home page
        if (pathname === '/' && sectionId) {
            //  e.preventDefault()
             const element = document.getElementById(sectionId)
             if (element) {
                 element.scrollIntoView({ behavior: 'smooth', block: 'start' })
             }
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="bg-white shadow-sm w-full font-heading sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <Link href="/" className="cursor-pointer">
                            <Image
                                src="/dwepsl.png"
                                alt="DWEPS Pharmaceuticals Logo"
                                width={70}
                                height={70}
                                className="h-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Menu (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                        
                        <Link 
                            href="/" 
                            className={getLinkClasses('/') 
                                
                            }
                        >
                            Home
                        </Link>

                        <Link 
                            href="/about" 
                            className={getLinkClasses('/about')}
                        >
                            About Us
                        </Link>

                        <Link 
                            href="/services" 
                            className={getLinkClasses('/services')}
                        >
                            Services
                        </Link>

                        {/* Products Dropdown Wrapper */}
                        <div className="relative group h-full flex items-center">
                            <Link 
                                href="/products" 
                                className={`flex items-center ${getLinkClasses('/products')}`}
                            >
                                Products
                                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown Menu */}
                            <div className="absolute hidden group-hover:block left-0 top-full bg-white rounded-lg shadow-xl z-50 border border-gray-100 w-56">
                                <Link 
                                    href="/products" 
                                    className="block px-4 py-2 rounded-lg text-gray-800 hover:bg-[#049fe5] hover:text-white transition-colors"
                                >
                                    Gynecological Services
                                </Link>
                                {/* You can add more dropdown items here */}
                            </div>
                        </div>

                        <Link 
                            href="/contact" 
                            className={getLinkClasses('/contact')}
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
                        <Link 
                            href="/" 
                            className={`block py-2 ${pathname === '/' ? 'text-[#049fe5] font-bold' : 'text-gray-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/about" 
                            className={`block py-2 ${pathname === '/about' ? 'text-[#049fe5] font-bold' : 'text-gray-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link 
                            href="/services" 
                            className={`block py-2 ${pathname === '/services' ? 'text-[#049fe5] font-bold' : 'text-gray-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Services
                        </Link>
                        <Link 
                            href="/products" 
                            className={`block py-2 ${pathname === '/products' ? 'text-[#049fe5] font-bold' : 'text-gray-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <Link 
                            href="/contact" 
                            className={`block py-2 ${pathname === '/contact' ? 'text-[#049fe5] font-bold' : 'text-gray-800'}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:+917209121333"
                            className="block bg-[#049fe5] text-white font-medium px-6 py-2.5 rounded-lg text-center mt-4"
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