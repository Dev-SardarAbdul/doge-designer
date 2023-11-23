"use client";
import Image from "next/image";
import React from "react";
import memeimg from "@/public/images/memeimg.png";
import memeimg2 from "@/public/images/mobilememe.png";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Memes = () => {
  return (
    <div className="pb-[3rem]">
      <AnimationOnScroll animateIn="animate__flipInX">
        <h1 className="text-[#FFB600] text-[3rem] sm:text-[5.625rem] text-center mt-[6rem]">
          Famous Memes
        </h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="flex justify-center items-center mt-[1.5rem] max-md:hidden">
          <Image src={memeimg} />
        </div>
        <div className="flex justify-center items-center mt-[1.5rem] md:hidden">
          <Image src={memeimg2} />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Memes;
