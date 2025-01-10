import React from "react";
import Input from "./(user_input)/input";
import Btn from "./btn";
import Link from "next/link";
const Target = () => {
  return (
    <div className="h-[70%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <Input
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsaXBib2FyZC1saXN0Ij48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNMTIgMTFoNCIvPjxwYXRoIGQ9Ik0xMiAxNmg0Ii8+PHBhdGggZD0iTTggMTFoLjAxIi8+PHBhdGggZD0iTTggMTZoLjAxIi8+PC9zdmc+"
        placehold="Your Target Weight (KG)"
      />
      <Input
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRpbWVyIj48bGluZSB4MT0iMTAiIHgyPSIxNCIgeTE9IjIiIHkyPSIyIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTUiIHkxPSIxNCIgeTI9IjExIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNCIgcj0iOCIvPjwvc3ZnPg=="
        placehold="Time Duration"
      />
      <Link href="/user/exercisetime">
        <Btn btntext="OK" />
      </Link>
    </div>
  );
};

export default Target;
