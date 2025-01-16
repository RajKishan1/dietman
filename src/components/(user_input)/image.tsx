import React, { useState } from "react";
interface prop {
  src: string;
  alt: string;
}
const Image = ({ src, alt }: prop) => {
  const [classname, setClassname] = useState(
    "h-[125px] w-[125px] rounded-full"
  );
  return (
    <img
      src={src}
      alt={alt}
      className={classname}
      onClick={() => {
        setClassname(
          "h-[125px] w-[125px] rounded-full ring ring-[2px] ring-blue-500"
        );
      }}
    />
  );
};
export default Image;