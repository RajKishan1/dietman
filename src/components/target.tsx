import React from "react";
import Input from "./(user_input)/input";
import Btn from "./btn";
import Link from "next/link";
import { time_icon, weight_icon } from "../../public/shared/config";
import Next_back_btn from "./next_back_btn";
interface prop {
  time: number;
  setTime: (value: number) => void;
  targetWgt: number;
  setTargetWgt: (value: number) => void;
}
const Target = ({ time, setTime, targetWgt, setTargetWgt }: prop) => {
  return (
    <div className="h-[70%] w-[85%] md:w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <Input
        src={weight_icon}
        placehold="Your Target Weight (KG)"
        value={targetWgt}
        onchange={(e) => {
          setTargetWgt(e.target.value);
        }}
      />
      <Input
        src={time_icon}
        placehold="Time Duration (in Months)"
        value={time}
        onchange={(e) => {
          setTime(e.target.value);
        }}
      />
      <Link href="/user/exercisetime">{/* <Btn btntext="OK" /> */}</Link>
      {/* <Next_back_btn
        onRightclick={() => {
          console.log(time, targetWgt);
        }}
      /> */}
    </div>
  );
};

export default Target;
