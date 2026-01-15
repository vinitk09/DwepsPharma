'use client'

import React from 'react'
import Image from 'next/image'


const About = () => {
    return (
        <>
        <section id="about" className="w-full py-16 md:py-16 bg-gray-50 font-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        {/* Main Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-[#049fe5] ">
                            About Us
                        </h2>

                        {/* Subtitle */}
                     

                        {/* Company Description */}
                        <p className="text-base md:text-sm text-gray-700 leading-relaxed font-heading">
                            DWEPS Pharmaceutical Pvt Ltd is a progressive Indian pharmaceutical company incorporated in 2016. With a corporate presence in Bengaluru, we specialize in the development and marketing of high-quality pharmaceutical formulations.
                        </p>

                      

                       

                        {/* Our Core Values Section */}
                        <div className="space-y-3">
                            <h4 className="text-lg md:text-xl font-bold text-gray-800">
                                Our Core Values
                            </h4>
                            <ul className="space-y-2 text-base md:text-sm text-gray-700">
                                <li className="flex items-start group">
                                    <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                                    <span>Integrity in everything we do</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                                    <span>Innovation that improves lives</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                                    <span>Quality that meets global standards</span>
                                </li>
                                <li className="flex items-start group  ">
                                    <span className="text-[#049fe5] mr-2 font-bold group-hover:translate-x-1 transition-transform">»</span>
                                    <span>Compassion toward patients and partners</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative w-full h-[600px] md:h-[500px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/about.jpg"
                            alt="Pharmaceutical products and medical supplies"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
        
            </>
    )
}

export default About