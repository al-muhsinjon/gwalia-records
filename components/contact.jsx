import React from "react";
import SectionHeading from "./section-heading";
import Button from "./button";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", preload: false });

const Contact = () => {
  return (
    <section id="contact" className={`pb-28 ${poppins.className}`}>
      <SectionHeading>
        Contact <span className="text-red-600">Us</span>
      </SectionHeading>
      <form className="max-w-4xl mx-auto text-center" action="#">
        <div className="flex justify-between flex-wrap relative">
          <div className="w-[49%] my-3 relative">
            <input
              type="text"
              className="placeholder:text-white w-full h-full p-6 rounded-xl bg-transparent  outline-none border-2 border-red-600"
              placeholder="First Name"
              required
            />
          </div>
          <div className="w-[49%] my-3 relative">
            <input
              type="text"
              className="placeholder:text-white w-full h-full p-6 rounded-xl bg-transparent  outline-none border-2 border-red-600"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap relative">
          <div className="w-[49%] my-3 relative">
            <input
              type="number"
              className="placeholder:text-white w-full h-full p-6 rounded-xl bg-transparent  outline-none border-2 border-red-600"
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="w-[49%] my-3 relative">
            <input
              type="text"
              className="placeholder:text-white w-full h-full p-6 rounded-xl bg-transparent  outline-none border-2 border-red-600"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div>
          <textarea
            name=""
            className="resize-none placeholder:text-white bg-transparent outline-none border-2 mb-4 border-red-600 w-full h-full rounded-xl p-6"
            id=""
            cols="30"
            rows="10"
            required
            placeholder="Your Message"
          ></textarea>
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default Contact;
