import React from "react";
interface prop {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: prop) => {
  return <img src={src} alt={alt} className="h-[175px] w-[175px] rounded-full " />;
};

export default Image;
