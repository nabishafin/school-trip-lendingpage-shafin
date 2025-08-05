import Image from "next/image";
import { Button } from "@/components/ui/button";
import phonesMockup from "../../public/mobilemock2.png";
import GplayIcon from "../../public/playg.png";
import AplayIcon from "../../public/playa.png";
import qrCode from "../../public/Qrcode.png";

export default function DownloadSection() {
  return (
    <section className=" py-10">
      <div className="w-full md:w-10/12 mx-auto px-10">
        <div className="rounded-lg p-6 sm:p-8 md:p-12">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Download Now
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Phone Image */}
            <div className="flex justify-center">
              <Image
                src={phonesMockup}
                alt="School Trip Management App Screenshots"
                width={300}
                height={300}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
                priority
              />
            </div>

            {/* Right Side Content */}
            <div className="space-y-6 sm:space-y-8">
              {/* QR Code */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="w-24 h-24 rounded-lg flex items-center justify-center">
                  <Image
                    src={qrCode}
                    alt="QR Code for Download Link"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-sm text-gray-600 text-center lg:text-left">
                  Scan me for download
                </p>
              </div>

              {/* Text Content */}
              <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Download the App and get most smooth experience
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  Available on iOS and Android. Start your journey towards a
                  fulfilling and useful school trip!
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-start gap-4 pt-4">
                <Image
                  src={GplayIcon}
                  alt="Get it on Google Play"
                  width={160}
                  height={40}
                />
                <Image
                  src={AplayIcon}
                  alt="Get it on App Store"
                  width={160}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
