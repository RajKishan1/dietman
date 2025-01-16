"use client";
import Age from "@/components/age";
import Exercise from "@/components/exercise";
import ExerciseMethod from "@/components/exerciseMethod";
import Name from "@/components/name";
import Target from "@/components/target";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const User = () => {
  interface prop {
    username: string;
    setUsername: () => void;
    gender: string;
    setGender: (value: string) => void;
    age: number;
    setAge: () => {};
  }
  const [username, setUsername] = useState<string>("Please Enter Username");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [targetWgt, setTargetWgt] = useState();
  const [time, setTime] = useState();
  const userdata = {
    name: username,
    userAge: age,
    userweight: weight,
    userheight: height,
    usertarget: targetWgt,
    targettime: time,
  };
  const pathname = usePathname();
  return (
    <div className='h-screen w-full flex items-center justify-center bg-[url("https://img.freepik.com/free-photo/view-green-fruits-vegetables_23-2149270968.jpg?t=st=1736583944~exp=1736587544~hmac=5cdd9cb6096939567ad757ef637f73f20aec0d00b2b00b382e79c941b7f5c56c&w=996")] bg-cover bg-center'>
      <Name
        username={username}
        setUsername={setUsername}
        gender={gender}
        setGender={setGender}
      />
      {/* {(pathname == "/user" && <Name />) || */}
      {/* // (pathname == "/user/age" && <Age />)} */}
      {/* <Target /> */}
      {/* <Exercise /> */}
      {/* <ExerciseMethod /> */}
    </div>
  );
};
export default User;
