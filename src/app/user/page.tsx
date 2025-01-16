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
    age: number | string;
    setAge: (value: number) => {};
    time: number;
    setTime: (value: number) => void;
    targetWgt: number;
    setTargetWgt: (value: number) => void;
    frequency: number;
    setFrequency: (value: number) => void;
    duration: number;
    setDuration: (value: number) => void;
  }
  const [username, setUsername] = useState<string>("Please Enter Username");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [targetWgt, setTargetWgt] = useState(0);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [frequency, setFrequency] = useState(0);
  const [activity, setActivity] = useState<string>("");

  const userdata = {
    name: username,
    usergender: gender,
    userAge: age,
    userweight: weight,
    userheight: height,
    usertarget: targetWgt,
    targettime: time,
  };
  const pathname = usePathname();
  return (
    <div className='h-screen w-full flex items-center justify-center bg-[url("https://img.freepik.com/free-photo/view-green-fruits-vegetables_23-2149270968.jpg?t=st=1736583944~exp=1736587544~hmac=5cdd9cb6096939567ad757ef637f73f20aec0d00b2b00b382e79c941b7f5c56c&w=996")] bg-cover bg-center'>
      {/* <Name
        username={username}
        setUsername={setUsername}
        gender={gender}
        setGender={setGender}
      /> */}
      {/* <Age
        age={age}
        setAge={setAge}
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
      /> */}
      {/* <Target
        time={time}
        setTime={setTime}
        targetWgt={targetWgt}
        setTargetWgt={setTargetWgt}
      /> */}
      {/* <Exercise
        frequency={frequency}
        setFrequency={setFrequency}
        duration={duration}
        setDuration={setDuration}
      /> */}
      <ExerciseMethod activity={activity} setActivity={setActivity} />
    </div>
  );
};
export default User;
