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
  pagenumber: number;
  setPagenumber: (value: number) => void;
}
const Age = ({
  age,
  height,
  weight,
  setHeight,
  setWeight,
  setAge,
  pagenumber,
  setPagenumber,
}: prop) => {
  const [bmi, setBmi] = useState();

  const userbmi = (userheight: number, userweight: number) => {
    return userweight / (userheight * userheight);
  };

  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around bg-slate-300 bg-opacity-75  backdrop-blur-[4px]">
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
      {/* <Next_back_btn
        onLeftclick={() => setPagenumber(1)}
        onRightclick={() => {
          console.log("userHeight=" + height, "weight=" + weight, "age=" + age);
          console.log(userbmi(height, weight));
          setPagenumber(3);
        }}
      /> */}
    </div>
  );
};

export default Age;
