import Link from "next/link";
import React from "react";
import Button from "./button";
import Image from "next/image";
import Paragraph from "./paragraph";

const Card = ({ album }) => {
  return (
    <div className="w-full border border-red-600  h-auto group bg-[#19191B] rounded-xl p-4 cursor-pointer">
      <div className="relative w-full h-72 top-0">
        <Image
          className="object-cover rounded-t-md grayscale group-hover:grayscale-0"
          src={album.src}
          alt="album"
          fill
        />
      </div>
      <div className="text-[#9a9a9a] my-4 ">
        <h3>{album.name}</h3>
        <Paragraph className="font-normal my-3">{album.text}</Paragraph>
      </div>
      <Link href="/" className="mt-3  bg-green-300 m-auto">
        <Button>View Albums</Button>
      </Link>
    </div>
  );
};

export default Card;
