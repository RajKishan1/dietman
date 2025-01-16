import React from "react";
interface props {
  placehold?: string;
  src?: string;
  value?: any;
  onchange?: (value:any) => any;
}
const Input = ({ placehold, src, onchange }: props) => {
  return (
    <div className="h-[10%] w-[50%] flex relative">
      <img className="w-[7%] h-full absolute" src={src} alt="" />
      <input
        onChange={onchange}
        className="h-full w-[90%] bg-transparent border border-transparent px-16 placeholder:text-gray-500 border-b-slate-700 text-2xl text-slate-800 focus:outline-none"
        placeholder={placehold}
      ></input>
    </div>
  );
};

export default Input;
