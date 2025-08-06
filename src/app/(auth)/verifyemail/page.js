"use client";
import authlogo from "@/public/authlogo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function VerifyEmailForm() {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

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
        {/* Right Side - Verify Email Form */}
        <div className="w-full max-w-md space-y-8">
          {/* Header with Back Link */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/forgot-password" // Assuming a forgot password page exists
              className="text-gray-600 hover:text-gray-900 flex items-center gap-3"
            >
              <ArrowLeft className="w-6 h-6" />
              <h2 className="text-3xl font-extrabold text-gray-900">
                Verify Email
              </h2>
            </Link>
          </div>
          <p className="text-gray-600 text-lg mb-6 text-center">
            Please enter the otp we have sent you in your email.
          </p>
          {/* OTP Inputs */}
          <div className="flex justify-center gap-4">
            {otp.map((data, index) => (
              <Input
                key={index}
                type="text"
                maxLength={1}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-14 h-14 text-center text-2xl font-bold border border-gray-300 rounded-full focus:ring-green-500 focus:border-green-500"
              />
            ))}
          </div>
          {/* Verify Button */}
          <Button className="w-full bg-[#2C6E3E] hover:bg-green-800 text-white py-4 rounded-lg font-semibold text-lg">
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
}
