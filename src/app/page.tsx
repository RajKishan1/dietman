import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center bg-red-300 bg-[url('https://i.pinimg.com/736x/49/e4/ae/49e4aec9535361d76657540e884da950.jpg')] bg-cover bg-center">
      <div className="text-6xl font-black text-black mt-16">Welcome to..</div>
      <img src="images/logo.png" alt="dietman" />
      <Link href="/user">
        <button className="h-20 w-56 bg-blue-500 rounded-full text-2xl font-bold mt-16">
          Let's get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
