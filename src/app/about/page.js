'use client'
import Image from 'next/image'
import React from 'react'
import Numbers from '../components/Numbers'
import WhyChooseUs from '../components/WhyChooseUs'

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
    
          <section id="about" className="w-full mt-8 font-heading">
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-8">
          
                  <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-12 items-center">
                      {/* Left Side - Text Content */}
                      <div className='flex flex-col gap-6'>
                        <div><h2 className='text-2xl md:text-2xl lg:text-2xl font-bold text-[#049fe5] '>About DWEPS Pharmaceutical Pvt. Ltd.</h2></div>
                       <div className='flex flex-col gap-6 text-md'>
                         <p>Dweps Pharmaceutical Pvt. Ltd. is a forward-thinking Indian pharmaceutical company established in 2016,Since its inception, the company has been dedicated to delivering innovative, high-quality, and affordable healthcare solutions that improve and extend lives.
                          </p>
<p>
Specializing in the development, manufacturing, and marketing of a wide range of pharmaceutical formulations, DWEPS caters to diverse therapeutic segments, including general medicine, pediatrics, dermatology, gynecology, and chronic disease management. Our products undergo rigorous quality control processes and are formulated to meet both national and international regulatory standards.
</p>
<p>
Driven by a mission to enhance healthcare accessibility across India, we leverage advanced technologies, a skilled R&D team, and a robust distribution network to ensure timely and consistent delivery of safe and effective medicines. Our operations are guided by a commitment to ethical practices, continuous improvement, and patient-centric innovation.
</p>
<p>
With a growing portfolio and expanding footprint, DWEPS Pharmaceutical Pvt. Ltd. is poised to emerge as a trusted name in both domestic and global pharmaceutical markets.</p>
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

                      {/* Card Design */}
                      <div className='col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        {/* Card 1 - Our Mission */}
                        <div className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
                            {/* Gradient Background */}
                            <div className='absolute inset-0 bg-gradient-to-br from-[#049fe5] via-[#0288d1] to-[#01579b] opacity-90 group-hover:opacity-100 transition-opacity duration-500'></div>
                            
                            {/* Animated Circle Decoration */}
                            <div className='absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700'></div>
                            <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700'></div>
                            
                            {/* Content */}
                            <div className='relative z-10 p-8 flex flex-col gap-4'>
                                {/* Icon */}
                                <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500'>
                                    <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                </div>
                                
                                {/* Title */}
                                <h2 className='text-3xl font-bold text-white'>Our Mission</h2>
                                
                                {/* Divider */}
                                <div className='w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-500'></div>
                                
                                {/* Description */}
                                <p className='text-white/90 text-base leading-relaxed'>
                                    To provide innovative, effective, and affordable medical solutions that enhance the quality of life.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 - Our Vision */}
                        <div className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'>
                            {/* Gradient Background */}
                            <div className='absolute inset-0 bg-gradient-to-br from-[#1a237e] via-[#283593] to-[#3949ab] opacity-90 group-hover:opacity-100 transition-opacity duration-500'></div>
                            
                            {/* Animated Circle Decoration */}
                            <div className='absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700'></div>
                            <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700'></div>
                            
                            {/* Content */}
                            <div className='relative z-10 p-8 flex flex-col gap-4'>
                                {/* Icon */}
                                <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500'>
                                    <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                    </svg>
                                </div>
                                
                                {/* Title */}
                                <h2 className='text-3xl font-bold text-white'>Our Vision</h2>
                                
                                {/* Divider */}
                                <div className='w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-500'></div>
                                
                                {/* Description */}
                                <p className='text-white/90 text-base leading-relaxed'>
                                    To be recognized as a trusted name in the Indian pharmaceutical industry for excellence in women's health, dermatology, and general medicine.
                                </p>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
          <WhyChooseUs/>
          <Numbers/>
        </>
      )
}

export default page
                    //   <div className="space-y-6">
                    //       {/* Main Title */}
                    //       <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-[#049fe5] ">
                    //           About Us
                    //       </h2>
  
                    //       {/* Subtitle */}
                       
  
                    //       {/* Company Description */}
                    //       <p className="text-base md:text-sm text-gray-700 leading-relaxed font-heading">
                    //           DWEPS Pharmaceutical Pvt Ltd is a progressive Indian pharmaceutical company incorporated in 2016. With a corporate presence in Bengaluru, we specialize in the development and marketing of high-quality pharmaceutical formulations.
                    //       </p>
  
                        
  
                         
  
                    //       {/* Our Core Values Section */}
                    //       <div className="space-y-3">
                    //           <h4 className="text-lg md:text-xl font-bold text-gray-800">
                    //               Our Core Values
                    //           </h4>
                    //           <ul className="space-y-2 text-base md:text-sm text-gray-700">
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Integrity in everything we do</span>
                    //               </li>
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Innovation that improves lives</span>
                    //               </li>
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Quality that meets global standards</span>
                    //               </li>
                    //               <li className="flex items-start">
                    //                   <span className="text-[#049fe5] mr-2 font-bold"></span>
                    //                   <span>Compassion toward patients and partners</span>
                    //               </li>
                    //           </ul>
                    //       </div>
                    //   </div>