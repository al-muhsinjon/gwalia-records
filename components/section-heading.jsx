import React from "react";

const SectionHeading = ({ children, color }) => {
  return (
    <div className="text-center flex  justify-center flex-col items-center gap-1 pb-6 ">
      <h2 className={` text-center font-bold md:text-6xl text-4xl ${color? "text-black": "text-white"} `}>{children}</h2>
      <div className="md:w-24 w-16 h-1 bg-red-600" />
    </div>
  );
};

export default SectionHeading;
