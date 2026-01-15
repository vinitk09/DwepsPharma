import React from 'react'

const page = () => {
   const strengths = [
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M4 17h16M8 17V8M8 8l4-3M12 5h4M12 5l4 3M16 8v9M4 17v3M20 17v3" />
          <rect x="3" y="17" width="2" height="3" rx="0.5" />
          <rect x="19" y="17" width="2" height="3" rx="0.5" />
          <rect x="6" y="10" width="4" height="2" rx="0.5" />
        </svg>
      ),
      title: "Manufacturing",
      description: "Our manufacture is driven by a unique clinical and research approach that emphasizes scientific advancements.",
      colorClass: "group-hover:bg-[#049fe5]" // Color to fill on hover
    },
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a6 6 0 016 6c0 2.5-2 4.5-4.5 4.5H10.5C8 16.5 6 14.5 6 12a6 6 0 016-6z" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      ),
      title: "Innovations",
      description: "Healthcare innovation is an unavoidable necessity. Better healthcare is becoming increasingly necessary.",
      colorClass: "group-hover:bg-[#049fe5]"
    },
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 6h18M3 6v15M21 6v15M5 21V6M19 21V6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h2M6 12h2M6 15h2M6 18h2M10 9h2M10 12h2M10 15h2M10 18h2M14 9h2M14 12h2M14 15h2M14 18h2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9-3 9 3" />
        </svg>
      ),
      title: "Infrastructure",
      description: "Modern formulation manufacturing facility with effective storage spaces and adherence to international norms.",
      colorClass: "group-hover:bg-[#049fe5]"
    },
    {
      icon: (
        <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" strokeWidth="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c1.5 0 2.9.4 4.1 1.1M12 22c-1.5 0-2.9-.4-4.1-1.1M2 12c0-1.5.4-2.9 1.1-4.1M22 12c0 1.5-.4 2.9-1.1 4.1" />
        </svg>
      ),
      title: "Quality Control",
      description: "We place a strong emphasis on maintaining the ethics of research and development to support efficient operations.",
      colorClass: "group-hover:bg-[#049fe5]"
    }
  ]

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 ">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group relative h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* 1. The Animated Background Layer */}
              <div 
                className={`absolute inset-0 translate-y-full transition-transform duration-500 ease-out ${strength.colorClass} group-hover:translate-y-0`}
              />

              {/* 2. The Content (Must be relative z-10 to sit on top of the animation) */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col items-center text-center">
                
                {/* Icon: Changes color on hover */}
                <div className={`mb-6 md:mb-8 transition-colors duration-300 text-[#049fe5] group-hover:text-white`}>
                  {strength.icon}
                </div>

                {/* Title: Changes color on hover */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-800 transition-colors duration-300 group-hover:text-white font-poppins font-poppins">
                  {strength.title}
                </h3>

                {/* Description: Changes color on hover */}
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white group-hover:opacity-90 font-poppins">
                  {strength.description}
                </p>
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