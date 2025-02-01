"use client";
import React, { useEffect, useState } from "react";
interface prop {
  gender: string;
  setGender: (value: string) => void;
}
const Gender = ({ gender, setGender }: prop) => {
  const [classmale, setClassmale] = useState<string>("");
  const [classfemale, setClassfemale] = useState<string>("");
  // const [gender, setGender] = useState<string>("male");
  const [selectedgender, setSelectedgender] = useState<string>("male");
  useEffect(() => {
    if (gender === "male") {
      setClassmale("ring ring-[5px] ring-green-600 rounded-full"),
        setClassfemale("");
    } else {
      setClassfemale("ring ring-[5px] ring-green-600 rounded-full"),
        setClassmale("");
    }
  }, [gender]);
  return (
    <div className="h-[20%] flex justify-center gap-20">
      <img
        className={classmale}
        src="images/male.png"
        alt="male"
        onClick={() => {
          setGender("male");
          setSelectedgender("male");
        }}
      />
      <img
        className={classfemale}
        src="images/female.png"
        alt="female"
        onClick={() => {
          setGender("female");
          setSelectedgender("female");
        }}
      />
    </div>
  );
};
export default Gender;
