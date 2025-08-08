'use client'

import Link from 'next/link';
import { Waves, Eye, EyeOff  } from 'lucide-react';
import logo from '../assets/go.png';
import Image from 'next/image';
import {useState} from 'react'

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
  };
  return (
    <div className="min-h-screen flex flex-col items-center lg:justify-center bg-white p-4">
      <div className="w-full max-w-sm">
        {/* Logo Header */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Image 
            src={logo}
            alt='logo-image'
            className='w-32 h-32'
            priority
          />
        </div>

        {/* Sign-in Form */}
        <form className="space-y-8">
          {/* Email Input with Floating Label */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              // The placeholder needs a space to make the CSS selector work
              placeholder=" "
              className="peer block w-full font-plus px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45] focus:border-transparent text-gray-900"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-500 transition-all duration-200 ease-in-out 
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                         peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-white peer-focus:px-1
                         peer-[:not(:placeholder-shown)]:top-[-10px] 
                         peer-[:not(:placeholder-shown)]:text-sm 
                         peer-[:not(:placeholder-shown)]:bg-white 
                         peer-[:not(:placeholder-shown)]:px-1"
            >
              Email
            </label>
          </div>

          {/* Password Input with Floating Label */}
         {/* Password Input with Toggleable Visibility */}
      <div className="relative">
        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder=" "
          className="peer block w-full font-plus px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B0A45] focus:border-transparent text-gray-900"
        />
        <label
          htmlFor="password"
          className="absolute left-4 top-3 text-gray-500 transition-all duration-200 ease-in-out
                     peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                     peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-white peer-focus:px-1
                     peer-[:not(:placeholder-shown)]:top-[-10px]
                     peer-[:not(:placeholder-shown)]:text-sm
                     peer-[:not(:placeholder-shown)]:bg-white
                     peer-[:not(:placeholder-shown)]:px-1"
        >
          Password
        </label>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer focus:outline-none"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
          
          {/* <div className="text-right -mt-4">
             <Link href="#" className="text-sm font-medium text-gray-600 hover:text-pink-600">
                Forgot password?
             </Link>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#3B0A45] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B0A45] transition-colors duration-300 font-plus"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}