"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[#E8E8E8] ">
      <div className="flex h-16 items-center justify-between w-full md:w-10/12 mx-auto px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={32} height={32} />
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button className="bg-white text-black hover:bg-[#f0f0f0fd]">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
