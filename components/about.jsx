import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import Button from "./button";
import Paragraph from "./paragraph";

const About = () => {
  return (
    <section id="about" className="bg-white text-black">
      <SectionHeading color>
        About <span className="text-red-600">Us</span>
      </SectionHeading>
      <div className="w-full min-h-[600px]  md:flex flex md:flex-row flex-col items-center justify-between pr-9 ">
        <div className="relative md:w-[26rem] w-[22rem] h-[26rem] ">
          <Image
            src="/about.jpg"
            alt="about"
            className="object-cover ml-[1rem]"
            fill
          />
        </div>
        <div className=" md:w-1/2">
          <h3 className="font-bold md:text-5xl text-3xl md:w-[70%]  py-3">
            Play the moments Our Music
          </h3>
          <div className={`font-medium  text-gray-600`}>
            <Paragraph>
              Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            </Paragraph>
            <Paragraph className={"my-6"}>
              feugiat lectus. Class aptent taciti sociosqu . Donec ut rhoncus
              ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
              bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
              Aliquam in elementum tellus.
            </Paragraph>
          </div>
          <Button>View Albums</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
