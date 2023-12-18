import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import Paragraph from "./paragraph";
import Button from "./button";

const Tickets = () => {
  const ticket = [
    {
      id: 0,
      name: "United Center - Chicago, IL",
      time: "08:00pm",
      text: "The five-year wait will at last come to an end in 2016, as GRAMMY winner they confirmed dates for the 25 Tour, which will include.",
      day: 25,
      month: "03",
      year: 24,
      src: "/event-medium-1.jpg",
    },
    {
      id: 1,
      name: "Rogers Arena - Vancouver, BC, CA",
      time: " 07:00pm",
      text: "From there, the Adele tour will hit most major markets, with nearly every city getting multiple nights of shows, including two-plus...",
      day: 25,
      month: "03",
      year: 24,
      src: "/event-medium-2.jpg",
    },
    {
      id: 2,
      name: "Staples Center - Los Angeles, CA",
      time: " 09:00pm",
      text: "Los Angeles (Aug. 5-6, 9-10, 12-13), New York (Sept. 19-20, 22-23, 25-26), and Toronto (Oct. 3-4, 6-7). At the time of the Dec. 14...",
      day: 25,
      month: "03",
      year: 24,
      src: "/event-medium-3.jpg",
    },
  ];
  return (
    <section id="tickets" className="bg-white">
      <SectionHeading color>Tickets</SectionHeading>
      {ticket.map((tick) => (
        <div
          key={tick.id}
          className="w-full md:h-64  mt-20 shadow-2xl border-2 border-red-600 rounded-md md:overflow-hidden md:flex cursor-pointer bg-[#D9D9D9] group"
        >
          <div className="flex">
            <div className="md:w-[300px] w-[70%] h-64   relative">
              <Image
                className="group-hover:grayscale-0 grayscale"
                src={tick.src}
                fill
                alt="concert"
              />
            </div>
            <div className="w-32 md:h-full text-white flex flex-col items-center justify-center text-3xl font-light bg-red-600">
              <span>{tick.day}</span>
              <span>/</span>
              <span>{tick.day}</span>
              <span>/</span>
              <span>{tick.year}</span>
            </div>
          </div>
          <div className="md:w-[60%] p-6  h-full md:flex justify-between items-center">
            <div className="text-black md:w-[80%] flex justify-evenly flex-col">
              <h2 className="md:text-3xl text-2xl md:w-[80%]">{tick.name}</h2>
              <span className="flex md:text-3xl text-2xl items-center gap-2">
                <MdAccessTime />
                {tick.time}
              </span>
              <Paragraph className="font-bold md:m-0 my-4  ">
                {tick.text}
              </Paragraph>
            </div>
            <div>
              <Button>Buy Ticket</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tickets;
