import Image from "next/image";
import { Button } from "@/components/ui/button";
import phoneMockup from "../../public/bannericon.png";
import GplayIcon from "../../public/playg.png";
import AplayIcon from "../../public/playa.png";

export default function Banner() {
  return (
    <section className=" py-12 px-10 md:py-20">
      <div className="w-full md:w-10/12 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading with Blue Background */}
            <div className="">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold ">
                Organize and Manage School Trips with Ease and Convenience
              </h1>
            </div>

            {/* Description Text */}
            <div className="space-y-4">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                A school trip app helps students, teachers, and parents
                organize, track, and manage school trips with features like
                event schedules, notifications, location maps, permissions, and
                real-time updates for smooth experiences.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-raw  gap-4 pt-4">
              <Image
                src={GplayIcon}
                alt="Get it on Google Play"
                width={160}
                height={40}
              />

              <Image
                src={AplayIcon}
                alt="Get it on Google Play"
                width={160}
                height={40}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={phoneMockup}
                alt="School Trip Management App on Mobile"
                width={400}
                height={600}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
