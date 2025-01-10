import React from "react";
import Input from "./(user_input)/input";
import Gender from "./(user_input)/gender";
import Link from "next/link";
import Btn from "./btn";
const Name = () => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="images/logo.png" alt="dietman" className="h-[30%]" />
      <Input
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS11c2VyIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNNyAyMC42NjJWMTlhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2MS42NjIiLz48L3N2Zz4="
        placehold="Enter your Name"
      />
      <Gender />
      <Link href="/user/age">
        <Btn btntext="OK" />
      </Link>
    </div>
  );
};

export default Name;
