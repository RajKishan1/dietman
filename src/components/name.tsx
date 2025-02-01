import React, { useEffect, useState } from "react";
import Input from "./(user_input)/input";
import Gender from "./(user_input)/gender";
import { usericon } from "../../public/shared/config";
// import userdata from "./userdata";
interface prop {
  setUsername: (value: string) => void;
  username: string;
  setGender: (value: string) => void;
  gender: string;
  pagenumber: number;
  setPagenumber: (value: number) => void;
}
const Name = ({
  setUsername,
  username,
  gender,
  setGender,
  pagenumber,
  setPagenumber,
}: prop) => {
  // const [username] = useState("username");

  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-evenly gap-3 bg-slate-300 bg-opacity-75 backdrop-blur-[4px] border-collapse">
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
    </div>
  );
};

export default Name;
