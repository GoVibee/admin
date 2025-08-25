import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "@/redux/app/ReduxProvider";
import ProtectedRoute from "./protectedRoutes/protectedRoute";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: "GoVibe",
  description: "Find your vibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <ProtectedRoute>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </ProtectedRoute>
      </body>
    </html>
  );
}
