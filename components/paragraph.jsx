import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "500", preload: false });

const Paragraph = ({ children, className }) => {
  return <p className={`${poppins.className} ${className}`}>{children}</p>;
};

export default Paragraph;
