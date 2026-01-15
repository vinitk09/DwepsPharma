'use client'

import React, { useState, useEffect } from 'react'

const Products = () => {
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
                            className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-64 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

export default Products