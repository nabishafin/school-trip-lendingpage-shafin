"use client";

import authlogo from "@/public/authlogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 max-w-5xl w-full">
        {/* Left Side - Backpack Icon Image */}
        <div className="flex-shrink-0">
          <Image src={authlogo} alt="Backpack Icon" priority />
        </div>

        {/* Right Side - Sign In Form */}
        <div className="w-full max-w-md space-y-8">
          {/* Header with Back Link */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 flex items-center gap-3"
            >
              <ArrowLeft className="w-6 h-6" />
              <h2 className="text-3xl font-extrabold text-gray-900">Sign In</h2>
            </Link>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-600 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Checkbox and Forgot Password */}
          <div className="flex items-center justify-between text-base">
            <div className="flex items-center space-x-3">
              <Checkbox id="remember-me" />
              <label
                htmlFor="remember-me"
                className="text-gray-800 select-none"
              >
                Remember me
              </label>
            </div>

            <Link
              href="#"
              className="text-red-600 hover:underline font-semibold"
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-lg font-semibold text-lg">
            Sign In
          </Button>

          {/* Sign Up Link */}
          <div className="text-center text-lg text-gray-800 ">
            Don't have an account?{" "}
            <Link
              href="#"
              className="text-red-600 hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
