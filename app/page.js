"use client";

import About from "@/components/about";
import Albums from "@/components/albums";
import Button from "@/components/button";
import Contact from "@/components/contact";
import Paragraph from "@/components/paragraph";
import Tickets from "@/components/tickets";
import { Poppins } from "next/font/google";

const saira = Poppins({ weight: "400", preload: false });

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-[url('../public/main.jpeg')] md:bg-contain md:bg-right-top bg-center bg-contain bg-no-repeat px-[7%] flex items-center ">
        <div>
          <h1 className={`md:text-8xl text-4xl  font-bold md:w-[55%] mb-3  `}>
            <span className="text-red-600">Music</span> is the poetry of the air
          </h1>
          <Paragraph
            className={`md:w-[60%] md:text-xl mb-8 ${saira.className}`}
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
      </main>
      <About />
      <Albums />
      <Tickets />
      <Contact />
    </>
  );
}
