'use client';

import AdminLayout from '../components/Layout';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: { count: 0, loading: true },
    blogs: { count: 0, loading: true },
    enquiries: { count: 0, loading: true },
  });
  const [recentItems, setRecentItems] = useState({
    products: [],
    blogs: [],
    enquiries: [],
  });
  const [enquiryStatusData, setEnquiryStatusData] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchRecentItems();
    fetchEnquiryStatusData();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch products count
      const productsRes = await fetch('/api/products');
      const productsData = await productsRes.json();
      setStats((prev) => ({
        ...prev,
        products: { count: productsData.data?.length || 0, loading: false },
      }));

      // Fetch blogs count
      const blogsRes = await fetch('/api/blogs');
      const blogsData = await blogsRes.json();
      setStats((prev) => ({
        ...prev,
        blogs: { count: blogsData.data?.length || 0, loading: false },
      }));

      // Fetch enquiries count
      const contactsRes = await fetch('/api/contacts');
      const contactsData = await contactsRes.json();
      setStats((prev) => ({
        ...prev,
        enquiries: { count: contactsData.data?.length || 0, loading: false },
      }));
    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats({
        products: { count: 0, loading: false },
        blogs: { count: 0, loading: false },
        enquiries: { count: 0, loading: false },
      });
    }
  };

  const fetchRecentItems = async () => {
    try {
      const [productsRes, blogsRes, contactsRes] = await Promise.all([
        fetch('/api/products'),
        fetch('/api/blogs'),
        fetch('/api/contacts'),
      ]);

      const productsData = await productsRes.json();
      const blogsData = await blogsRes.json();
      const contactsData = await contactsRes.json();

      setRecentItems({
        products: productsData.data?.slice(0, 3) || [],
        blogs: blogsData.data?.slice(0, 3) || [],
        enquiries: contactsData.data?.slice(0, 3) || [],
      });
    } catch (error) {
      console.error('Error fetching recent items:', error);
    }
  };

  const fetchEnquiryStatusData = async () => {
    try {
      const contactsRes = await fetch('/api/contacts');
      const contactsData = await contactsRes.json();
      const enquiries = contactsData.data || [];

      // Count enquiries by status
      const statusCounts = {
        new: 0,
        read: 0,
        replied: 0,
      };

      enquiries.forEach((enquiry) => {
        const status = enquiry.status || 'new';
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });

      // Transform to chart data format
      const chartData = [
        { name: 'New', value: statusCounts.new, color: '#3b82f6' }, // blue
        { name: 'Read', value: statusCounts.read, color: '#eab308' }, // yellow
        { name: 'Replied', value: statusCounts.replied, color: '#22c55e' }, // green
      ].filter((item) => item.value > 0); // Only show statuses with data

      setEnquiryStatusData(chartData);
    } catch (error) {
      console.error('Error fetching enquiry status data:', error);
      setEnquiryStatusData([]);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex gap-3">
            <Link
              href="/products/new"
              className="px-4 py-2 bg-[#049fe5] text-white rounded-lg hover:bg-[#028ccc] transition-all transform hover:scale-105 font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              + New Product
            </Link>
            <Link
              href="/blogs/new"
              className="px-4 py-2 bg-[#049fe5] text-white rounded-lg hover:bg-[#028ccc] transition-all transform hover:scale-105 font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
            >
              + New Blog
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Products Card */}
          <Link href="/products" className="block group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#049fe5] transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#049fe5] transition-colors">
                    Products
                  </h2>
                  <p className="text-gray-600 text-sm">pharmaceutical products</p>
                </div>
                <div className="ml-4 p-3 bg-blue-50 rounded-lg group-hover:bg-[#049fe5] transition-colors">
                  <svg
                    className="w-8 h-8 text-[#049fe5] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {stats.products.loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{stats.products.count}</span>
                      <span className="text-gray-500 text-sm">items</span>
                    </div>
                  )}
                </div>
                <span className="text-[#049fe5] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Manage →
                </span>
              </div>
            </div>
          </Link>

          {/* Blogs Card */}
          <Link href="/blogs" className="block group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#049fe5] transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#049fe5] transition-colors">
                    Blogs
                  </h2>
                  <p className="text-gray-600 text-sm">Manage your blog posts</p>
                </div>
                <div className="ml-4 p-3 bg-green-50 rounded-lg group-hover:bg-[#049fe5] transition-colors">
                  <svg
                    className="w-8 h-8 text-green-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {stats.blogs.loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{stats.blogs.count}</span>
                      <span className="text-gray-500 text-sm">posts</span>
                    </div>
                  )}
                </div>
                <span className="text-[#049fe5] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Manage →
                </span>
              </div>
            </div>
          </Link>

          {/* Enquiries Card */}
          <Link href="/enquiries" className="block group">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#049fe5] transform hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-[#049fe5] transition-colors">
                    Enquiries
                  </h2>
                  <p className="text-gray-600 text-sm">View contact form submissions</p>
                </div>
                <div className="ml-4 p-3 bg-purple-50 rounded-lg group-hover:bg-[#049fe5] transition-colors">
                  <svg
                    className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {stats.enquiries.loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>
                  ) : (
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{stats.enquiries.count}</span>
                      <span className="text-gray-500 text-sm">messages</span>
                    </div>
                  )}
                </div>
                <span className="text-[#049fe5] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Enquiry Status Chart */}
        <div className="mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Enquiry Status Distribution</h3>
              <Link
                href="/enquiries"
                className="text-sm text-[#049fe5] hover:underline font-medium"
              >
                View all →
              </Link>
            </div>
            {enquiryStatusData.length > 0 ? (
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                <div className="w-full lg:w-1/2 max-w-md">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={enquiryStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {enquiryStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="space-y-3">
                    {enquiryStatusData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="font-medium text-gray-800">{item.name}</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">{item.value}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center justify-between p-3">
                        <span className="font-semibold text-gray-800">Total</span>
                        <span className="text-lg font-bold text-[#049fe5]">
                          {enquiryStatusData.reduce((sum, item) => sum + item.value, 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No enquiry data available</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Recent Products */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Products</h3>
              <Link
                href="/products"
                className="text-sm text-[#049fe5] hover:underline font-medium"
              >
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {recentItems.products.length > 0 ? (
                recentItems.products.map((product) => (
                  <Link
                    key={product._id}
                    href={`/products/${product._id}/edit`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {product.name || product.title || 'Untitled Product'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(product.createdAt)}
                    </p>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 py-2">No products yet</p>
              )}
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Blogs</h3>
              <Link
                href="/blogs"
                className="text-sm text-[#049fe5] hover:underline font-medium"
              >
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {recentItems.blogs.length > 0 ? (
                recentItems.blogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blogs/${blog._id}/edit`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {blog.title || 'Untitled Blog'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(blog.createdAt)}
                    </p>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 py-2">No blogs yet</p>
              )}
            </div>
          </div>

          {/* Recent Enquiries */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Enquiries</h3>
              <Link
                href="/enquiries"
                className="text-sm text-[#049fe5] hover:underline font-medium"
              >
                View all
              </Link>
            </div>
            <div className="space-y-3">
              {recentItems.enquiries.length > 0 ? (
                recentItems.enquiries.map((enquiry) => (
                  <Link
                    key={enquiry._id}
                    href="/enquiries"
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <p className="font-medium text-gray-900 text-sm truncate">
                      {enquiry.name || enquiry.email || 'Anonymous'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(enquiry.createdAt)}
                    </p>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-500 py-2">No enquiries yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
