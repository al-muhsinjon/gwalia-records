"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Navbar = () => {
 


  return (
    <header
      className={`fixed top-0 z-50 py-4 left-0 w-full ${name}  md:flex  justify-between items-center px-[7%]`}
    >
      <Link href="/">
        <Image src="/logos.svg" alt="logo" width={300} height={100} />
      </Link>
      <nav className=" md:flex lg:w-auto w-auto px-6 mt-2 flex md:gap-12 gap-4">
        <Link className="text-red-600 delay-100 hover:text-red-600 " href="/">
          Home
        </Link>
        <Link
          scroll
          className="hover:text-red-600 transition duration-[0.5s] "
          href="#about"
        >
          About
        </Link>
        <Link
          className="hover:text-red-600 transition duration-[0.5s] "
          href="#albums"
        >
          Albums
        </Link>
        <Link
          className="hover:text-red-600 transition duration-[0.5s] "
          href="#tickets"
        >
          Tickets
        </Link>
        <Link
          className="hover:text-red-600 transition duration-[0.5s] "
          href="#contact"
        >
          Contact Us
        </Link>
      </nav>
      <a href="#" className="hidden md:flex">
        <Button>View Albums</Button>
      </a>
    </header>
  );
};

export default Navbar;
