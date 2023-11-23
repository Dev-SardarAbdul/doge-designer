import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Memes from "@/components/memes";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Tokennomics from "@/components/tokennomics";
import Footer from "@/components/footer";
import Copyrights from "@/components/copyrights";
import PostsComp from "@/components/postsComp";
import MobileHero from "@/components/mobileHero";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
        <div className="absolute top-[200px] left-0 max-xl:hidden">
          <Image
            src={"/images/heroDoggy1.png"}
            width={221}
            height={221}
            alt="hero side doggy"
          />
        </div>
        <Hero />
        <MobileHero />
        <div className="absolute top-[500px] xl:right-0 max-xl:right-0">
          <Image
            src={"/images/heroDoggy2.png"}
            width={221}
            height={221}
            alt="hero second side doggy"
          />
        </div>
        <div className="absolute top-[100px] right-0 xl:hidden">
          <Image
            src={"/images/heroDoggy2.png"}
            width={221}
            height={221}
            alt="hero second side doggy"
          />
        </div>
      </main>
      <Banner />

      <div className="relative">
        <Image
          src={"/images/sideImg.png"}
          width={572.169}
          height={736}
          className="absolute right-0 bottom-[-200px] max-md:hidden"
          alt="side image"
        />
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <PostsComp />
        </main>
      </div>

      <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
        <Memes />
      </main>

      <div className="relative">
        <Image
          src={"/images/sideImg2.png"}
          width={472.169}
          height={736}
          className="absolute left-0"
          alt="side image"
        />

        <div className="absolute right-0 bg-[rgb(255,182,0,0.25)] h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] blur-[105px] bottom-10"></div>

        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4 relative z-10">
          <Tokennomics />
        </main>
      </div>

      <div className="border-t-2 border-[#FFB600]">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px">
          <Footer />
        </main>
      </div>
      <div className="border-t-2 border-[#FFB600] border-dashed">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px">
          <Copyrights />
        </main>
      </div>
    </div>
  );
}
