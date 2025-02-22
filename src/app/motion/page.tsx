"use client";
import React from "react";
import { motion } from "motion/react";
const page = () => {
  return (
    <motion.div
      className="h-[300px] w-[300px] bg-red-500 border-[5px] border-white"
      initial={{ x: 100 }}
      animate={{ x: [0, 1000, 0, 800], y: [0, 0, 500, 500] }}
      transition={{ delay: 1, duration: 4 }}
      drag
      dragConstraints={{ left: 0, top: 0 }}
    ></motion.div>
  );
};

export default page;
