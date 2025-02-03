import React from "react";
import Gender from "./(user_input)/gender";
import H_one from "./(user_input)/H_one";
import Link from "next/link";
import dataObject from "./dataObject";
interface prop {
  name: string;
  usergender: string;
  userAge: number;
  userweight: number;
  userheight: number;
  usertarget: number;
  targettime: number;
}
const Overview = ({
  name,
  usergender,
  userAge,
  userweight,
  userheight,
  usertarget,
  targettime,
}: prop) => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-evenly gap-3 bg-slate-300 bg-opacity-75 backdrop-blur-[4px] border-collapse">
      <img src="images/logo.png" alt="dietman" className="h-[30%]" />
      <div className="h-[70%] w-[70%] bg-green-1 flex flex-col items-center justify-evenly">
        <H_one text={`I am ${name}. I'm ${userAge} years old ${usergender}.`} />
        {/* <H_one text={`Weight:${userweight} Kg`} /> */}
        <H_one
          text={`I am ${userheight} cm tall and My weight is ${userweight} `}
        />
        <H_one
          text={`I want my weight to be ${usertarget}Kg in ${targettime} Months`}
        />
        {/* <H_one text={`Time Period:${targettime} Months`} /> */}
      </div>
      <Link href={"/result"}>
        <button
          className="h-[60px] w-[200px] bg-green-500 rounded-full"
          onClick={() => {
            console.log(dataObject);
          }}
        >
          Let's get my Dietplan
        </button>
      </Link>
    </div>
  );
};

export default Overview;
