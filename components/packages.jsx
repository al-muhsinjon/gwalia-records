import React from "react";
import SectionHeading from "./section-heading";
import { ImHeadphones } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import Button from "./button";
import { BsMusicPlayer } from "react-icons/bs";
import { BiAlbum } from "react-icons/bi";

const Packages = () => {
  return (
    <section className="bg-white">
      <SectionHeading color>Packages</SectionHeading>
      <div className="w-full h-auto  flex flex-col md:flex-row gap-y-4 gap-8 p-6 justify-center items-center">
        <div className="w-full h-full border-2 border-red-600 rounded-md   bg-black p-8 text-white text-center">
          <div className="flex text-4xl py-3 gap-4 flex-col justify-center items-center">
            <BiAlbum />
            <h2>Upgrade</h2>
          </div>
          <div className="flex items-center justify-between py-4">
            <FaCheck className="text-red-600" />
            <p>Yiliga 3 ta albom</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 ">
            <FaCheck className="text-red-600" />
            <p>3 marta konsert chiptalari</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 ">
            <FaCheck className="text-red-600" />
            <p>1 marta san'atkorlar bilan uchrashuv</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4">
            <FaCheck className="text-red-600" />
            <p>Qo'shimcha albom xaridlariga 15% chegirma</p>
          </div>
          <Button>Buy Package</Button>
        </div>

        <div className="w-full h-full border-2 border-red-600 rounded-md   bg-black p-8 text-white text-center">
          <div className="flex text-4xl py-3 gap-4 flex-col justify-center items-center">
            <BsMusicPlayer />
            <h2>VIP</h2>
          </div>
          <div className="flex items-center justify-between py-4">
            <FaCheck className="text-red-600" />
            <p>Yiliga 3 ta albom</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 ">
            <FaCheck className="text-red-600" />
            <p>3 marta konsert chiptalari</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 ">
            <FaCheck className="text-red-600" />
            <p>1 marta san'atkorlar bilan uchrashuv</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4">
            <FaCheck className="text-red-600" />
            <p>Qo'shimcha albom xaridlariga 15% chegirma</p>
          </div>
          <Button>Buy Package</Button>
        </div>

        <div className="w-full h-full border-2 border-red-600 rounded-md   bg-black p-8 text-white text-center">
          <div className="flex text-4xl py-3 gap-4 flex-col justify-center items-center">
            <ImHeadphones />
            <h2>Debyut</h2>
          </div>
          <div className="flex items-center justify-between py-4">
            <FaCheck className="text-red-600" />
            <p>Yiliga 2 ta albom</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 ">
            <FaCheck className="text-red-600" />
            <p>1 x ustuvor konsert chiptasi</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4 ">
            <FaCheck className="text-red-600" />
            <p>1 x bepul tovar mahsuloti</p>
          </div>
          <hr />
          <div className="flex items-center justify-between py-4">
            <FaCheck className="text-red-600" />
            <p>Qo'shimcha albom xaridlariga 10% chegirma.</p>
          </div>
          <Button>Buy Package</Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
