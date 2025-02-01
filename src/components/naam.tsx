import React, { useEffect, useState } from "react";
import Input from "./(user_input)/input";
import Gender from "./(user_input)/gender";
import Link from "next/link";
import Btn from "./btn";
import { usericon } from "../../public/shared/config";
import Next_back_btn from "./next_back_btn";
import Name from "./name";
import Name_Input from "./(user_input)/name_Input";
// import userdata from "./userdata";
interface prop {
  setUsername: (value: string) => void;
  username: string;
  setGender: (value: string) => void;
  gender: string;
  pagenumber: number;
  setPagenumber: (value: number) => void;
}

const Naam = ({
  setUsername,
  username,
  gender,
  setGender,
  pagenumber,
  setPagenumber,
}: prop) => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      {/* <Name
        username={username}
        setUsername={setUsername}
        gender={gender}
        setGender={setGender}
        pagenumber={pagenumber}
        setPagenumber={setPagenumber}
      /> */}
      <img src="images/logo.png" alt="dietman" className="h-[30%]" />
      <div className="h-[40%] w-full flex flex-col items-center justify-around gap-5">
        {/* <Name_Input /> */}
      </div>
      <Next_back_btn />
    </div>
  );
};

export default Naam;
