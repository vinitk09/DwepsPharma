'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.error || 'Failed to send message')
            }

            setSubmitStatus('success')
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                message: ''
            })

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
            setTimeout(() => setSubmitStatus(null), 5000)
        } finally {
            setIsSubmitting(false)
        }
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
            Contact
        </h2>
        
        {/* Breadcrumb style */}
        <p className="text-sm font-medium text-[#049fe5]">
            Home / Contact 
        </p>

      
    </div>

        </section>



            <div className="min-h-screen bg-white pt-28 pb-24">
                <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-16">
                    {/* Main Heading */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            LET&apos;S GET IN TOUCH
                        </h1>
                        <div className="w-24 h-1 bg-[#049fe5] mx-auto"></div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column - Contact Form */}
                        <div className="bg-white">
                            <div className="flex items-center mb-6">
                                <div className="w-1 h-8 bg-[#049fe5] mr-4"></div>
                                <h2 className="text-xl font-bold text-gray-900">MESSAGE</h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#049fe5] focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#049fe5] focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone No.
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#049fe5] focus:border-transparent text-gray-900 placeholder:text-gray-400 transition-all"
                                        placeholder="Phone No."
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#049fe5] focus:border-transparent text-gray-900 placeholder:text-gray-400 resize-y transition-all"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#049fe5] hover:bg-[#028ccc] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                </button>

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 animate-fade-in">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-green-700 font-medium">The form was sent successfully.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 animate-fade-in">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <p className="text-red-700 font-medium">Failed to send message. Please try again.</p>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Right Column - Contact Info & Social Media */}
                        <div className="bg-gray-50 rounded-lg p-12 lg:p-14">
                            {/* Our Contact Section */}
                            <div className="mb-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-1 h-8 bg-[#049fe5] mr-4"></div>
                                    <h2 className="text-xl font-bold text-gray-900">OUR CONTACT</h2>
                                </div>

                                <div className="space-y-6">
                                    {/* Call Us */}
                                    <div className="flex items-start space-x-4">
                                        <div className="shrink-0 w-12 h-12 bg-[#049fe5] rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-[#049fe5] font-semibold text-base mb-1">Call Us</h3>
                                            <a
                                                href="tel:+919204763310"
                                                className="text-gray-700 hover:text-[#049fe5] transition-colors"
                                            >
                                                +91 92047 63310
                                            </a>
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div className="flex items-start space-x-4">
                                        <div className="shrink-0 w-12 h-12 bg-[#049fe5] rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-[#049fe5] font-semibold text-base mb-1">Email Address</h3>
                                            <a
                                                href="mailto:cnf@dwepspharma.com"
                                                className="text-gray-700 hover:text-[#049fe5] transition-colors break-all"
                                            >
                                                cnf@dwepspharma.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div>
                                {/* <div className="flex items-center mb-6">
                                    <div className="w-1 h-8 bg-[#049fe5] mr-4"></div>
                                    <h2 className="text-2xl font-bold text-gray-900">SOCIAL MEDIA</h2>
                                </div> */}

                                {/* <div className="flex flex-wrap gap-4"> */}
                                {/* Facebook */}
                                {/* <a
                                        href="#"
                                        className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#049fe5] hover:bg-[#049fe5] group transition-all duration-300"
                                        aria-label="Facebook"
                                    >
                                        <span className="text-gray-600 group-hover:text-white font-bold text-lg">f</span>
                                    </a> */}

                                {/* Twitter */}
                                {/* <a
                                        href="#"
                                        className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#049fe5] hover:bg-[#049fe5] group transition-all duration-300"
                                        aria-label="Twitter"
                                    >
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a> */}

                                {/* LinkedIn */}
                                {/* <a
                                        href="#"
                                        className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#049fe5] hover:bg-[#049fe5] group transition-all duration-300"
                                        aria-label="LinkedIn"
                                    >
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a> */}

                                {/* Instagram */}
                                {/* <a
                                        href="#"
                                        className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#049fe5] hover:bg-[#049fe5] group transition-all duration-300"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a> */}

                                {/* YouTube */}
                                {/* <a
                                        href="#"
                                        className="w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#049fe5] hover:bg-[#049fe5] group transition-all duration-300"
                                        aria-label="YouTube"
                                    >
                                        <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>


                    {/* Map Section */}
                    <div className="mt-16 md:mt-20">
                        <div className="flex items-center mb-6">
                            <div className="w-1 h-8 bg-[#049fe5] mr-4"></div>
                            <h2 className="text-xl font-bold text-gray-900">LOCATION</h2>
                        </div>
                        <div className="mb-4">
                            <p className="text-[#049fe5] font-semibold mb-2">CORPORATE OFFICE</p>
                            <p className="text-gray-900 font-bold">
                                3rd Floor, The Hub Unit 1, Sarjapur-Marathahalli Rd, Bellandur, Bengaluru, Karnataka, 560103
                            </p>
                        </div>
                        <div className="w-full max-w-2xl h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d497771.4703964603!2d77.672296!3d12.918028!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20Floor%2C%202-3%20514%2F%201-2-3%2C%20Sarjapur%20-%20Marathahalli%20Rd%20Bellandur%20Bengaluru%2C%20Karnataka%20560035!5e0!3m2!1sen!2sus!4v1767332847648!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Company Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>


            </div>
            {/* <Footer /> */}
        </>
    )
}

export default ContactPage
