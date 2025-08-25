"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
