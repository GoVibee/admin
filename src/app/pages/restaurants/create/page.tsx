'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Home, Calendar, LayoutDashboard, Settings, BarChart2, Beer, Coffee, Users, HelpCircle, Search, Bell, Menu, X,Star ,UploadCloud,UserRound} from 'lucide-react';
import Image1 from '../../../../assets/go.png';
import { useRouter } from 'next/navigation';


// --- Reusable Components ---
const SidebarLink = ({ icon: Icon, text, active,route }: any) => (
  <a href={route} className={`flex font-plus items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${active ? 'bg-purple-100 text-purple-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>
    <Icon className="w-5 h-5" />
    <span className="flex-1">{text}</span>
  </a>
);

// --- Reusable Components ---
const FormInput = ({ label, placeholder, type = 'text', className = '' }: any) => (
    <div className={className}>
        <label className="block font-plus text-sm font-medium text-gray-700 mb-2">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            className="w-full bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500" 
        />
    </div>
);

const FormTextarea = ({ label, placeholder, rows = 3 }: any) => (
    <div>
        <label className="block font-plus text-sm font-medium text-gray-700 mb-2">{label}</label>
        <textarea 
            placeholder={placeholder} 
            rows={rows}
            className="w-full bg-gray-100/70 border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>
    </div>
);

const Checkbox = ({ label }: any) => (
    <div className="flex items-center font-plus">
        <input 
            id={label} 
            type="checkbox" 
            className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500" 
        />
        <label htmlFor={label} className="ml-3 text-sm text-gray-700">{label}</label>
    </div>
);

// --- Main Page Component ---
export default function CreateRestaurantPage() {
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
            <div  className="flex-1 flex flex-col">
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
                <main className="p-6 lg:p-8 font-plus">
                    <div className="container mx-auto max-w-4xl font-plus">
                        <h1 className="text-3xl font-bold text-gray-800 mb-8 font-plus">Create Restaurant</h1>

                        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 space-y-8">
                            {/* Basic Information */}
                            <section>
                                <FormInput label="Restaurant Name" placeholder="Enter restaurant name" />
                                <div className="mt-6">
                                    <FormTextarea label="Description" placeholder="Enter a description for the restaurant" />
                                </div>
                                <div className="mt-6">
                                    <FormInput label="Street Address" placeholder="Enter street address" />
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 mt-6">
                                    <FormInput label="City" placeholder="Enter city" className="md:col-span-1" />
                                    <FormInput label="State" placeholder="Enter state" className="md:col-span-1" />
                                    <FormInput label="Zip Code" placeholder="Enter zip code" className="md:col-span-1" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <FormInput label="Phone Number" placeholder="Enter phone number" type="tel" />
                                    <FormInput label="Email" placeholder="Enter email address" type="email" />
                                </div>
                                <div className="mt-6">
                                    <FormInput label="Cuisine Type" placeholder="Select cuisine type" />
                                </div>
                            </section>

                            <hr className="border-gray-200" />

                            {/* Operating Hours */}
                            <section>
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Operating Hours</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    <Checkbox label="Monday" />
                                    <Checkbox label="Tuesday" />
                                    <Checkbox label="Wednesday" />
                                    <Checkbox label="Thursday" />
                                    <Checkbox label="Friday" />
                                    <Checkbox label="Saturday" />
                                    <Checkbox label="Sunday" />
                                </div>
                            </section>

                            <hr className="border-gray-200" />

                            {/* Booking Availability */}
                            <section>
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Booking Availability</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormInput label="Booking Lead Time (days)" placeholder="e.g., 14" type="number" />
                                    <FormInput label="Maximum Party Size" placeholder="e.g., 8" type="number" />
                                </div>
                            </section>

                            <hr className="border-gray-200" />

                            {/* Photos */}
                            <section>
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Photos</h2>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="mt-2 text-sm text-gray-600">Drag and drop or click to upload photos of the restaurant</p>
                                    <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-300 transition-colors">
                                        Upload
                                    </button>
                                </div>
                            </section>
                            
                            <hr className="border-gray-200" />

                            {/* Basic Menu */}
                            <section>
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">Basic Menu</h2>
                                <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
                                    <FormInput label="Menu Item Name" placeholder="e.g., Classic Burger" />
                                    <FormTextarea label="Menu Item Description" placeholder="Describe the menu item" />
                                    <FormInput label="Menu Item Price" placeholder="e.g., 15.99" type="number" />
                                </div>
                                <button className="mt-4 bg-pink-100 text-pink-700 px-5 py-2.5 rounded-lg font-semibold hover:bg-pink-200 transition-colors">
                                    Add Menu Item
                                </button>
                            </section>
                        </div>

                        {/* Action Button */}
                        <div className="mt-8 flex justify-end">
                            <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-pink-700 transition-colors">
                                Create Restaurant
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}