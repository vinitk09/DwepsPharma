'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const BlogDetailPage = () => {
    const params = useParams()
    const router = useRouter()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`/api/blogs/${params.id}`)
                const result = await response.json()

                if (result.success) {
                    setBlog(result.data)
                } else {
                    setError(result.error || 'Failed to fetch blog')
                }
            } catch (err) {
                setError('Error fetching blog: ' + err.message)
            } finally {
                setLoading(false)
            }
        }

        if (params.id) {
            fetchBlog()
        }
    }, [params.id])

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-white pt-28 pb-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center py-12">
                            <p className="text-gray-600">Loading blog...</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    if (error || !blog) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-white pt-28 pb-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center py-12">
                            <p className="text-red-600 mb-4">Error: {error || 'Blog not found'}</p>
                            <Link
                                href="/"
                                className="text-[#049fe5] hover:underline"
                            >
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white pt-20 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center text-[#049fe5] hover:text-[#028ccc] mb-8 transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>

                    {/* Blog Image */}
                    <div className="mb-8 overflow-hidden">
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {blog.title}
                        </h1>
                        {/* Date */}
                        {blog.createdAt && (
                            <p className="text-gray-500 text-sm mb-8">
                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        )}
                        {/* Description */}
                        {blog.description && (
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                                {blog.description}
                            </p>
                        )}
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                    </div>

                    {/* Blog Content */}
                    <article className="prose prose-lg max-w-none">




                        {/* Content */}
                        {blog.content && (
                            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {blog.content.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* If no content, show description as main content */}
                        {!blog.content && blog.description && (
                            <div className="text-gray-700 leading-relaxed">
                                <p>{blog.description}</p>
                            </div>
                        )}
                    </article>

                    {/* Back Button at Bottom */}
                    {/* <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center text-[#049fe5] hover:text-[#028ccc] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetailPage

