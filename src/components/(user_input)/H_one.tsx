import React from "react";
interface prop {
  text: string;
}
const H_one = ({ text }: prop) => {
  return <h1 className="text-3xl font-bold text-black">{text}</h1>;
};

export default H_one;
