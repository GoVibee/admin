

import { Search, Bell,X,Menu } from "lucide-react";

export default function Header({setIsSidebarOpen,isSidebarOpen,route}: any) {
  return (
    <header className="flex justify-between items-center mb-8">
       <div className="flex items-center space-x-4">
                      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden text-gray-600">
                          {isSidebarOpen ? <X/> : <Menu />}
                      </button>
                   </div>
        {/* <div className="w-40"/> */}
      <div className="flex items-center gap-6">
        {
          route == '/pages/dashboard' ? <></> : <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-white w-64 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>
        }
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
  );
}