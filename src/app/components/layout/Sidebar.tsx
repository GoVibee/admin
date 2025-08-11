import {
  LayoutDashboard,
  Building,
  GlassWater,
  Coffee,
  Calendar,
  Users,
  BarChart,
  Settings,
  Waves,
} from "lucide-react";
import logo from '../../../assets/go.png';
import Image from "next/image";


const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true,route: '/pages/dashboard' },
  { name: "Restaurants", icon: Building, active: false,route: '/pages/restaurants' },
  { name: "Bars & Clubs", icon: GlassWater, active: false,route: '/pages/bars' },
  { name: "Cafes", icon: Coffee, active: false,route: '/pages/cafes' },
  { name: "Bookings", icon: Calendar, active: false,route: '/pages/bookings' },
  { name: "Users", icon: Users, active: false,route: '/pages/users' },
  { name: "Analytics", icon: BarChart, active: false,route: '/pages/analytics' },
  { name: "Settings", icon: Settings, active: false,route: '/pages/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-white p-6 hidden lg:block font-plus">
       <div className="flex items-center justify-center gap-2 mb-12">
        <div className="w-10 h-10">
          <Image src={logo} alt="logo-image" className="w-full h-full object-cover" priority />
        </div>
        </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <a
                href={item.route}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-violet-100 text-violet-700 font-semibold"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <item.icon className="mr-3" size={20} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}