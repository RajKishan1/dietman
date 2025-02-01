import React, { useState } from "react";
interface prop {
  src: string;
  altText: string;
  activity?: string;
  setActivity?: (value: any) => void;
}
const Image = ({ src, altText, activity, setActivity }: prop) => {
  const [classname, setClassname] = useState(
    "h-[125px] w-[125px] rounded-full"
  );
  return (
    <img
      src={src}
      alt={altText}
      className={classname}
      onClick={() => {
        setClassname(
          "h-[135px] w-[135px] rounded-full ring ring-[6px] ring-green-500"
        );
        // setActivity(altText);
      }}
    />
  );
};
export default Image;
