import React from "react";
interface prop {
  btntext: string;
}
const Btn = ({ btntext }: prop) => {
  return (
    <button className="h-[60px] w-[200px] bg-green-600 rounded-full text-2xl font-bold">
      {btntext}
    </button>
  );
};

export default Btn;
