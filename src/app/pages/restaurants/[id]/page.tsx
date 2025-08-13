'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Home, Calendar, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X,Star } from 'lucide-react';
import Image1 from '../../../../assets/go.png';

// --- Mock Data ---
const operatingHours = [
    { day: 'Monday', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Tuesday', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Wednesday', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Thursday', open: '11:00 AM', close: '11:00 PM' },
    { day: 'Friday', open: '11:00 AM', close: '12:00 AM' },
    { day: 'Saturday', open: '10:00 AM', close: '12:00 AM' },
    { day: 'Sunday', open: '10:00 AM', close: '9:00 PM' },
];

const menuItems = [
    { category: 'Appetizers', name: 'Crispy Calamari', description: 'Lightly fried calamari served with a zesty marinara sauce.', price: '$14.00', actions: 'Edit' },
    { category: 'Main Course', name: 'Grilled Salmon', description: 'Salmon fillet grilled to perfection, served with asparagus.', price: '$26.00', actions: 'Edit' },
    { category: 'Desserts', name: 'Cheesecake', description: 'Classic New York cheesecake with a raspberry drizzle.', price: '$9.00', actions: 'Edit' },
    { category: 'Desserts', name: 'Molten Lava Cake', description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.', price: '$10.00', actions: 'Edit' },
];


// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

const FormInput = ({ label, placeholder, type = 'text' }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
        <input type={type} placeholder={placeholder} className="w-full bg-gray-100 border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
    </div>
);

const SectionCard = ({ title, children }: any) => (
    <div className="bg-white font-plus p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
        {children}
    </div>
);


// --- Main Page Component ---
export default function VenueDetailsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <aside className={`fixed inset-y-0 font-plus left-0 bg-white shadow-sm z-50 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col`}>
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
                <Image
                  src={Image1}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            </header>

        <main className="flex-1 p-6 lg:p-8">
          <div className="container mx-auto space-y-8">
            {/* Venue Details Form */}
            <SectionCard title="Venue Details">
                <div className="space-y-4">
                    <FormInput label="Venue Name" placeholder="e.g., The Golden Spoon" />
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                        <textarea placeholder="A short description of the venue..." rows={4} className="w-full bg-gray-100 border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormInput label="Address" placeholder="123 Main St, Anytown" />
                        <FormInput label="Phone Number" placeholder="(555) 123-4567" type="tel" />
                    </div>
                    <FormInput label="Cuisine Type" placeholder="e.g., Italian, Mexican, etc." />
                </div>
            </SectionCard>

            {/* Operating Hours */}
            <SectionCard title="Operating Hours">
                <div className="space-y-3">
                    {operatingHours.map(item => (
                        <div key={item.day} className="grid grid-cols-3 items-center gap-4 p-2 rounded-md hover:bg-gray-50">
                            <span className="font-medium text-gray-700">{item.day}</span>
                            <span className="text-gray-600 text-center">{item.open}</span>
                            <span className="text-gray-600 text-center">{item.close}</span>
                        </div>
                    ))}
                </div>
            </SectionCard>

            {/* Photos */}
            <SectionCard title="Photos">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Image src={Image1} alt="Venue interior" width={400} height={300} className="rounded-lg object-cover aspect-video" />
                    <Image src={Image1} alt="Food plate" width={400} height={300} className="rounded-lg object-cover aspect-video" />
                    <Image src={Image1} alt="Venue exterior" width={400} height={300} className="rounded-lg object-cover aspect-video" />
                </div>
            </SectionCard>
            
            {/* Reviews */}
            <SectionCard title="Reviews">
                 <div className="space-y-6">
                    <div className="flex space-x-4">
                        <Image src={Image1} alt="Reviewer" width={40} height={40} className="rounded-full" />
                        <div>
                            <h4 className="font-semibold">Liam Foster</h4>
                            <div className="flex items-center my-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="text-gray-600">The Golden Spoon exceeded expectations! The ambiance was incredible, and the service was impeccable. A must-visit.</p>
                        </div>
                    </div>
                     <div className="flex space-x-4">
                        <Image src={Image1} alt="Reviewer" width={40} height={40} className="rounded-full" />
                        <div>
                            <h4 className="font-semibold">Sophia Carter</h4>
                            <div className="flex items-center my-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="text-gray-600">Amazing experience overall. The food was delicious and the cocktails were top-notch. Will definitely be back!</p>
                        </div>
                    </div>
                 </div>
            </SectionCard>

            {/* Menu */}
            <SectionCard title="Menu">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="p-3 font-semibold text-gray-600">Category</th>
                                <th className="p-3 font-semibold text-gray-600">Main Items</th>
                                <th className="p-3 font-semibold text-gray-600 hidden md:table-cell">Description</th>
                                <th className="p-3 font-semibold text-gray-600">Price</th>
                                <th className="p-3 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menuItems.map(item => (
                                <tr key={item.name} className="border-b border-gray-200 last:border-b-0">
                                    <td className="p-3 text-gray-600">{item.category}</td>
                                    <td className="p-3 font-medium text-gray-800">{item.name}</td>
                                    <td className="p-3 text-gray-600 hidden md:table-cell">{item.description}</td>
                                    <td className="p-3 text-gray-600">{item.price}</td>
                                    <td className="p-3"><a href="#" className="text-purple-600 font-semibold hover:underline">{item.actions}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6">
                    <button className="w-full text-purple-600 font-semibold border-2 border-purple-200 rounded-lg py-2.5 hover:bg-purple-50 transition-colors">
                        Add Menu Item
                    </button>
                </div>
            </SectionCard>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
                <button className="bg-white text-gray-700 px-6 py-2.5 rounded-lg font-semibold border border-gray-300 hover:bg-gray-100 transition-colors">Cancel</button>
                <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors">Save</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
