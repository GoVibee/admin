'use client';

import React, { useState } from 'react';
import { Home, Calendar, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Image1 from '../../../assets/go.png'

// --- Mock Data ---
const customers = [
  { id: 1, name: 'Sophia Carter', email: 'sophia.carter@email.com', joinDate: '2023-01-15', lastBooking: '2024-03-20', role: 'User' },
  { id: 2, name: 'Ethan Bennett', email: 'ethan.bennett@email.com', joinDate: '2022-11-08', lastBooking: '2024-02-28', role: 'Admin' },
  { id: 3, name: 'Olivia Hayes', email: 'olivia.hayes@email.com', joinDate: '2023-05-22', lastBooking: '2024-03-10', role: 'User' },
  { id: 4, name: 'Liam Foster', email: 'liam.foster@email.com', joinDate: '2022-09-03', lastBooking: '2024-01-15', role: 'User' },
  { id: 5, name: 'Ava Morgan', email: 'ava.morgan@email.com', joinDate: '2023-02-10', lastBooking: '2024-03-25', role: 'User' },
  { id: 6, name: 'Noah Parker', email: 'noah.parker@email.com', joinDate: '2022-12-18', lastBooking: '2024-02-10', role: 'User' },
  { id: 7, name: 'Isabella Reed', email: 'isabella.reed@email.com', joinDate: '2023-04-05', lastBooking: '2024-03-05', role: 'User' },
];

// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

const RoleBadge = ({ role }: any) => (
  <span className={`px-3 py-1 text-sm font-medium rounded-full ${role === 'Admin' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'}`}>
    {role}
  </span>
);

// --- Main Dashboard Component ---
export default function CustomersPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   const sidebarNavItems = [
             { icon: LayoutDashboard, text: 'Dashboard',route: '/pages/dashboard'  },
             { icon: Calendar, text: 'Bookings',route: '/pages/bookings' },
             { icon: Home, text: 'Restaurants',route: '/pages/restaurants'},
             { icon: BarChart2, text: 'Analytics',route: '/pages/analytics' },
             { icon: Beer, text: 'Bars and Clubs',route: '/pages/bars' },
             { icon: Coffee, text: 'Cafes',route: '/pages/cafes' },
             { icon: Users, text: 'Users',route: '/pages/users',active: true },
             { icon: Settings, text: 'Settings',route: '/pages/settings'},
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
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Customers</h1>
              <button className="bg-purple-100 text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-200 transition-colors">
                Add Customer
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full bg-white border border-gray-200 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-xl shadow-md overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="p-4 font-semibold text-gray-600">Name</th>
                    <th className="p-4 font-semibold text-gray-600 hidden md:table-cell">Email</th>
                    <th className="p-4 font-semibold text-gray-600 hidden lg:table-cell">Join Date</th>
                    <th className="p-4 font-semibold text-gray-600 hidden lg:table-cell">Last Booking</th>
                    <th className="p-4 font-semibold text-gray-600">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                      <td className="p-4 font-medium text-gray-800">{customer.name}</td>
                      <td className="p-4 text-gray-600 hidden md:table-cell">{customer.email}</td>
                      <td className="p-4 text-gray-600 hidden lg:table-cell">{customer.joinDate}</td>
                      <td className="p-4 text-gray-600 hidden lg:table-cell">{customer.lastBooking}</td>
                      <td className="p-4">
                        <RoleBadge role={customer.role} />
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
