import React from "react";

const Plainbutton = (props) => {
  return (
    <>
      <button className="text-[#0475E6] bg-[#e6f1fc] font-bold text-sm px-[3.008rem] p-[0.875rem] rounded-md">
        {props.icon}
        {props.name}
      </button>
    </>
  );
};

export default Plainbutton;
