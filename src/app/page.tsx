"use client";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-red-300 bg-[url('https://i.pinimg.com/736x/49/e4/ae/49e4aec9535361d76657540e884da950.jpg')] bg-cover bg-center">
      <div className="text-3xl lg:text-6xl font-black text-black mt-16">
        Welcome to..
      </div>
      <img src="images/logo.png" alt="dietman" />
      <Link href="/user">
        <motion.button
          className="h-12 lg:h-20 w-36 lg:w-56 bg-green-500 rounded-full text-md lg:text-2xl text-black font-normal lg:font-bold mt-16  border-slate-700 border-8 shadow-2xl"
          whileTap={{ scale: 0.85 }}
        >
          Let's get Started
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
