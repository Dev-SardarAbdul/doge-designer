import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import {
  FaArrowRightLong,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaTelegram,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import dextoolimg from "@/public/images/dextool.png";
function Hero() {
  return (
    <div className="relative min-h-screen max-xl:hidden">
      <Navbar />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgb(255,182,0,0.7)] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] blur-[105px]"></div>
      <div className="xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:h-full w-full flex flex-col xl:flex-row xl:justify-between items-start xxl:pt-[8rem] lg:bg-[url('/images/heroimg.png')] bg-center bg-no-repeat overflow-hidden">
        <div className="w-full xl:flex-1 max-xl:flex max-xl:flex-col max-xl:items-center">
          <h1 className="text-[#FFB600] text-[3rem] sm:text-[150px] xxl:text-[211px] text-center xl:mt-20">
            Doge
          </h1>
          <div className="xl:ml-12 max-xl:flex max-xl:flex-col max-xl:items-center w-full">
            <div className="w-[156px] h-[138px] rounded-[10px] border border-[#FFB600] bg-[rgba(215,215, 15,0.09)] backdrop-blue-[2px] shadow-heroShadow mt-4 p-4 flex flex-col justify-between">
              <p className="flex gap-2 items-center text-[#FFB600] text-[18px] font-[600] uppercase">
                Posts <FaArrowRightLong className="mt-1" />
              </p>
              <p className="text-[#fff] text-[18px] font-[300] uppercase">
                Memes
              </p>
              <p className="text-[#fff] text-[18px] font-[300] uppercase">
                Tokenomics
              </p>
            </div>
            <p className="text-white text-[17px] mt-8 w-full xl:w-[400px] max-xl:text-center">
              Hello
            </p>
            <Image
              src={"/images/getStartedBtn.png"}
              height={173}
              width={154}
              className="mt-8 cursor-pointer"
              alt="bb"
            />
          </div>
        </div>
        <Image
          src={"/images/heroDodge.png"}
          width={331}
          height={772}
          alt="hero main image"
          className="hidden xl:block"
        />
        <div className="w-full xl:flex-1 max-xl:mt-8">
          <p className="text-white text-[17px] w-full lg:w-[400px] xl:ml-12 xl:mt-[12rem] max-xl:block max-xl:mx-auto">
            Doge designer rules the meme kingdom, endorsed by both Elon Musk and
            Shibetoshi Nakamoto. Total meme royalty!
          </p>
          <h1 className="text-[#FFB600] text-[3rem] sm:text-[100px] xxl:text-[150px] mt-4 xl:mt-20 xl:ml-4 max-xl:text-center">
            Designer
          </h1>

          <h1 className="text-[#FFB600] text-[29px] mt:4 xl:mt-12 ml-4 text-center">
            Follow On social
          </h1>

          <div className="flex justify-center items-center mt-4 gap-4">
            <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full border border-white border-opacity-50 cursor-pointer">
              <FaXTwitter className="text-white opacity-50 " fontSize={20} />
            </div>
            <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full border border-white border-opacity-50 cursor-pointer">
              <FaTelegramPlane
                className="text-white opacity-50 "
                fontSize={20}
              />
            </div>
            <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full border border-white border-opacity-50 cursor-pointer">
              <Image src={dextoolimg} width={20} />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={"/images/heroDodge.png"}
        width={100}
        height={300}
        alt="hero main image"
        className="block xl:hidden mx-auto max-xl:mt-8"
      />
    </div>
  );
}

export default Hero;
