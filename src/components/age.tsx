import React from "react";
import Input from "./(user_input)/input";
import Btn from "./btn";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Age = () => {
  const pathname = usePathname();
  {
    console.log(pathname);
  }

  return (
    <div className="h-[80%] w-[60%] flex flex-col items-center justify-around gap-5 bg-slate-300 bg-opacity-75 shadow-2xl backdrop-blur-[4px]">
      <img src="/images/logo.png" alt="dietman" className="h-[30%]" />
      <Input
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aC4wMSIvPjxwYXRoIGQ9Ik0xMiA0aC4wMSIvPjxwYXRoIGQ9Ik0xNyA0aC4wMSIvPjwvc3ZnPg=="
        placehold="Enter Your Age"
      />
      <Input
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbmNpbC1ydWxlciI+PHBhdGggZD0iTTEzIDcgOC43IDIuN2EyLjQxIDIuNDEgMCAwIDAtMy40IDBMMi43IDUuM2EyLjQxIDIuNDEgMCAwIDAgMCAzLjRMNyAxMyIvPjxwYXRoIGQ9Im04IDYgMi0yIi8+PHBhdGggZD0ibTE4IDE2IDItMiIvPjxwYXRoIGQ9Im0xNyAxMSA0LjMgNC4zYy45NC45NC45NCAyLjQ2IDAgMy40bC0yLjYgMi42Yy0uOTQuOTQtMi40Ni45NC0zLjQgMEwxMSAxNyIvPjxwYXRoIGQ9Ik0yMS4xNzQgNi44MTJhMSAxIDAgMCAwLTMuOTg2LTMuOTg3TDMuODQyIDE2LjE3NGEyIDIgMCAwIDAtLjUuODNsLTEuMzIxIDQuMzUyYS41LjUgMCAwIDAgLjYyMy42MjJsNC4zNTMtMS4zMmEyIDIgMCAwIDAgLjgzLS40OTd6Ii8+PHBhdGggZD0ibTE1IDUgNCA0Ii8+PC9zdmc+"
        placehold="Enter Your Height (CM)"
      />
      <Input
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNsaXBib2FyZC1saXN0Ij48cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiLz48cGF0aCBkPSJNMTYgNGgyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJWNmEyIDIgMCAwIDEgMi0yaDIiLz48cGF0aCBkPSJNMTIgMTFoNCIvPjxwYXRoIGQ9Ik0xMiAxNmg0Ii8+PHBhdGggZD0iTTggMTFoLjAxIi8+PHBhdGggZD0iTTggMTZoLjAxIi8+PC9zdmc+"
        placehold="Enter Your Weight (KG)"
      />

      <Link href="/user/target">
        <Btn btntext="OK" />
      </Link>
    </div>
  );
};

export default Age;
