'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Blogs = () => {
  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs')
        const result = await response.json()

        if (result.success) {
          setBlogData(result.data)
        } else {
          setError(result.error || 'Failed to fetch blogs')
        }
      } catch (err) {
        setError('Error fetching blogs: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <section className="w-full py-16 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-4xl font-bold text-[#049fe5] mb-12">
            Health Solutions You Can Trust
          </h2>
          <div className="text-center py-12">
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="w-full py-16 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-4xl font-bold text-[#049fe5] mb-12">
            Health Solutions You Can Trust
          </h2>
          <div className="text-center py-12">
            <p className="text-red-600">Error: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (!blogData || blogData.length === 0) {
    return (
      <section className="w-full py-16 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-4xl font-bold text-[#049fe5] mb-12">
            Health Solutions You Can Trust
          </h2>
          <div className="text-center py-12">
            <p className="text-gray-600">No blogs available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-16 md:py-16 bg-white font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with View All Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-4xl font-bold text-[#049fe5]">
            Health Solutions You Can Trust
          </h2>
          {blogData.length > 3 && (
            <Link
              href="/blogs"
              className="inline-block px-8 py-3 bg-white text-[#049fe5] rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium self-start sm:self-auto"
            >
              View All
            </Link>
          )}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogData.slice(0, 3).map((blog) => (
            <div
              key={blog._id || blog.id}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-white text-sm mb-4 leading-relaxed">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/blogs/${blog._id || blog.id}`}
                  className="self-start px-6 py-2 border-2 border-white text-white bg-transparent rounded hover:bg-white hover:text-[#049fe5] transition-colors duration-300 font-medium inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs