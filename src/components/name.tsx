import React, { useEffect, useState } from "react";
import Input from "./(user_input)/input";
import Gender from "./(user_input)/gender";
import Link from "next/link";
import Btn from "./btn";
import { usericon } from "../../public/shared/config";
import Next_back_btn from "./next_back_btn";
// import userdata from "./userdata";
interface prop {
  setUsername: (value: string) => void;
  username: string;
  setGender: (value: string) => void;
  gender: string;
}
const Name = ({ setUsername, username, gender, setGender }: prop) => {
  // const [username] = useState("username");

  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="images/logo.png" alt="dietman" className="h-[30%]" />
      <Input
        src={usericon}
        placehold="Enter your Name"
        value={username}
        onchange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Gender gender={gender} setGender={setGender} />
      <Link href="/user/age"></Link>
      <Next_back_btn
        text="please enter username"
        onclick={() => {
          console.log(username);
          console.log(gender);

          // console.log(user);
        }}
      />
    </div>
  );
};

export default Name;
