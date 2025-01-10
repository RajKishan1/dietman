import React from "react";
interface prop {
  text: string;
}
const Option = ({ text }: prop) => {
  return (
    <div className="h-[70px] w-[125px] rounded-full border-[3px] border-lime-600 text-xl font-semibold text-slate-700 flex items-center justify-center shadow-lg shadow-black">
      {text}
    </div>
  );
};

export default Option;
