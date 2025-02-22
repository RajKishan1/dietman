import React, { useState } from "react";
import Input from "./(user_input)/input";
import Link from "next/link";
import { cake, height_icon, weight_icon } from "../../public/shared/config";
interface prop {
  age: number;
  setAge: (value: number) => void;
  setHeight: (value: number) => void;
  setWeight: (value: number) => void;
  height: number;
  weight: number;
}
const Age = ({ age, height, weight, setHeight, setWeight, setAge }: prop) => {
  const [bmi, setBmi] = useState();

  const userbmi = (userheight: number, userweight: number) => {
    return userweight / (userheight * userheight);
  };

  return (
    <div className="h-[90vh] md:h-[70%] w-[80vw] md:w-[60%] flex flex-col items-center justify-around bg-slate-300 bg-opacity-75  backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <Input
        src={cake}
        placehold="Enter Your Age"
        value={age}
        onchange={(e) => {
          setAge(e.target.value);
        }}
      />
      <Input
        src={height_icon}
        placehold="Enter Your Height (CM)"
        value={height}
        onchange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <Input
        src={weight_icon}
        placehold="Enter Your Weight (KG)"
        value={weight}
        onchange={(e) => {
          setWeight(e.target.value);
        }}
      />

      <Link href="/user/target">{/* <Btn btntext="OK" />   */}</Link>
    </div>
  );
};

export default Age;
