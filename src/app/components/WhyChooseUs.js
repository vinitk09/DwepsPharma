'use client'

import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    const features = [
        {
            number: '01',
            title: 'HIGH-QUALITY STANDARDS',
            description: 'All medicines are manufactured under strict quality control protocols, ensuring safety, efficacy, and compliance with national and international pharmaceutical standards.'
        },
        {
            number: '02',
            title: 'WIDE PRODUCT RANGE',
            description: 'Offers a diverse portfolio including generic medicines, OTC drugs, wellness supplements, and specialized formulations across multiple therapeutic categories.'
        },
        {
            number: '03',
            title: 'AFFORDABLE PRICING',
            description: 'Committed to making healthcare accessible with competitively priced medications without compromising on quality.'
        },
        {
            number: '04',
            title: 'DISTRIBUTION NETWORK',
            description: 'Ensures timely and efficient delivery across urban and rural regions through a well-structured supply chain and logistics network.'
        }
    ]

    // Split features into left and right groups
    const leftFeatures = features.slice(0, 2);
    const rightFeatures = features.slice(2, 4);

    // Reusable Feature Item Component
    const FeatureItem = ({ feature, alignRight = false }) => (
        <div className={`relative flex flex-col ${alignRight ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} items-start text-left mb-8 last:mb-0`}>
            {/* Number with vertical line */}
            <div className={`flex items-start gap-3 mb-2 ${alignRight ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="flex items-center">
                    <div className="w-1 h-6 bg-[#049fe5] mx-2"></div>
                    <span className="text-2xl font-bold text-[#049fe5]">
                        {feature.number}
                    </span>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-base md:text-lg font-bold text-[#1a237e] mb-1.5">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-sm">
                {feature.description}
            </p>
        </div>
    );

    return (
        <section className="w-full font-heading bg-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Header Section (Title & Intro) */}
                <div className="text-left max-w-3xl  mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        Dweps Pharmaceuticals is a trusted name in healthcare, delivering high-quality and affordable medicines across a wide range of therapeutic areas.
                    </p>
                </div>

                {/* 2. Main Grid Layout (Left Text - Image - Right Text) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Left Column (Features 1 & 2) */}
                    {/* On large screens, we align text to the right (towards the image) for symmetry */}
                    <div className="order-2 lg:order-1 space-y-8 lg:space-y-16">
                        {leftFeatures.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} alignRight={true} />
                        ))}
                    </div>

                    {/* Center Column (Image) */}
                    <div className="order-1 lg:order-2 flex justify-center py-6 lg:py-0">
                        <div className="relative w-full max-w-md aspect-[5/5] md:aspect-square lg:aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/banner.jpg"
                                alt="Pharmaceutical Laboratory"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column (Features 3 & 4) */}
                    <div className="order-3 lg:order-3 space-y-8 lg:space-y-16">
                        {rightFeatures.map((feature, index) => (
                            <FeatureItem key={index} feature={feature} alignRight={false} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs



// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const WhyChooseUs = () => {
//     const features = [
//         {
//             number: '01',
//             title: 'HIGH-QUALITY STANDARDS',
//             description: 'All medicines are manufactured under strict quality control protocols, ensuring safety, efficacy, and compliance with national and international pharmaceutical standards.'
//         },
//         {
//             number: '02',
//             title: 'WIDE PRODUCT RANGE',
//             description: 'Offers a diverse portfolio including generic medicines, OTC drugs, wellness supplements, and specialized formulations across multiple therapeutic categories.'
//         },
//         {
//             number: '03',
//             title: 'AFFORDABLE PRICING',
//             description: 'Committed to making healthcare accessible with competitively priced medications without compromising on quality.'
//         },
//         {
//             number: '04',
//             title: 'DISTRIBUTION NETWORK',
//             description: 'Ensures timely and efficient delivery across urban and rural regions through a well-structured supply chain and logistics network.'
//         }
//     ]

//     const stats = [
//         { value: '10+', label: 'Products' },
//         { value: '1,000+', label: 'Happy Customers' },
//         { value: '95%+', label: 'Positive Feedbacks' }
//     ]

//     return (
//         <section className="w-full font-heading">
//             {/* Top Section - White Background */}
//             <div className="w-full bg-white py-6 md:py-8 lg:py-10">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
//                         {/* Left Side - Content */}
//                         <div className="space-y-6">
//                             {/* Title */}
//                             <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1a237e]">
//                                 Why Choose Us
//                             </h2>

//                             {/* Introductory Paragraph */}
//                           
//                              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
//                                 Dweps Pharmaceuticals is a trusted name in healthcare, delivering high-quality and affordable medicines across a wide range of therapeutic areas. With a focus on innovation, safety, and accessibility, we are committed to improving lives through reliable pharmaceutical solutions.
//                             </p>
//                            

//                             {/* Features Grid */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
//                                 {features.map((feature, index) => (
//                                     <div key={index} className="relative">
//                                         {/* Number with vertical line */}
//                                         <div className="flex items-start gap-3 mb-2">
//                                             <div className="flex items-center">
//                                                 <div className="w-1 h-6 bg-[#049fe5] mr-2"></div>
//                                                 <span className="text-2xl md:text-2xl font-bold text-[#049fe5]">
//                                                     {feature.number}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         {/* Title */}
//                                         <h3 className="text-base md:text-lg font-bold text-[#1a237e] mb-1.5">
//                                             {feature.title}
//                                         </h3>

//                                         {/* Description */}
//                                         <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
//                                             {feature.description}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Right Side - Lab Image */}
//                         <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden shadow-xl">
//                             <Image
//                                 src="/banner.jpg"
//                                 alt="Pharmaceutical Laboratory"
//                                 fill
//                                 className="object-cover"
//                                 priority
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Section - Dark Blue Background with Statistics */}
//             {/* <div className="relative w-full bg-gradient-to-b from-[#1a237e] to-[#0d1440] py-16 md:py-20 lg:py-24 overflow-hidden"> */}
//             {/* Decorative capsule/pill shape */}
//             {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d1440] rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div> */}

//             {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#049fe5] mb-3">
//                   {stat.value}
//                 </div>
//                 <div className="text-xl md:text-2xl text-white font-medium">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div> */}
//             {/* </div> */}
//         </section>
//     )
// }

// export default WhyChooseUs
