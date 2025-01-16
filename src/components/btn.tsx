import React, { useState } from "react";
interface prop {
  btntext: any;
}
const Btn = ({ btntext }: prop) => {
  const [onclick, setOnclick] = useState();
  return (
    <button className="h-[60px] w-[200px] bg-green-600 rounded-full text-2xl font-bold">
      {btntext}
    </button>
  );
};

export default Btn;
