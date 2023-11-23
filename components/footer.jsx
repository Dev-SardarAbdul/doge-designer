import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import dextoolimg from "@/public/images/dextool.png";
function Footer() {
  return (
    <div className="my-4 flex flex-col lg:flex-row max-lg:gap-4 justify-between items-center overflow-hidden">
      <Image
        src={"/images/navLogo.png"}
        height={68}
        width={68}
        alt="Footer Text"
      />
      <div className="flex flex-col md:flex-row justify-center gap-8 items-center max-md:gap-3">
        <p className="text-[#FFB600] text-[18px] font-[600] uppercase cursor-pointer">
          Posts
        </p>
        <p className="text-[#fff] text-[18px] font-[600] uppercase cursor-pointer">
          Memes
        </p>
        <p className="text-[#fff] text-[18px] font-[600] uppercase cursor-pointer">
          Tokenomics
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 max-md:my-[1rem]">
        <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full border border-white border-opacity-50 cursor-pointer">
          <FaXTwitter className="text-white opacity-50 " fontSize={20} />
        </div>
        <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full border border-white border-opacity-50 cursor-pointer">
          <FaTelegramPlane className="text-white opacity-50 " fontSize={20} />
        </div>
        <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full border border-white border-opacity-50 cursor-pointer">
          <Image src={dextoolimg} width={20} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
