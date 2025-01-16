import React from "react";
import Btn from "./btn";
import Option from "./(user_input)/option";
import Link from "next/link";
import Next_back_btn from "./next_back_btn";
interface prop {
  frequency: number;
  setFrequency: (value: number) => void;
  duration: number;
  setDuration: (value: number) => void;
}
const ExerciseTime = ({
  frequency,
  setFrequency,
  duration,
  setDuration,
}: prop) => {
  return (
    <div className="h-[75%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <div className="h-[25%] bg-red- w-full flex flex-col items-center justify-evenly mt-[-15px]">
        <h2 className="text-slate-700 font-bold text-3xl ml-11">
          Duration of your exercise : (per Day)
        </h2>
        <div className="w-full flex justify-evenly">
          <Option text="10 min" />
          <Option text="20 min" />
          <Option text="30 min" />
          <Option text="45 min" />
          <Option text="60 min" />
          <Option text="90 min" />
          <Option text="120 min" />
        </div>
      </div>
      <div className="h-[25%] bg-red- w-full flex flex-col items-center justify-evenly mt-[-15px]">
        <h2 className="text-slate-700 font-bold text-3xl ml-11">
          Exercise Sessions per week
        </h2>
        <div className="h-[30%] w-full flex items-center justify-evenly ">
          <Option text="Once" />
          <Option text="Twice" />
          <Option text="Thrice" />
          <Option text="4 Times" />
          <Option text="5 Times" />
          <Option text="6 Times" />
          <Option text="Everyday" />
        </div>
      </div>
      <Link href="/user/exercisemethod">{/* <Btn btntext="OK" /> */}</Link>
      <Next_back_btn />
    </div>
  );
};

export default ExerciseTime;
