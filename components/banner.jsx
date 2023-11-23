import React from "react";
import Marquee from "react-fast-marquee";
import bannerimg from "@/public/images/bannerimg.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="mt-[6rem] max-md:mt-[-1rem]">
      <div className="relative overflow-x-hidden lg:rotate-[7deg]">
        <Image src={bannerimg} alt="" className="w-[100%] max-lg:h-[60px]" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <Marquee>
            <h1 className="text-[#fff] text-[2.1875rem] font-[400] flex items-center">
              A foolish man shares his problems. A wise man shares his memes -
              Doge Designer &nbsp;&nbsp;
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="white" />
              </svg>
              &nbsp;&nbsp; A foolish man shares his problems. A wise man shares
              his memes - Doge Designer &nbsp;&nbsp;
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="white" />
              </svg>
              &nbsp;&nbsp; A foolish man shares his problems. A wise man shares
              his memes - Doge Designer
            </h1>
          </Marquee>
        </div>
      </div>
      <div className="relative overflow-x-hidden lg:rotate-[-7deg] mt-4 lg:mt-[-6rem]">
        <Image src={bannerimg} alt="" className="w-[100%] max-lg:h-[60px]" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <Marquee>
            <h1 className="text-[#fff] text-[2.1875rem] font-[400] flex items-center">
              A foolish man shares his problems. A wise man shares his memes -
              Doge Designer &nbsp;&nbsp;
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="white" />
              </svg>
              &nbsp;&nbsp; A foolish man shares his problems. A wise man shares
              his memes - Doge Designer &nbsp;&nbsp;
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="white" />
              </svg>
              &nbsp;&nbsp; A foolish man shares his problems. A wise man shares
              his memes - Doge Designer
            </h1>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Banner;
