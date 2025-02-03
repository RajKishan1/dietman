import React from "react";
import dataObject from "../dataObject";
const Prompt = () => {
  return (
    <h1>
      `"You are an expert nutritionist and fitness coach. Your task is to create
      a highly customized and detailed diet plan based on the user's personal
      details and fitness goals. The diet plan should be optimized for their
      specific needs, whether they want to gain weight, lose weight, or maintain
      their current physique. Consider their preferred sports and exercise
      frequency when crafting the plan. Provide meal recommendations for
      breakfast, lunch, dinner, and snacks, along with portion sizes and
      nutritional value. Suggest alternative foods if certain items are
      unavailable. Include hydration tips, supplementation (if necessary), and a
      rough calorie breakdown. Ensure the diet is practical, sustainable, and
      suitable for their time frame and lifestyle. Use a structured,
      easy-to-follow format. send the response in html code in tabular form with
      tailwind styling and make it responsive also. and send only dietplan,
      nothing other than that. 🔹 HERE IS THE USER DATA: Name: $
      {dataObject.name}
      Age: ${dataObject.userAge}
      Height: ${dataObject.userheight}
      Current Weight: ${dataObject.userweight}
      Target Weight: ${dataObject.usertargetweight}
      Time Period: ${dataObject.targettime}
      Preferred Sports: Badminton, Swimming Exercise Frequency: 5 days a week `
    </h1>
  );
};

export default Prompt;
