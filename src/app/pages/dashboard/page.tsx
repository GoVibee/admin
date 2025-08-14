"use client"; // This is required for Framer Motion and other client-side hooks

import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Home, Calendar, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X,UserRound,CornerDownRight } from 'lucide-react';
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import StatCard from "../../components/pages/dashboard/StatCard";
import BookingsOverview from "../../components/pages/bookings/bookingsOverview";
import RecentBookingsTable from "../../components/pages/bookings/RecentBookingsTable";
import PopularVenuesTable from "../../components/pages/venues/PopularVenuesTable";
import { useRouter } from "next/navigation";

// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);


export default function HomePage() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const router = useRouter();

    const sidebarNavItems = [
      { icon: LayoutDashboard, text: 'Dashboard', active: true,route: '/pages/dashboard'  },
      { icon: Calendar, text: 'Bookings',route: '/pages/bookings' },
      { icon: Home, text: 'Restaurants',route: '/pages/restaurants'},
      { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
      { icon: Beer, text: 'Bars and Clubs',route: '/pages/bars' },
      { icon: Coffee, text: 'Cafes',route: '/pages/cafes' },
      { icon: Users, text: 'Users',route: '/pages/users' },
      { icon: Settings, text: 'Settings',route: '/pages/settings'},
    ];
  return (
    <div className=" lg:flex min-h-screen bg-gray-50 w-full font-plus">
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
        <div  className="p-4 border-t">
          <CornerDownRight size={24} color="#000"/> 
          <button> Logout </button>
        </div>
      </aside>
      
      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
     <main className="flex-1 p-6 lg:p-10">
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
       <div onClick={() => {
                       router.push('/pages/settings')
                      }} className='cursor-pointer'>
                       <UserRound size={20} color='#000'/>
                      </div>
      </div>
    </header>

        <div className="space-y-8">
          {/* Stat Cards Section */}
          <section
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div><StatCard title="Total Restaurants" value="1,250" /></div>
            <div><StatCard title="Bookings Today" value="320" /></div>
            <div><StatCard title="Revenue" value="$15,000" /></div>
            <div><StatCard title="Active Users" value="850" /></div>
          </section>

          {/* This motion.div will animate its children when they enter the viewport */}
          <div>
            <BookingsOverview />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <RecentBookingsTable />
            </div>
            <div>
              <PopularVenuesTable />
            </div>
          </div>
        </div>
        
        <footer className="text-center text-sm text-gray-500 mt-10">
            © 2024 GoVibe. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
