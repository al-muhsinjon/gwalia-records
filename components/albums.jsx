"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import Card from "./card";

const Albums = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const category = [
    "All",
    "Pop",
    "Rock",
    "Jazz",
    "Soundtracks",
    "Folk",
    "Electronic",
  ];
  const albums = [
    {
      id: 0,
      name: "Eargasm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,",
      src: "/eargasm.jpg",
      category: "all, pop",
    },
    {
      id: 1,
      name: "Mask",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,",
      src: "/album1.jpg",
      category: "all, pop",
    },
    {
      id: 2,
      name: "Maroon",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,",
      src: "/album2.png",
      category: "all, pop",
    },
    {
      id: 3,
      name: "Maroon",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,",
      src: "/album3.jpg",
      category: "all, pop",
    },
    {
      id: 4,
      name: "Maroon",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,",
      src: "/album4.jpg",
      category: "all, pop",
    },
    {
      id: 5,
      name: "Maroon",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,",
      src: "/album5.jpg",
      category: "all, pop",
    },
  ];

  return (
    <section id="albums" className="bg-black">
      <SectionHeading>Albums</SectionHeading>
      <div className="w-full h-24 flex md:px-[25%]    my-10 ">
        <ul className="text-white flex gap-2 w-full justify-evenly items-center  text-xl ">
          {category.map((item, id) => (
            <li
              key={id}
              onClick={() => setActiveCategory(id)}
              className={` cursor-pointer ${
                activeCategory === id ? "text-red-500" : "text-white"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full grid md:gap-4 gap-y-7 md:grid-cols-3">
        {albums.map((album, id) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
      <div className="capitalize text-center mt-24 mx-auto my-0  ">
        <span className="opacity-30 cursor-pointer underline hover:opacity-100 ">
          view more
        </span>
      </div>
    </section>
  );
};

export default Albums;
