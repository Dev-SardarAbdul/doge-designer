import React from "react";
import Navbar from "./navbar";
import {
  FaArrowRightLong,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import dextoolimg from "@/public/images/dextool.png";
function MobileHero() {
  return (
    <div>
      <div className="relative min-h-screen block xl:hidden">
        <Navbar />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgb(255,182,0,0.7)] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] blur-[105px]"></div>

        <div className="flex justify-start items-center gap-12 sm:mt-16">
          <h1 className="text-[#FFB600] text-[4rem] sm:text-[150px] xxl:text-[211px] text-center xl:mt-20">
            Doge
          </h1>
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
        </div>

        <div className="flex justify-start mt-4 sm:mt-8 gap-2 sm:gap-8">
          <Image
            src={"/images/heroDodge.png"}
            width={231}
            height={772}
            alt="hero main image"
            className="max-[450px]:w-[100px]"
          />
          <div>
            <h1 className="text-[#FFB600] text-[3rem] sm:text-[100px] xxl:text-[150px] max-[450px]:text-[28px] ">
              Designer
            </h1>
            <p className="text-white text-[12px] sm:text-[17px]">
              Doge designer rules the meme kingdom, endorsed by both Elon Musk
              and Shibetoshi Nakamoto. Total meme royalty! Doge designer rules
              the meme kingdom, endorsed by both Elon Musk and Shibetoshi
              Nakamoto. Total meme royalty! Doge designer rules the meme
              kingdom, endorsed by both Elon Musk and Shibetoshi Nakamoto.
            </p>
            <Image
              src={"/images/getStartedBtn.png"}
              height={173}
              width={154}
              className="mt-4 cursor-pointer max-[450px]:w-[120px]"
              alt="Get started button"
            />
            <h1 className="text-[#FFB600] text-[29px] mt-4">
              Follow On social
            </h1>

            <div className="flex justify-start items-center mt-4 gap-2 sm:gap-4">
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
      </div>
    </div>
  );
}

export default MobileHero;
