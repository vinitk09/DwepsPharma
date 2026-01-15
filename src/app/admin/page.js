"use client"
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// Importing icons (install lucide-react if you haven't: npm install lucide-react)
import { Search, Plus, Edit, Trash2, LayoutDashboard, ShoppingBag, FileText, MessageCircle, Menu, X, User, ArrowUpRight, ChevronRight, Settings } from 'lucide-react';

const Page = () => {
  const data = [
    { name: 'Jan', revenue: 4000, profit: 2400 },
    { name: 'Feb', revenue: 3000, profit: 1398 },
    { name: 'Mar', revenue: 2000, profit: 9800 },
    { name: 'Apr', revenue: 2780, profit: 3908 },
    { name: 'May', revenue: 1890, profit: 4800 },
    { name: 'Jun', revenue: 2390, profit: 3800 },
    { name: 'Jul', revenue: 3490, profit: 4300 },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-heading">
      
      {/* ================= Sidebar ================= */}
      <aside 
        className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'w-64' : 'w-20'} 
        `}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-center border-b border-gray-100">
          {/* <div className="font-bold text-2xl text-blue-600">
            {isSidebarOpen ? 'PharmaDash' : 'PD'}
          </div> */}
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 py-6 flex flex-col gap-2 px-3">
            <SidebarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" isOpen={isSidebarOpen} active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')} />
            <SidebarItem icon={<ShoppingBag size={20}/>} text="Products" isOpen={isSidebarOpen} active={activeTab === 'products'}
            onClick = {() => setActiveTab('products')} />
            <SidebarItem icon={<FileText size={20}/>} text="Blogs" isOpen={isSidebarOpen} />
            <SidebarItem icon={<MessageCircle size={20}/>} text="Enquiries" isOpen={isSidebarOpen} />
            {/* <div className="mt-auto">
                <SidebarItem icon={<Settings size={20}/>} text="Settings" isOpen={isSidebarOpen} />
            </div> */}
        </nav>
      </aside>


      {/* ================= Main Content ================= */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
            >
              <Menu size={20} />
            </button>
            {/* <h2 className="text-xl font-semibold text-gray-800">Dashboard Overview</h2> */}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-full cursor-pointer transition">
                {/* <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-green-600">
                    <User size={18} />
                </div> */}
                {/* <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin Profile</span> */}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 space-y-8">

            {activeTab === 'dashboard' ? (
                <>
                 {/* Top Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                    title="Product Data" 
                    value="1,240" 
                    icon={<ShoppingBag className="text-blue-600" />} 
                    bg="bg-blue-50"
                    trend="+12%"
                    borderColor="border-blue-500"
                    backgroundColor="bg-blue-500"
                />
                <StatCard 
                    title="Total Blogs" 
                    value="84" 
                    icon={<FileText className="text-purple-600" />} 
                    bg="bg-purple-50"
                    trend="+4%"
                    borderColor="border-purple-500"
                    backgroundColor="bg-purple-500"
                />
                <StatCard 
                    title="New Enquiries" 
                    value="12" 
                    icon={<MessageCircle className="text-orange-600" />} 
                    bg="bg-orange-50"
                    trend="+8%"
                    borderColor="border-red-500"
                    backgroundColor="bg-red-500"
                />
            </div>

            {/* Graph Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">Revenue Analytics</h3>
                    <p className="text-sm text-gray-400">Monthly revenue flow</p>
                </div>
                
                <div className="w-full h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2269c5ff" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#226ec5ff" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                            <XAxis 
                                dataKey="name" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                                dy={10}
                            />
                            <YAxis 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="revenue" 
                                stroke="#1651a3ff" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorRevenue)" 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Quick Actions Section */}
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <ActionCard title="Add Product" desc="Create a new listing" icon={<ShoppingBag size={20}/>} />
                   <ActionCard title="Write Blog" desc="Publish new content" icon={<FileText size={20}/>} />
                   <ActionCard title="View Enquiries" desc="Check customer messages" icon={<MessageCircle size={20}/>} />
                </div>
            </div>
            </>
            ) : ( <ProductsView/>)}
            
           

        </div>
      </main>
    </div>
  )
}

const ProductsView = () => {
    // Dummy Data for the table
    const products = [
        { id: 1, name: 'Paracetamol 500mg', category: 'Medicine', price: '$12.00', stock: 450, status: 'In Stock' },
        { id: 2, name: 'Vitamin C Serum', category: 'Skincare', price: '$24.50', stock: 120, status: 'Low Stock' },
        { id: 3, name: 'Surgical Mask N95', category: 'Equipment', price: '$5.00', stock: 0, status: 'Out of Stock' },
        { id: 4, name: 'Antibiotic Cream', category: 'Medicine', price: '$8.90', stock: 85, status: 'In Stock' },
        { id: 5, name: 'Digital Thermometer', category: 'Equipment', price: '$15.00', stock: 30, status: 'In Stock' },
    ];

    return (
        <div className="space-y-6 animate-fade-in"> {/* Simple fade-in animation */}
            
            {/* Table Header Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    <Plus size={20} />
                    <span>Add Product</span>
                </button>
            </div>

            {/* The Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-gray-600">Product Name</th>
                                <th className="p-4 text-sm font-semibold text-gray-600">Category</th>
                                <th className="p-4 text-sm font-semibold text-gray-600">Price</th>
                                <th className="p-4 text-sm font-semibold text-gray-600">Stock</th>
                                <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
                                <th className="p-4 text-sm font-semibold text-gray-600 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition">
                                    <td className="p-4 font-medium text-gray-800">{product.name}</td>
                                    <td className="p-4 text-gray-600">{product.category}</td>
                                    <td className="p-4 font-semibold text-gray-800">{product.price}</td>
                                    <td className="p-4 text-gray-600">{product.stock} units</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium
                                            ${product.status === 'In Stock' ? 'bg-green-100 text-green-700' : ''}
                                            ${product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' : ''}
                                            ${product.status === 'Out of Stock' ? 'bg-red-100 text-red-700' : ''}
                                        `}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"><Edit size={16}/></button>
                                            <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 size={16}/></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Visual only) */}
                <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                    <span>Showing 1-5 of 120 products</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// --- Helper Components for cleaner code ---

