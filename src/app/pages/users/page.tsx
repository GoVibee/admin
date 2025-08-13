'use client';

import React, { useState } from 'react';
import { Home, Calendar, LayoutDashboard,UserRound, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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

// --- Customer Detail Modal Component ---
const CustomerDetailModal = ({ booking, onClose }: any) => {
    if (!booking) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Customer Details</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Customer:</span>
                        <span className="text-gray-800">{booking.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Email:</span>
                        <span className="text-gray-800">{booking.email}</span>
                    </div>
                    {/* <div className="flex justify-between">
                        <span className="font-semibold text-gray-600">Date & Time:</span>
                        <span className="text-gray-800">{booking.date} at {booking.time}</span>
                    </div> */}
                </div>
                <div className="p-6 bg-gray-50 rounded-b-xl flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                    <button onClick={onClose} className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                        Close
                    </button>
                    <button className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-red-100 text-red-700 hover:bg-red-200 transition-colors">
                        Delete
                    </button>
                    {/* <button className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                        Confirm
                    </button> */}
                </div>
            </motion.div>
        </div>
    );
};

const DeleteModal = ({ onClose }: any) => {

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 }
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="p-6 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-800">Confirm </h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>
                    </div>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                        <span className="font-semibold text-gray-600 items-center">Are you sure you want to delete user</span>
                    </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-xl flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                    <button onClick={onClose} className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                        Close
                    </button>
                    <button className="px-4 cursor-pointer py-2 rounded-lg font-semibold bg-green-100 text-green-700 hover:bg-green-200 transition-colors">
                        Confirm
                    </button>
                </div>
            </motion.div>
        </div>
    );
};


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
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [d,setD] = useState<any>();
  const router = useRouter();

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
             <header className="flex justify-between items-center w-[90%] mx-auto mt-5 mb-8">
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
              <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Customers</h1>
              {/* <button className="bg-purple-100 cursor-pointer text-purple-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-purple-200 transition-colors">
                Add Customer
              </button> */}
              <div className='w-40'/>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full text-black bg-white border border-gray-200 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    <th className="p-4 font-semibold text-gray-600">Actions</th>
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
                        <div className="flex items-center space-x-3 text-sm font-medium text-gray-500">
                             <button onClick={() => setSelectedBooking(customer)} className="text-violet-800 cursor-pointer">
                                View
                            </button>
                         <span className="text-black mx-1"> | </span>
                        <button onClick={() => setD(true)} className="text-red-700 cursor-pointer">
                                <h3>Delete</h3>
                            </button>
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
       <AnimatePresence>
              {selectedBooking && (
                  <CustomerDetailModal booking={selectedBooking} onClose={() => setSelectedBooking(null)} />
              )}
            </AnimatePresence>
            <AnimatePresence>
                          {d && (
                              <DeleteModal  onClose={() => setD(false)} />
                          )}
                        </AnimatePresence>
    </div>
  );
}
