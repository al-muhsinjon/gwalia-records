"use client";

import About from "@/components/about";
import Albums from "@/components/albums";
import Button from "@/components/button";
import Contact from "@/components/contact";
import Packages from "@/components/packages";
import Paragraph from "@/components/paragraph";
import Tickets from "@/components/tickets";
import { Poppins } from "next/font/google";
import Image from "next/image";

const saira = Poppins({ weight: "400", preload: false });

export default function Home() {
  return (
    <>
      <main className="w-full h-screen md:bg-[url('../public/main.jpeg')] bg-black md:bg-contain md:bg-right-top bg-center bg-contain bg-no-repeat px-[7%] md:flex items-center ">
        
        <div className="relative z-10 md:top-0 top-40">
          <h1 className={`md:text-8xl text-4xl text-white font-bold md:w-[55%] mb-3  `}>
            <span className="text-red-600">Music</span> is the poetry of the air
          </h1>
          <Paragraph
            className={`md:w-[60%] md:text-xl text-gray-200 mb-8 ${saira.className}`}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Paragraph>
          <a href="#">
            <Button>View Albums</Button>
          </a>
        </div>
          <div className="relative overflow-hidden md:hidden w-full h-80 animate-spin-slow top-4" >
        <Image src="/vinil.png" className="object-contain" alt="" fill />
        </div>
      </main>
      <About />
      <Albums />
      <Tickets />
      <Contact />
      <Packages />
    </>
  );
}
