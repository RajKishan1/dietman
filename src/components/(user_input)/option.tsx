import React, { useState } from "react";
interface prop {
  text: string;
}
const Option = ({ text }: prop) => {
  const [classname, setClassname] = useState<string>(
    "h-[30px] md:h-[70px] w-[50px] md:w-[125px] rounded-full border-[3px] border-lime-600 text-xs md:text-xl font-semibold text-slate-700 flex items-center justify-center shadow-lg shadow-green-900 cursor-pointer"
  );
  return (
    <div
      className={classname}
      onClick={() => {
        setClassname(
          "h-[30px] md:h-[70px] w-[50px] md:w-[125px] rounded-full border-[3px] bg-green-600 border-white text-xs md:text-xl font-semibold text-slate-200 flex items-center justify-center  cursor-pointer"
        );
        // console.log(text);
      }}
    >
      {text}
    </div>
  );
};

export default Option;
