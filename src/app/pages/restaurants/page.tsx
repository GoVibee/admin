'use client';

import React, { useState } from 'react';
import { Home, Calendar,UserRound, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X } from 'lucide-react';
import Image from 'next/image';
import image1 from '../../../assets/go.png';
import { useRouter } from 'next/navigation';

// --- Mock Data ---
const venues = [
  { id: 1, name: 'The Golden Spoon', image: image1, rating: 4.5, status: 'Active' },
  { id: 2, name: 'The Velvet Lounge', image: image1, rating: 4.8, status: 'Active' },
  { id: 3, name: 'The Cozy Corner', image: image1, rating: 4.2, status: 'Inactive' },
  { id: 4, name: 'The Electric Beat', image: image1, rating: 4.9, status: 'Active' },
  { id: 5, name: 'The Rustic Table', image: image1, rating: 4.6, status: 'Active' },
];

// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

const StatusBadge = ({ status }: any) => (
  <span className={`px-3 py-1 text-sm font-medium rounded-full ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
    {status}
  </span>
);

// --- Main Dashboard Component ---
export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const sidebarNavItems = [
       { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'  },
       { icon: Calendar, text: 'Bookings',route: '/pages/bookings' },
       { icon: Home, text: 'Restaurants',route: '/pages/restaurants', active: true},
       { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
       { icon: Beer, text: 'Bars and Clubs',route: '/pages/bars' },
       { icon: Coffee, text: 'Cafes',route: '/pages/cafes' },
       { icon: Users, text: 'Users',route: '/pages/users' },
       { icon: Settings, text: 'Settings',route: '/pages/settings'},
     ];

  return (
    <div className="lg:flex min-h-screen bg-gray-50 w-full font-plus">
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
          <header className="flex justify-between items-center mb-8 w-[90%] mx-auto mt-5">
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
        
        {/* --- Page Content --- */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="container mx-auto">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Restaurants & Venues</h1>
              <button onClick={() => {
                router.push('/pages/restaurants/create')
              }} className="bg-purple-600 cursor-pointer text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition-colors">
                Add Venue
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by venue name..."
                className="w-full text-black bg-white border border-gray-200 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Venues Table */}
            <div className="bg-white rounded-xl shadow-md overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-200">
                  <tr>
                    <th className="p-4 font-semibold text-gray-600">Venue</th>
                    <th className="p-4 font-semibold text-gray-600 hidden md:table-cell">Rating</th>
                    <th className="p-4 font-semibold text-gray-600">Status</th>
                    <th className="p-4 font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {venues.map(venue => (
                    <tr key={venue.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-4">
                          <Image src={venue.image} alt={venue.name} width={40} height={40} className="rounded-full" />
                          <span className="font-medium text-gray-800">{venue.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600 hidden md:table-cell">{venue.rating}</td>
                      <td className="p-4">
                        <StatusBadge status={venue.status} />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-3 text-sm font-medium text-gray-500">
                          <a  href={`/pages/restaurants/edit`} className="hover:text-purple-600">Edit</a>
                          <span className="text-gray-300">|</span>
                          <a href="#" className="hover:text-red-700">Disable</a>
                          <span className="text-gray-300">|</span>
                          <a href={`/pages/restaurants/${venue.id}`} className="hover:text-purple-600">View Profile</a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
