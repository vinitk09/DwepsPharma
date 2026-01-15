import Image from 'next/image'
import React from 'react'
import Numbers from '../components/Numbers'

const page = () => {
   return (
    <>
    <section className="relative w-full overflow-hidden">
    
    {/* 1. BACKGROUND CONTAINER (Order doesn't strictly matter if we use z-index, but putting it first is cleaner) */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#e3f2fd] via-[#bbdefb] to-[#90caf9] z-0">
        
        {/* Hexagonal grid pattern */}
        <div
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: `
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

    {/* 2. TEXT CONTENT (Added 'relative' and 'z-10') */}
    <div className='relative z-10 font-heading flex flex-col items-center justify-center px-4 py-12 lg:py-20 md:py-16 gap-4 text-center'>
        <h2 className='text-2xl md:text-3xl font-medium text-[#1a237e]'>
            About Us
        </h2>
        
        {/* Breadcrumb style */}
        <p className="text-sm font-medium text-[#049fe5]">
            Home / About 
        </p>

      
    </div>

          </section>
          <section id="about" className="w-full   font-heading">
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
          
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
                                  <li className="flex items-start">
                                      <span className="text-[#049fe5] mr-2 font-bold"></span>
                                      <span>Integrity in everything we do</span>
                                  </li>
                                  <li className="flex items-start">
                                      <span className="text-[#049fe5] mr-2 font-bold"></span>
                                      <span>Innovation that improves lives</span>
                                  </li>
                                  <li className="flex items-start">
                                      <span className="text-[#049fe5] mr-2 font-bold"></span>
                                      <span>Quality that meets global standards</span>
                                  </li>
                                  <li className="flex items-start">
                                      <span className="text-[#049fe5] mr-2 font-bold"></span>
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
          <Numbers/>
        </>
      )
}

export default page