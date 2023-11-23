"use client";
import Image from "next/image";
import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import postmainimg from "@/public/images/postmainimg.png";
import postimg from "@/public/images/postimg.png";
import post1 from "@/public/images/post1.png";
import post2 from "@/public/images/post2.png";
import post3 from "@/public/images/post3.png";
import post4 from "@/public/images/post4.png";
import post5 from "@/public/images/post5.png";
import post6 from "@/public/images/post6.png";
import post7 from "@/public/images/post7.png";
import post8 from "@/public/images/post8.png";
import post9 from "@/public/images/post9.png";
import post10 from "@/public/images/post10.png";
import post11 from "@/public/images/post11.png";

function PostsComp() {
  const data = [
    {
      img: post1,
    },
    {
      img: post2,
    },
    {
      img: post3,
    },
    {
      img: post4,
    },
    {
      img: post5,
    },
    {
      img: post6,
    },
    {
      img: post7,
    },
    {
      img: post8,
    },
    {
      img: post9,
    },
    {
      img: post10,
    },
    {
      img: post11,
    },
  ];

  return (
    <div className="mt-8 lg:mt-[12rem] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <AnimationOnScroll animateIn="animate__bounce">
          <div className="flex flex-col lg:flex-row w-full justify-start items-center lg:items-start lg:gap-8 lg:w-[500px]">
            <h1 className="text-[#FFB600] text-[3rem] w-full md:text-[100px] text-center mt-[2rem]">
              Posts on <br className="hidden lg:block" /> X
            </h1>
            <Image
              src={"/images/arrow.png"}
              width={107}
              height={51}
              alt="arrow image"
              className="mt-8"
            />
          </div>
        </AnimationOnScroll>
        <div className="max-lg:mt-[4rem]">
          <Image src={postimg} />
        </div>
      </div>
      <div className="mt-[3.5rem] max-md:hidden">
        <Image src={postmainimg} alt="arrow image" className="w-full" />
      </div>
      <div>
        {data.map((item) => (
          <div className="mt-[2rem] flex justify-center items-center flex-col md:hidden">
            <Image src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComp;
