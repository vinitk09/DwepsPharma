'use client'

import React, { useState, useEffect } from 'react'

const page = () => {
  const [products, setProducts] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
  
      useEffect(() => {
          const fetchProducts = async () => {
              try {
                  const response = await fetch('/api/products')
                  const result = await response.json()
                  
                  if (result.success) {
                      setProducts(result.data)
                  } else {
                      setError(result.error || 'Failed to fetch products')
                  }
              } catch (err) {
                  setError('Error fetching products: ' + err.message)
              } finally {
                  setLoading(false)
              }
          }
  
          fetchProducts()
      }, [])
  
      if (loading) {
          return (
              <section id="products" className="w-full py-16 md:py-10 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
                      <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-40 blur-sm"></div>
                  </div>
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12 md:mb-16">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                              Our Medicines
                          </h2>
                      </div>
                      <div className="text-center py-12">
                          <p className="text-white">Loading products...</p>
                      </div>
                  </div>
              </section>
          )
      }
  
      if (error) {
          return (
              <section id="products" className="w-full py-16 md:py-10 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
                      <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-40 blur-sm"></div>
                  </div>
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12 md:mb-16">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                              Our Medicines
                          </h2>
                      </div>
                      <div className="text-center py-12">
                          <p className="text-red-300">Error: {error}</p>
                      </div>
                  </div>
              </section>
          )
      }
  
      if (!products || products.length === 0) {
          return (
              <section id="products" className="w-full py-16 md:py-10 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
                      <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-40 blur-sm"></div>
                  </div>
                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12 md:mb-16">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                              Our Medicines
                          </h2>
                      </div>
                      <div className="text-center py-12">
                          <p className="text-white">No products available at the moment.</p>
                      </div>
                  </div>
              </section>
          )
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
            Gynecological Range
        </h2>
        
        {/* Breadcrumb style */}
        <p className="text-sm font-medium text-[#049fe5]">
            Home / Gynecological Range
        </p>

        <div className="max-w-2xl">
            <p className="text-gray-700 leading-relaxed">
                Our Gynaecological Range includes specialized medicines designed to support women’s health, hormonal balance, and overall wellness, along with detailed composition and product benefits for better understanding.
            </p>
        </div>
    </div>

        </section>
        
        
          <section id="products" className="w-full py-16 md:py-10 bg-white relative overflow-hidden font-heading">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/70"></div>
                  <div className="absolute inset-0 bg-[url('/banner.jpg')] bg-cover bg-center opacity-40 blur-sm"></div>
              </div>
  
              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Section Title */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-16">
                      <div className="text-center md:text-left mb-6 md:mb-0">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                              Our Medicines
                          </h2>
                          <p className="text-lg md:text-xl text-gray-200 max-w-2xl md:max-w-none">
                              Discover our range of high-quality pharmaceutical products designed to enhance health and wellness
                          </p>
                      </div>
                      {/* View All Products Button */}
                      <div className="flex justify-center md:justify-end">
                          <button className="inline-flex items-center px-8 py-3 bg-transparent text-white font-medium rounded-lg hover:text-gray-300 transition-colors duration-300">
                              View All Products
                              <svg
                                  className="ml-2 w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                              </svg>
                          </button>
                      </div>
                  </div>
  
                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                      {products.slice(0, 3).map((product) => (
                          <div
                              key={product._id || product.id}
                              className="group bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                          >
                              {/* Product Image */}
                              <div className="relative w-full h-64 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                  <img
                                      src={product.image}
                                      alt={product.name}
                                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                                      onError={(e) => {
                                          // Fallback to a placeholder if image doesn't exist
                                          e.target.style.display = 'none'
                                      }}
                                  />
                                  {/* Package Info Badge */}
                                  <div className="absolute top-4 right-4 bg-[#049fe5] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                      {product.packageInfo}
                                  </div>
                              </div>
  
                              {/* Product Info */}
                              <div className="p-6 space-y-3">
                                  <h3 className="text-2xl md:text-2xl font-bold text-gray-800 group-hover:text-[#049fe5] transition-colors duration-300">
                                      {product.name}
                                  </h3>
                                  <p className="text-sm md:text-md text-gray-600 leading-relaxed">
                                      {product.description}
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



// <div id="controls-carousel" className="relative w-full bg-black" data-carousel="static">
   
//     <div className="relative h-56 overflow-hidden rounded-base md:h-96">
        
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
       
//         <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
//             <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
       
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
       
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
//         </div>
//     </div>
    
//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>