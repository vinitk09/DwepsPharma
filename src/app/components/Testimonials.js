'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            quote: "I've prescribed Dweps products for over a year now. The results in patients have been consistently positive with minimal side effects.",
            name: "Dr. Akash Patil",
            address:"Mumbai, India",
            img: "/samplephoto.jpg"
        },
        {
            quote: "We've partnered with Dweps for our clinic's pharmaceutical needs, and it's been a smooth experience. Great range and great quality!",
            name: "Sonal Gupta",
            address:"New Delhi, India",
            img: "/samplephoto.jpg"     
        },
        {
            quote: "Dweps Pharmaceuticals has become our go-to supplier. Their medicines are not only effective but also reasonably priced. Truly dependable!",
            name: "Dr. Anjali Mehta",
            address:"Bengaluru, India",
            img: "/samplephoto.jpg"
        }
    ]

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 relative overflow-hidden font-heading">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] ">
                {/* Hexagonal grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `z
              linear-gradient(30deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1)),
              linear-gradient(150deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1)),
              linear-gradient(30deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1)),
              linear-gradient(150deg, rgba(4, 159, 229, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(4, 159, 229, 0.1) 87.5%, rgba(4, 159, 229, 0.1))
            `,
                        backgroundSize: '80px 140px',
                        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
                    }}
                />
                {/* Scattered dots */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-[#049fe5] opacity-30"
                            style={{
                                width: `${Math.random() * 8 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Section Title */}
                {/* text-center  */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#1a237e] mb-4">
                    Our Reputation Speaks
                    </h2>
                </div>

                {/* Testimonials Grid/Carousel */}
                <div className="relative">
                    {/* Desktop: Show all 3 cards */}
                    <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>

                    {/* Mobile: Carousel */}
                    <div className="md:hidden relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="min-w-full px-2">
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8 md:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${currentIndex === index
                                        ? 'w-3 h-3 bg-[#1a237e]'
                                        : 'w-2 h-2 bg-[#90caf9] hover:bg-[#64b5f6]'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
    return (
        <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        // scale={1.05}
        transitionSpeed={1500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glareColor='#ffffff'
        glarePosition='all'
        glareBorderRadius='8px'
        className='h-full'>
        <div className="bg-white/40 bg-gradient-to-br from-white/90 via-white/70 to-blue-100/30 backdrop-blur-xl rounded-lg shadow-xl p-6 md:p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:bg-white">
           
           <div className='flex items-center justify-between'>

              {/* Image */}
           <div className="relative w-16 h-16 flex-shrink-0">
                        <Image 
                            src={testimonial.img} 
                            alt={testimonial.name}
                            fill // Fills the parent container
                            className="rounded-full object-cover border-2 border-[#1a237e]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                    </div>


             {/* Star Rating */}
            <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
             
           </div>
         

             {/* Name */}
            <p className="text-[#1a237e] font-poppins  font-bold text-base md:text-lg relative z-10">
                {testimonial.name}
            </p>

            <div className='font-poppins text-sm md:text-base mb-2 text-gray-500'>
                <p>{testimonial.address}</p>
            </div>
            

            {/* Quote */}
            <p className="text-gray-800 font-poppins text-sm md:text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
            </p>

            {/* Decorative Quotation Mark */}
            {/* <div className="absolute bottom-0 right-0 text-[#e3f2fd] text-9xl md:text-[12rem] font-serif leading-none transform translate-x-8 translate-y-8 pointer-events-none select-none">
                99
            </div> */}
        </div>
        </Tilt>
    )
}

export default Testimonials