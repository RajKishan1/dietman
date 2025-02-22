import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
interface prop {
  onRightclick?: (value: any) => void;
  onLeftclick?: (value: any) => void;
  text?: string;
  textclass?: string;
  setTextclass?: any;
  pagenumber?: string;
  setPagenumber?: (value: number) => void;
}
const Next_back_btn = ({
  onRightclick,
  onLeftclick,
  text,
  pagenumber,
  setPagenumber,
}: prop) => {
  const [textclass, setTextclass] = useState("text-2xl  opacity-0");
  return (
    <div className="h-[62%] w-[95%] px-10 flex justify-between items-center">
      <button
        className="h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-full bg-green-600 text-slate-800"
        onClick={onLeftclick}
      >
        <ArrowLeft
          className="h-[80%] w-full"
          color="#ffffff "
          strokeWidth={1.25}
        />
      </button>
      {/* <h2 className={textclass}>{text}</h2> */}
      <div className="h-[20%] w-[40%] bg-white rounded-full">
        <div className="h-full w-[15%] bg-green-500 rounded-full"></div>
      </div>
      <button
        className="h-[40px] md:h-[70px] w-[40px] md:w-[70px] rounded-full bg-green-600  text-slate-100"
        onClick={onRightclick}
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