// 1. Sidebar Item Component
const SidebarItem = ({ icon, text, isOpen, active, onClick }) => (
    <div
    onClick={onClick}
     className={`
        flex items-center p-3 rounded-lg cursor-pointer transition-colors group
        ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}
        ${isOpen ? 'justify-start' : 'justify-center'}
    `}>
        <div className="shrink-0">{icon}</div>
        
        <span className={`ml-3 font-medium whitespace-nowrap transition-all duration-300 overflow-hidden
            ${isOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}
        `}>
            {text}
        </span>
        
        {isOpen && !active && (
            <ChevronRight size={16} className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"/>
        )}
    </div>
);

// 2. Statistics Card Component
const StatCard = ({ title, value, icon, bg, trend, borderColor,backgroundColor }) => (
    <div className={`bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md hover:scale-105 transition-shadow transform transition-transform duration-300 ease-in-out
    hover:scale-105 border hover:${borderColor} hover:${backgroundColor}`}>
        <div className="flex justify-between items-start">
            <div>
                <p className="text-gray-500 text-sm font-medium">{title}</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-2">{value}</h3>
            </div>
            <div className={`p-3 rounded-lg ${bg}`}>
                {icon}
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-green-600 font-medium">
            <ArrowUpRight size={16} className="mr-1"/>
            <span>{trend}</span>
            <span className="text-gray-400 ml-1 font-normal">vs last month</span>
        </div>
    </div>
);

// 3. Action Card Component
const ActionCard = ({ title, desc, icon }) => (
    <div className="bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all group">
        <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    </div>
);

export default Page





