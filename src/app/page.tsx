'use client';

import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/go.png';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Oval } from 'react-loader-spinner';
import { useAuth } from '@/hooks/useAuth';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const {Login} = useAuth();
  const [formdata,setFormdata] = useState({
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const data = await Login(formdata)
    if(data){
      setLoading(false);
      router.push('/pages/dashboard')
    }
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center lg:justify-center bg-white p-4">
      <div className="w-full max-w-sm">
        {/* Logo Header */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Image src={logo} alt="logo-image" className="w-32 h-32" priority />
        </div>

        {/* Sign-in Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Email Input */}
         <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            required
            value={formdata.email}
            onChange={(e) => setFormdata({...formdata,email: e.target.value })}
            className="peer block w-full font-plus px-4 py-3 border border-gray-300 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-[#3B0A45] focus:border-transparent 
                      text-gray-900"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200 ease-in-out 
                      peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                      peer-placeholder-shown:text-gray-500
                      peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-white peer-focus:px-1
                      peer-focus:text-[#3B0A45]
                      peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder=" "
            required
            value={formdata.password}
            onChange={(e) => setFormdata({...formdata,password:e.target.value})}
            className="peer block w-full font-plus px-4 py-3 border border-gray-300 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-[#3B0A45] focus:border-transparent 
                      text-gray-900"
          />
          <label
            htmlFor="password"
            className="absolute left-4 top-3 text-gray-500 transition-all duration-200 ease-in-out
                      peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                      peer-placeholder-shown:text-gray-500
                      peer-focus:top-[-10px] peer-focus:text-sm peer-focus:bg-white peer-focus:px-1
                      peer-focus:text-[#3B0A45]
                      peer-not-placeholder-shown:top-[-10px] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1"
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#3B0A45] text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B0A45] transition-colors duration-300 font-plus"
          >
             {loading ? (
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                              <Oval
                                                visible={true}
                                                height="30"
                                                width="30"
                                                color="#ffffff"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                              />
                                            </div>
                                          ) : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
