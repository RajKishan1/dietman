import React from "react";
import Input from "./input";
import Gender from "./gender";
import { usericon } from "../../../public/shared/config";
interface prop {
  setUsername: (value: string) => void;
  username: string;
  setGender: (value: string) => void;
  gender: string;
  pagenumber: number;
  setPagenumber: (value: number) => void;
}
const Name_Input = ({
  setUsername,
  username,
  gender,
  setGender,
  pagenumber,
  setPagenumber,
}: prop) => {
  return (
    <>
      <Input
        src={usericon}
        placehold="Enter your Name"
        value={username}
        onchange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Gender gender={gender} setGender={setGender} />
    </>
  );
};

export default Name_Input;
