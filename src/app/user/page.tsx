"use client";
import Age from "@/components/age";
import Exercise from "@/components/exercise";
import ExerciseMethod from "@/components/exerciseMethod";
import Name from "@/components/name";
import Target from "@/components/target";
import React, { useState } from "react";
import Next_back_btn from "@/components/next_back_btn";
import Overview from "@/components/overview";

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
    pagenumber: number;
    setPagenumber: (value: number) => void;
  }
  const [username, setUsername] = useState<string>("Please Enter Username");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [targetWgt, setTargetWgt] = useState(0);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activity, setActivity] = useState<string>("");
  const [frequency, setFrequency] = useState(0);
  const [pagenumber, setPagenumber] = useState(1);

  const userdata = {
    name: username,
    usergender: gender,
    userAge: age,
    userweight: weight,
    userheight: height,
    usertarget: targetWgt,
    targettime: time,
  };
  //functions to increase and decrease page number.
  const increment = () => {
    setPagenumber((e) => e + 1);
  };
  const decrement = () => {
    setPagenumber((e) => e - 1);
  };
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center bg-[url("https://img.freepik.com/free-photo/view-green-fruits-vegetables_23-2149270968.jpg?t=st=1736583944~exp=1736587544~hmac=5cdd9cb6096939567ad757ef637f73f20aec0d00b2b00b382e79c941b7f5c56c&w=996")] bg-cover bg-center'>
      {pagenumber == 1 ? (
        <Name
          username={username}
          setUsername={setUsername}
          gender={gender}
          setGender={setGender}
        />
      ) : pagenumber === 2 ? (
        <Age
          age={age}
          setAge={setAge}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
        />
      ) : pagenumber === 3 ? (
        <Target
          time={time}
          setTime={setTime}
          targetWgt={targetWgt}
          setTargetWgt={setTargetWgt}
        />
      ) : pagenumber === 4 ? (
        <Exercise
          frequency={frequency}
          setFrequency={setFrequency}
          duration={duration}
          setDuration={setDuration}
        />
      ) : pagenumber === 5 ? (
        <ExerciseMethod activity={activity} setActivity={setActivity} />
      ) : pagenumber === 6 ? (
        // <Response_Result />
        <Overview
          name={username}
          usergender={gender}
          userAge={age}
          userweight={weight}
          userheight={height}
          usertarget={targetWgt}
          targettime={time}
        />
      ) : (
        pagenumber
      )}
      <div className="h-[10%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 backdrop-blur-[4px] border-collapse">
        <Next_back_btn
          onLeftclick={() => {
            pagenumber === 1
              ? alert("NO PREVIOUS PAGE AVAILABLE")
              : decrement();
          }}
          onRightclick={() => {
            {
              pagenumber === 5 ? console.log(userdata) : <></>;
              pagenumber === 6
                ? alert("NO FURTHER PAGE AVAILABLE")
                : increment();
            }
            {
            }
          }}
        />
      </div>
    </div>
  );
};
export default User;
