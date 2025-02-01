"use client";
import axios from "axios";
import React, { useState } from "react";
const Response_Result = () => {
  const [userinput, setUserinput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_OPENAI_API_KEY;
  console.log("API Key:", apiKey);
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
    <div className="h-[70%] w-[60%] bg-red-400">
      <div className="bg-green-500 text-center">
        <h2>Chat with AI</h2>
        <input
          type="text"
          value={userinput}
          onChange={(e) => setUserinput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendRequest} disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
        <p>
          <strong>Response:</strong> {response}
        </p>
      </div>
    </div>
  );
};

export default Response_Result;
