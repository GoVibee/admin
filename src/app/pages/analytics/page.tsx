'use client';

import React, { useState } from 'react';
import { Home, Calendar, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import image1 from '../../../assets/go.png';
// --- Register Chart.js components ---
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

// --- Mock Data ---
const mostSearchedVenues = [
    { name: 'The Grand Bistro', searches: 500 },
    { name: 'The Cozy Corner Cafe', searches: 450 },
    { name: 'The Night Owl Lounge', searches: 400 },
    { name: 'The Urban Eatery', searches: 350 },
    { name: 'The Sunset Terrace', searches: 300 },
];

// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

// --- Chart Components ---
const BookingTrendsChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Bookings',
            data: [65, 59, 80, 81, 56, 95, 70],
            fill: false,
            borderColor: '#8B5CF6',
            tension: 0.4,
            pointRadius: 0,
        }]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, border: { display: false } },
            y: { display: false }
        }
    };
    return <Line options={options} data={data} />;
};

const RevenueTrendsChart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Revenue',
            data: [3, 5, 6, 4, 7, 5, 6],
            backgroundColor: '#E5E7EB',
            borderRadius: 4,
            barThickness: 12,
        }]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, border: { display: false } },
            y: { display: false }
        }
    };
    return <Bar options={options} data={data} />;
};

const PeakBookingTimesChart = () => {
    const data = {
        labels: ['6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'],
        datasets: [{
            label: 'Bookings',
            data: [80, 60, 95, 30, 40, 35, 70],
            backgroundColor: '#F3E8FF',
            borderColor: '#C4B5FD',
            borderWidth: 1,
            borderRadius: 4,
        }]
    };
    const options: any = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { grid: { display: false }, border: { display: false } }
        }
    };
    return <Bar options={options} data={data} />;
};


// --- Main Dashboard Component ---
export default function AnalyticsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarNavItems = [
    { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'},
    { icon: Calendar, text: 'Bookings',route: '/pages/bookings' },
    { icon: Home, text: 'Restaurants',route: '/pages/restaurants' },
    { icon: Settings, text: 'Settings',route: '/pages/settings' },
    { icon: BarChart2, text: 'Analytics', active: true,route: '/pages/analytics' },
    { icon: Beer, text: 'Bars and Clubs',route: '/pages/bars'},
    { icon: Coffee, text: 'Cafes',route: '/pages/cafes' },
    { icon: Users, text: 'Users',route: '/pages/users' },
  ];

  return (
    <div className=" lg:flex min-h-screen bg-gray-50 w-full">
      {/* --- Sidebar --- */}
       <aside className={`fixed inset-y-0 left-0 bg-white shadow-sm z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
        <div className="p-6 flex items-center space-x-2 border-b">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-purple-600">Go</span>Vibe
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {sidebarNavItems.map(item => (
            <SidebarLink key={item.text} icon={item.icon} text={item.text} active={item.active} route={item.route}/>
          ))}
        </nav>
      </aside>
      
      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col">
        {/* --- Top Header --- */}
       <header className="flex justify-between items-center mb-8">
             <div className="flex items-center space-x-4">
                            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-600">
                                {isSidebarOpen ? <X/> : <Menu />}
                            </button>
                         </div>
              {/* <div className="w-40"/> */}
            <div className="flex items-center gap-6">
              <button className="relative">
                <Bell size={24} className="text-gray-500" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </header>

        {/* --- Page Content --- */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Analytics</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Booking Trends */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 mb-1">Booking Trends</h2>
                <p className="text-3xl font-bold text-gray-900">1,234</p>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="w-4 h-4" />
                  <span>12%</span>
                  <span className="text-gray-500 ml-2">Last 30 Days</span>
                </div>
                <div className="h-40 mt-4"><BookingTrendsChart /></div>
              </div>

              {/* Revenue Trends */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 mb-1">Revenue Trends</h2>
                <p className="text-3xl font-bold text-gray-900">$5,678</p>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="w-4 h-4" />
                  <span>8%</span>
                  <span className="text-gray-500 ml-2">Last 30 Days</span>
                </div>
                <div className="h-40 mt-4"><RevenueTrendsChart /></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {/* Peak Booking Times */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 mb-1">Peak Booking Times</h2>
                    <p className="text-3xl font-bold text-gray-900">100</p>
                    <div className="flex items-center text-sm text-green-600 mt-1">
                        <ArrowUp className="w-4 h-4" />
                        <span>5%</span>
                        <span className="text-gray-500 ml-2">This Month</span>
                    </div>
                    <div className="h-64 mt-4"><PeakBookingTimesChart /></div>
                </div>

                {/* Most Searched Venues */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Most Searched Venues</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-semibold text-gray-500">
                            <span>Venue</span>
                            <span>Searches</span>
                        </div>
                        {mostSearchedVenues.map(venue => (
                            <div key={venue.name} className="flex justify-between items-center py-2 border-b last:border-b-0">
                                <span className="text-gray-800">{venue.name}</span>
                                <span className="text-gray-600 font-medium">{venue.searches}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
