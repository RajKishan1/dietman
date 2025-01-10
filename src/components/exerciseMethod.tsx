import React from "react";
import Image from "./(user_input)/image";
import Btn from "./btn";
import Link from "next/link";
const ExerciseMethod = () => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <div className=" h-[45%] w-full flex flex-col items-center justify-around">
        <h1 className="text-3xl text-slate-700 font-bold ml-7">
          Choose Your Exercise
        </h1>
        <div className="flex flex-wrap items-center justify-around">
          <Image alt="yoga" src="/images/yoga.png" />
          <Image alt="running" src="/images/running.png" />
          <Image alt="swimming" src="/images/swimming.png" />
          <Image alt="gym" src="/images/gym.png" />
          <Image alt="cycling" src="/images/cycling.png" />
          <Image alt="others" src="/images/others.png" />
        </div>
      </div>
      <Link href="/user/">
        <Btn btntext="OK" />
      </Link>
    </div>
  );
};

export default ExerciseMethod;
