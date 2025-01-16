import React from "react";
import Image from "./(user_input)/image";
import Btn from "./btn";
import Link from "next/link";
import Next_back_btn from "./next_back_btn";
interface prop {
  activity: string;
  setActivity: (value: any) => void;
}
const ExerciseMethod = ({ activity, setActivity }: prop) => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <div className=" h-[45%] w-full flex flex-col items-center justify-around">
        <h1 className="text-3xl text-slate-700 font-bold ml-7">
          Choose Your Exercise  
        </h1>
        <div className="flex flex-wrap items-center justify-around gap-8">
          <Image
            activity={activity}
            setActivity={setActivity}
            altText="yoga"
            src="/images/yoga.png"
          />
          <Image altText="gym" src="/images/gym.png" />
          <Image altText="running" src="/images/running.png" />
          <Image altText="cycling" src="/images/cycling.png" />
          <Image altText="swimming" src="/images/swimming.png" />
          <Image altText="others" src="/images/others.png" />
        </div>
      </div>
      <Link href="">{/* <Btn btntext="OK" /> */}</Link>
      <Next_back_btn
        onclick={() => {
          setActivity("");
        }}
      />
    </div>
  );
};

export default ExerciseMethod;
