import { Backpack } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-12 ">
      {/* Blue line at the top */}
      <div className="h-1 bg-blue-500 w-full absolute top-0 left-0" />
      <div className=" w-full md:w-10/12 mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - App Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Backpack className="w-12 h-12 text-gray-800" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              A school trip app helps students, teachers, and parents organize,
              track, and manage school trips with features like event schedules,
              notifications, location maps, permissions, and real-time updates
              for smooth experiences.
            </p>
          </div>

          {/* Middle Section - Unity Pages */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Unity Pages</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                className="text-gray-600 hover:text-gray-900"
                href="/aboutus"
              >
                About Us
              </Link>
              <Link
                className="text-gray-600 hover:text-gray-900"
                href="/privacypolicy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-gray-600 hover:text-gray-900"
                href="/termscondition"
              >
                Terms & Condition
              </Link>
            </nav>
          </div>

          {/* Right Section - Get in Touch */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Get in Touch
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                className="text-gray-600 hover:text-gray-900"
                href="mailto:zodack@gmail.com"
              >
                zodack@gmail.com
              </a>
              <a
                className="text-gray-600 hover:text-gray-900"
                href="tel:(009)56587890"
              >
                (009)56587890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
