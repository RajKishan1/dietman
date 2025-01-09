import React from "react";
interface props {
  placehold: string;
}
const Input = ({ placehold }: props) => {
  return (
    <input
      className="h-[10%] w-[55%] bg-transparent border border-transparent px-2 border-b-slate-700 text-2xl text-slate-800 focus:outline-none"
      placeholder={placehold} 
    ></input>
  );
};

export default Input;
