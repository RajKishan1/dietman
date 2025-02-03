"use client";
import axios from "axios";
import React, { useState } from "react";
import dataObject from "../dataObject";
import RenderHTML from "./RenderHTML";
import { Loader } from "lucide-react";

function Loading() {
  return <Loader className="animate-spin h-[150%] w-[150%] text-gray-500" />;
}

const Response_Result = () => {
  const [userinput, setUserinput] = useState(
    `"You are an expert nutritionist and fitness coach. Your task is to create a highly customized and detailed diet plan based on the user's personal details and fitness goals. The diet plan should be optimized for their specific needs, whether they want to gain weight, lose weight, or maintain their current physique. Consider their preferred sports and exercise frequency when crafting the plan. Provide meal recommendations for breakfast, lunch, dinner, and snacks, along with portion sizes and nutritional value. Suggest alternative foods if certain items are unavailable. Include hydration tips, supplementation (if necessary), and a rough calorie breakdown. Ensure the diet is practical, sustainable, and suitable for their time frame and lifestyle. Use a structured, easy-to-follow format.
    send the response in html code in tabular form with tailwind styling and make it responsive also. and send only dietplan, nothing other than that.

🔹 HERE IS THE USER DATA:
Name: ${dataObject.name}
Age: ${dataObject.userAge}
Height: ${dataObject.userheight}
Current Weight: ${dataObject.userweight}
Target Weight: ${dataObject.usertargetweight}
Time Period: ${dataObject.targettime}
Preferred Sports: Badminton, Swimming
Exercise Frequency: 5 days a week 
`
  );
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY;
  // console.log("API Key:", apiKey);
  // console.log(userdata)

  const sendRequest = async () => {
    if (!userinput) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo", // Choose model
          messages: [{ role: "user", content: userinput }], // Send user message
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setResponse(res?.data?.choices[0].message.content);
    } catch (error) {
      console.error();
      setResponse("Unable to catch response from api");
    }
    setLoading(false);
  };
  return (
    <div className="h-[90%] w-[90%] bg-gradient-to-br from-[#85FFBD] to-[#FFFB7D] backdrop-blur-lg opacity-[95%]">
      <button className="text-black" onClick={sendRequest} disabled={loading}>
        {loading ? <Loading /> : "Send"}
      </button>
      <RenderHTML HTMLContent={response} />
      <div className="text-black">ll</div>
    </div>
  );
};
export default Response_Result;