import Image from "next/image";
import { Inter } from "next/font/google";
import FeaturedCollection from "@/components/FeaturedCollection";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-[#F9FAFB] w-full lg:px-[100px]`}
    >
      <div className="lg:h-[500px] bg-bg-top w-full flex lg:items-center lg:px-16 px-4 py-4 bg-center bg-cover lg:mb-[91px]">
        <div className="">
          <span className="text-white font-semibold text-sm bg-[#1671D9] rounded-xl py-1 px-3 mb-3">ENDLESS SUMMER SALE</span>
          <h1 className="lg:w-[464px] lg:text-6xl text-3xl font-medium text-white mb-6">
            Up to 60% off on all items till September 11
          </h1>
          <button className="bg-[#F56630] text-white flex w-[141px] rounded-lg h-[56px] items-center 
            justify-center text-base font-semibold gap-2">Shop now
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.08315 11.3707C9.80795 10.6006 9.80795 9.39937 9.08315 8.62927L1.7282 0.814638C1.34969 0.412464 0.716812 0.393286 0.314638 0.771803C-0.0875353 1.15032 -0.106714 1.78319 0.271803 2.18537L7.62675 10L0.271803 17.8146C-0.106713 18.2168 -0.0875345 18.8497 0.314639 19.2282C0.716813 19.6067 1.34969 19.5875 1.7282 19.1854L9.08315 11.3707Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
      <FeaturedCollection/>
      <Experience/>
    </main>
  );
}

