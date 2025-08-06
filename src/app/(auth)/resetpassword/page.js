"use client";
import authlogo from "@/public/authlogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ResetPasswordForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 max-w-5xl w-full">
        {/* Left Side - Backpack Icon Image */}
        <div className="flex-shrink-0">
          <Image
            src={authlogo || "/placeholder.svg"}
            alt="Backpack Icon"
            priority
          />
        </div>
        {/* Right Side - Reset Password Form */}
        <div className="w-full max-w-md space-y-8">
          {/* Header with Back Link */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/verify-email" // Assuming a verify email page exists
              className="text-gray-600 hover:text-gray-900 flex items-center gap-3"
            >
              <ArrowLeft className="w-6 h-6" />
              <h2 className="text-3xl font-extrabold text-gray-900">
                Reset Password
              </h2>
            </Link>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Your password must be 8-10 character long.
          </p>
          {/* Password Input with Toggle */}
          <div className="space-y-6">
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
            {/* Re-enter Password Input with Toggle */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter Password"
                className="pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-600 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
          {/* Confirm Button */}
          <Button className="w-full bg-[#2C6E3E] hover:bg-green-800 text-white py-4 rounded-lg font-semibold text-lg">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
