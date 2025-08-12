"use client";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import { motion } from 'framer-motion';
import Badge from '../../components/ui/Badge';
import FilterDropdown from '../../components/ui/FilterDropdown';
import React, { useState } from 'react';
import { Home, Calendar, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X } from 'lucide-react';

const bookingsData = [
  { customer: 'Sophia Carter', venue: 'The Urban Bistro', venueDetails: '', date: '2024-07-20', time: '19:00', status: 'Confirmed' as const },
  { customer: 'Ethan Bennett', venue: 'The Cozy Corner', venueDetails: 'Cafe', date: '2024-07-21', time: '10:00', status: 'Pending' as const },
  { customer: 'Olivia Hayes', venue: 'The Night Owl Lounge', venueDetails: '', date: '2024-07-22', time: '22:00', status: 'Confirmed' as const },
  { customer: 'Liam Foster', venue: 'The Seaside Grill', venueDetails: '', date: '2024-07-23', time: '18:30', status: 'Cancelled' as const },
  { customer: 'Ava Morgan', venue: 'The City Lights Bar', venueDetails: '', date: '2024-07-24', time: '21:00', status: 'Confirmed' as const },
];

const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

export default function HomePage() {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const sidebarNavItems = [
                  { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'  },
                  { icon: Calendar, text: 'Bookings',route: '/pages/bookings',active: true   },
                  { icon: Home, text: 'Restaurants',route: '/pages/restaurants'},
                  { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
                  { icon: Beer, text: 'Bars and Clubs',route: '/pages/bars' },
                  { icon: Coffee, text: 'Cafes',route: '/pages/cafes'},
                  { icon: Users, text: 'Users',route: '/pages/users'},
                  { icon: Settings, text: 'Settings',route: '/pages/settings'},
                ];

  return (
    <div className="lg:flex min-h-screen bg-gray-50 w-full">
     <aside className={`fixed inset-y-0 left-0 bg-white shadow-sm z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
             <div className="p-6 flex items-center space-x-2 border-b">
               <div className="text-2xl font-bold text-gray-800">
                 <span className="text-purple-600">Go</span>Vibe
               </div>
             </div>
             <nav className="flex-1 p-4 space-y-2">
               {sidebarNavItems.map(item => (
                 <SidebarLink key={item.text} icon={item.icon} text={item.text} active={item.active} route={item.route} />
               ))}
             </nav>
             <div className="p-4 border-t">
               <SidebarLink icon={HelpCircle} text="Help and Docs" />
             </div>
           </aside>
           
           {/* Backdrop for mobile sidebar */}
           {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className="flex-1 flex flex-col">
         <header className="flex justify-between items-center mb-8 w-[90%] mx-auto lg:w-full mt-5">
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
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div >
          {/* Header Section */}
          <div  className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
            <button className="bg-violet-600 text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-violet-700 transition-colors self-start md:self-auto">
              New Booking
            </button>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <FilterDropdown label="Venue" />
                <FilterDropdown label="Date" />
                <FilterDropdown label="Status" />
              </div>
            </div>
          </div>

          {/* Bookings Table Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                {/* Desktop Table Header */}
                <thead className="bg-gray-50 border-b border-gray-200 hidden md:table-header-group">
                  <tr>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-600">Customer</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-600">Venue</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-600">Time</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-3 text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookingsData.map((booking, index) => (
                    // On mobile, each row is a card. On desktop, it's a standard table row.
                    <tr key={index} className="block md:table-row p-4 md:p-0 border-b md:border-b-0">
                      {/* Mobile Label + Data */}
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Customer:</span>
                        <span className="font-medium text-gray-800">{booking.customer}</span>
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Venue:</span>
                        <div>
                          <div className="text-gray-800">{booking.venue}</div>
                          {booking.venueDetails && <div className="text-xs text-gray-500">{booking.venueDetails}</div>}
                        </div>
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap text-gray-600">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Date:</span>
                        {booking.date}
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap text-gray-600">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Time:</span>
                        {booking.time}
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Status:</span>
                        <Badge status={booking.status} />
                      </td>
                      <td className="flex justify-between items-center md:table-cell px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <span className="font-semibold text-gray-600 md:hidden mr-2">Actions:</span>
                        <a href="#" className="text-violet-600 hover:text-violet-800">
                          View | Edit | Cancel
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
