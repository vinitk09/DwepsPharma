"use client"
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Page = () => {
    // Data for the chart
    const data = [
        { name: 'Jan', revenue: 4000, profit: 2400 },
        { name: 'Feb', revenue: 3000, profit: 1398 },
        { name: 'Mar', revenue: 2000, profit: 9800 },
        { name: 'Apr', revenue: 2780, profit: 3908 },
        { name: 'May', revenue: 1890, profit: 4800 },
        { name: 'Jun', revenue: 2390, profit: 3800 },
        { name: 'Jul', revenue: 3490, profit: 4300 },
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile

    return (
        <div className='flex h-screen bg-gray-50 overflow-hidden'>

            {/* --- 1. MOBILE BACKDROP (Darken screen when menu open) --- */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* --- 2. SIDEBAR --- */}
            <aside className={`
                fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 shadow-xl 
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:shadow-none
            `}>
                
                {/* Sidebar Header */}
                <div className='h-16 flex items-center justify-between px-6 border-b border-gray-100'>
                    <div className='text-xl font-bold text-green-600'>Medi<span className='text-gray-800'>Care</span></div>
                    {/* Close Button (Mobile Only) */}
                    <button onClick={() => setIsSidebarOpen(false)} className='md:hidden text-gray-500 hover:text-red-500'>
                        ✕
                    </button>
                </div>

                {/* Sidebar Menu */}
                <div className='p-4 space-y-2 flex flex-col'>
                    <SidebarItem active>Explore Medicine</SidebarItem>
                    <SidebarItem>Blogs</SidebarItem>
                    <SidebarItem>Medi Care</SidebarItem>
                    <SidebarItem>Appointments</SidebarItem>
                </div>
            </aside>


            {/* --- 3. MAIN CONTENT AREA --- */}
            <main className='flex-1 overflow-y-auto'>
                <div className='p-6 md:p-8 space-y-6'>

                    {/* Header */}
                    <header className='flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3'>
                            {/* Hamburger Menu (Mobile Only) */}
                            <button 
                                onClick={() => setIsSidebarOpen(true)}
                                className='md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg'
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                            <h2 className='text-2xl font-bold text-gray-800'>Dashboard</h2>
                        </div>
                        
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold'>VK</div>
                        </div>
                    </header>

                    {/* Stats Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <StatCard label="Total Blogs" value="124" color="green" />
                        <StatCard label="Medical Records" value="8,230" color="blue" />
                        <StatCard label="Enquiries" value="45" color="purple" />
                    </div>

                    {/* Chart Section */}
                    <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Enquiry Analytics</h3>
                        <div className='h-[350px] w-full'>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                                    <Area type="monotone" dataKey="revenue" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <h3 className='text-lg font-bold text-gray-800 mb-4'>Quick Actions</h3>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            <ActionCard>Explore</ActionCard>
                            <ActionCard>Medical</ActionCard>
                            <ActionCard>Enquiry</ActionCard>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

// --- SUB COMPONENTS FOR CLEANER CODE ---

const SidebarItem = ({ children, active }) => (
    <div className={`px-4 py-3 rounded-lg font-medium cursor-pointer transition-all ${active ? 'bg-green-50 text-green-700 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
        {children}
    </div>
)

const StatCard = ({ label, value, color }) => {
    // Dynamic color classes
    const colorClasses = {
        green: "border-green-200 hover:border-green-500",
        blue: "border-blue-200 hover:border-blue-500",
        purple: "border-purple-200 hover:border-purple-500",
    }
    return (
        <div className={`bg-white border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${colorClasses[color] || 'border-gray-200'}`}>
            <p className='text-gray-500 text-sm font-medium uppercase'>{label}</p>
            <h3 className='text-2xl font-bold text-gray-800 mt-1'>{value}</h3>
        </div>
    )
}

const ActionCard = ({ children }) => (
    <button className='bg-white border border-gray-200 p-4 rounded-xl font-medium text-gray-600 shadow-sm hover:border-green-500 hover:text-green-600 hover:shadow-md transition-all'>
        {children}
    </button>
)

export default Page