import Banner from "@/components/Banner";
import DownloadSection from "@/components/DownloadSection";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Banner />
      <Features />
      <HowItWorks />
      <Pricing />
      <DownloadSection />
    </div>
  );
}
