import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
interface prop {
  onclick?: () => void;
  text?: string;
  textclass?: string;
  setTextclass?: any;
}
const Next_back_btn = ({ onclick, text }: prop) => {
  const [textclass, setTextclass] = useState("text-2xl  opacity-0");
  return (
    <div className="h-[12%] w-full px-10 flex justify-between items-center">
      <button className="h-[95%] w-[7%] rounded-full bg-green-600 text-slate-800">
        <ArrowLeft
          className="h-[80%] w-full"
          color="#ffffff "
          strokeWidth={1.25}
        />
      </button>
      {/* <h2 className={textclass}>{text}</h2> */}
      <div className="h-[7%] w-[40%] bg-white ">
        <div className="h-full w-[5%] bg-green-500"></div>
      </div>
      <button
        className="h-[95%] w-[7%] rounded-full bg-green-600  text-slate-100"
        onClick={onclick}
      >
        <ArrowRight
          className="h-[80%] w-full"
          color="#ffffff"
          strokeWidth={1.25}
        />
      </button>
    </div>
  );
};

export default Next_back_btn;
