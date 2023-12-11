import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full border-t py-4 px-[7%]">
      <div className="md:flex  md:justify-between">
        <Image src="/logos.svg" alt="logo" width={300} height={100} />
        <div className="flex gap-4 mt-4 md:mt-0 text-2xl">
          <FaInstagram />
          <FaLinkedinIn />
          <FaFacebook />
        </div>
      </div>
      <div className="md:flex justify-between items-center mt-12">
        <p>info@boxchampy.com</p>
        <div className="flex gap-4 text-2xl">
          <p className="opacity-30 hover:opacity-100" >Privacy policy </p>
          <p className="opacity-30 hover:opacity-100" >Terms & conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
