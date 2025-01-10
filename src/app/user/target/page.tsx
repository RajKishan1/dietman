"use client";
import Age from "@/components/age";
import Exercise from "@/components/exercise";
import ExerciseMethod from "@/components/exerciseMethod";
import Name from "@/components/name";
import Target from "@/components/target";
import React from "react";
import { usePathname } from "next/navigation";

const User = () => {
  const pathname = usePathname();
  return (
    <div className='h-screen w-full flex items-center justify-center bg-[url("https://tint.creativemarket.com/b66CtyR1FrRMyxeqFuKTAjUyS8zUgKZlKl1Jigx80sk/width:1820/height:1214/gravity:ce/rt:fill-down/el:1/preset:cm_watermark_retina/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzU3Ny81Nzc5LzU3Nzk4Nzkvcm5uNWN6NGpjNXpjb3J0dzlyeGNxcXRndXRqazFuZW53cXg5bDI1cHRucGhmcXlzZWZlcjkwOXN4cXpndnQ4My1vLmpwZw?1709909941")] bg-cover bg-center'>
      {(pathname == "/user" && <Name />) ||
        (pathname == "/user/age" && <Age />) ||
        (pathname == "/user/target" && <Target />)}
      {/* <Exercise /> */}
      {/* <ExerciseMethod /> */}
    </div>
  );
};
export default User;
