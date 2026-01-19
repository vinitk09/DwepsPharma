'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const page = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const strengths = [
    {
      image: "/DwepsServiceImage.png",
      title: "Third Party Manufacturing",
      description: "At DWEPS Pharmaceutical Pvt. Ltd., we provide end-to-end third-party manufacturing solutions for pharmaceutical companies seeking to expand their product range without investing in manufacturing infrastructure. Our state-of-the-art facilities and stringent quality control systems ensure the production of high-efficacy formulations that meet both domestic and international regulatory standards.",
      moreText: "From product formulation and development to packaging and timely delivery, we handle the entire process with professionalism and precision. We offer flexible batch sizes, competitive pricing, and full transparency, making us a trusted partner for startups, growing brands, and established pharmaceutical companies alike. Whether you are looking to launch new products under your brand name or scale up existing ones, our third-party manufacturing services provide the support and infrastructure you need to succeed in a competitive market.",
      colorClass: "group-hover:bg-[#049fe5]"
    },
    {
      image: "/DwepsServiceImage2.png",
      title: "Franchisee",
      description: "DWEPS Pharmaceutical Pvt. Ltd. invites dynamic and growth-oriented individuals and businesses to become part of our expanding pharmaceutical network through our franchisee program. We offer a lucrative opportunity to operate under the trusted DWEPS brand, providing a wide range of high-quality pharmaceutical products across multiple therapeutic categories.",
      moreText: "As a franchisee, you benefit from exclusive marketing rights, competitive pricing, promotional support, timely product delivery, and consistent quality assurance. Our dedicated support team ensures smooth onboarding, operational guidance, and ongoing assistance to help you succeed in your territory. Join hands with DWEPS and become a part of our mission to deliver accessible and effective healthcare solutions across India. Let’s grow together in the booming pharmaceutical sector.",
      colorClass: "group-hover:bg-[#049fe5]"
    },
    {
      image: "/DwepsServiceImage3.png",
      title: "Distributor",
      description: "DWEPS Pharmaceutical Pvt. Ltd. operates a robust and efficient distribution network that ensures timely and seamless delivery of our pharmaceutical products across India. Our well-structured logistics system is designed to meet the diverse needs of hospitals, clinics, pharmacies, and medical institutions, even in remote and rural areas.",
      moreText: "We partner with reliable distributors and stockists, enabling swift product availability and maintaining consistent supply chains. Every shipment is managed with precision, adhering to strict quality and safety standards to ensure product integrity from our facilities to the end user. Our commitment to efficient distribution is a key pillar of our promise to make high-quality, affordable healthcare accessible to all.",
      colorClass: "group-hover:bg-[#049fe5]"
    }
  ]

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

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
            Services
        </h2>
        
        {/* Breadcrumb style */}
        <p className="text-sm font-medium text-[#049fe5]">
            Home / Services 
        </p>

      
    </div>

    </section>
    <section id="services" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50 font-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2 ">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                expandedCard === index ? 'md:col-span-3' : ''
              }`}
            >
              {/* Content */}
              <div className="relative z-10 py-6 px-6 flex flex-col items-center flex-grow">
                
                {/* Image: Larger size with hover effect */}
                <div className={`mb-6 w-72 h-32 md:w-72 md:h-40 relative rounded-sm overflow-hidden transition-transform duration-300 group-hover:scale-110`}>
                  <Image
                    src={strength.image}
                    alt={strength.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-xl lg:text-xl font-bold mb-4 text-gray-800 font-poppins">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-sm lg:text-sm leading-relaxed text-gray-600 font-poppins mb-auto">
                  {strength.description}
                </p>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedCard === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm md:text-sm lg:text-sm leading-relaxed text-gray-600 font-poppins">
                    {strength.moreText}
                  </p>
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-6 px-4 py-2 bg-[#049fe5] text-white hover:bg-[#0288d1] font-semibold text-base rounded-md transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  {expandedCard === index ? (
                    <>
                      Read Less
                      <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Read More
                      <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default page