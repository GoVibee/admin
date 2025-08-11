"use client"; // This is required for Framer Motion and other client-side hooks

import { motion } from "framer-motion";

import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";
import StatCard from "../../components/pages/dashboard/StatCard";
import BookingsOverview from "../../components/pages/bookings/bookingsOverview";
import RecentBookingsTable from "../../components/pages/bookings/RecentBookingsTable";
import PopularVenuesTable from "../../components/pages/venues/PopularVenuesTable";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
     <main className="flex-1 p-6 lg:p-10">
        <Topbar />

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
