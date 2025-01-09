import React from "react";
import Input from "./input";
import Btn from "./btn";
const Name = () => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="images/logo.png" alt="dietman" className="h-[30%]" />
      <Input placehold="Enter your Name" />
        
      <Btn btntext="OK" />
    </div>
  );
};

export default Name;
