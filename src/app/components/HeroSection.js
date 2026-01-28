'use client'

import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section 
            id="home" 
            // CHANGE 1: Changed 'justify-center' to 'justify-start'
            className="relative w-full h-screen flex items-center justify-start overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/banner.jpg"
                    alt="Pharmaceutical Laboratory"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Container */}
            {/* CHANGE 2: 
                - Removed 'mx-auto' (which centered the box)
                - Changed 'text-center' to 'text-left' 
                - Added 'md:ml-20' for spacing from the left edge 
            */}
            <div className="font-heading relative z-10 max-w-4xl px-6 md:ml-20 text-left">
                
                {/* Welcome Text */}
                <p className="text-[#049fe5] text-lg md:text-md mb-4 font-medium font-heading">
                    Welcome to Dweps Pharmaceuticals - An Admirable Company
                </p>

                {/* Main Headline */}
                <h1 className="text-white text-5xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    Innovating Healthcare,
                    <br />
                    Enhancing Lives
                </h1>

                {/* Description Paragraph */}
                {/* CHANGE 3: Removed 'mx-auto' so the text block aligns left */}
                <p className="text-white text-base md:text-lg lg:text-lg max-w-2xl leading-relaxed">
                    Since our inception in November 2016, DWEPS Pharmaceutical Pvt Ltd has been committed to delivering high-quality, affordable, and accessible healthcare solutions across India. With a focus on <em className="italic">gynecological, skin care, and general wellness products</em>, we are dedicated to improving the health and well-being of communities through innovation and integrity.
                </p>
            </div>

            {/* Scroll Down Indicator - kept on the right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-white">
                <svg
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    )
}

export default HeroSection




// 'use client'

// import React from 'react'
// import Image from 'next/image'

// const HeroSection = () => {
//     return (
//         <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden  ">
//             {/* Background Image */}
//             <div className="absolute inset-0 z-0">
//                 <Image
//                     src="/banner.jpg"
//                     alt="Pharmaceutical Laboratory"
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//                 {/* Dark overlay for better text readability */}
//                 <div className="absolute inset-0 bg-black/40"></div>
//             </div>

//             {/* Content Container */}
//             <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//                 {/* Welcome Text */}
//                 <p className="text-[#049fe5] text-lg md:text-xl mb-4 font-medium font-heading">
//                     Welcome to Dweps Pharmaceuticals - An Admirable Company
//                 </p>

//                 {/* Main Headline */}
//                 <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold  mb-8 leading-tight">
//                     Innovating Healthcare,
//                     <br />
//                     Enhancing Lives
//                 </h1>

//                 {/* Description Paragraph */}
//                 <p className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
//                     Since our inception in November 2016, DWEPS Pharmaceutical Pvt Ltd has been committed to delivering high-quality, affordable, and accessible healthcare solutions across India. With a focus on <em className="italic">gynecological, skin care, and general wellness products</em>, we are dedicated to improving the health and well-being of communities through innovation and integrity.
//                 </p>
//             </div>

//             {/* Scroll Down Indicator */}
//             <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-white">
//                 {/* <span className="text-sm font-medium writing-vertical-rl transform rotate-180">
//           Scroll Down
//         </span> */}
//                 <svg
//                     className="w-6 h-6 animate-bounce"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                     />
//                 </svg>
//             </div>

//             {/* Navigation Buttons */}
//             {/* <div className="absolute bottom-8 right-8 z-10 flex gap-4">
//                 <button className="w-12 h-12 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-lg">
//                     <svg
//                         className="w-6 h-6 text-gray-800"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 19l-7-7 7-7"
//                         />
//                     </svg>
//                 </button>
//                 <button className="w-12 h-12 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-lg">
//                     <svg
//                         className="w-6 h-6 text-gray-800"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M9 5l7 7-7 7"
//                         />
//                     </svg>
//                 </button>
//             </div> */}
//         </section>
//     )
// }

// export default HeroSection
