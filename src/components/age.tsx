import React, { useState } from "react";
import Input from "./(user_input)/input";
import Btn from "./btn";
import Link from "next/link";
import { cake, height_icon, weight_icon } from "../../public/shared/config";
import Next_back_btn from "./next_back_btn";
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

  // const userbmi = (userheight: number, userweight: number) => {
  //   return userweight / (userheight * userheight);
  // };
  // console.log(userbmi(userheight, userweight));

  return (
    <div className="h-[80%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
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
      {/* <button
        className="bg-red-600 text-blue-50 font-black"
        onClick={() => {
          console.log(userheight, userweight);
        }}
      >
        print
      </button> */}
      <Next_back_btn
        onclick={() => {
          console.log("userHeight=" + height, "weight=" + weight, "age=" + age);
        }}
      />
    </div>
  );
};

export default Age;
