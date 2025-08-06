"use client";
import authlogo from "@/public/authlogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordForm() {
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
        {/* Right Side - Forgot Password Form */}
        <div className="w-full max-w-md space-y-8">
          {/* Header with Back Link */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/sign-in" // Assuming a sign-in page exists at /sign-in
              className="text-gray-600 hover:text-gray-900 flex items-center gap-3"
            >
              <ArrowLeft className="w-6 h-6" />
              <h2 className="text-3xl font-extrabold text-gray-900">
                Forgot Password
              </h2>
            </Link>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Please enter your email address to reset your password
          </p>
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="email"
                placeholder="E-mail"
                className="pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
              />
            </div>
          </div>
          {/* Send OTP Button */}
          <Button className="w-full bg-[#2C6E3E] hover:bg-green-800 text-white py-4 rounded-lg font-semibold text-lg">
            Send OTP
          </Button>
          {/* Sign In Link */}
          <div className="text-center text-lg text-gray-800 ">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-red-600 hover:underline font-semibold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
