import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-5 font-bold py-2 relative before:absolute before:content-[''] text-white before:top-0 before:left-0 overflow-hidden before:w-full before:h-0 before:bg-slate-400  rounded-md border-2 z-[1] before:-z-[1] hover:before:h-full before:transition-[5s] bg-red-600">
      {children}
    </button>
  );
};

export default Button;
