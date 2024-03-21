import React from "react";

const Button = ({ children, onClick, type }) => {
  let style = "";
  if (type === "primary") {
    style += "bg-primary text-white";
  }
  
  return (
    <button
      onClick={onClick}
      className={`w-[77px] h-10 px-4 font-semibold rounded-md ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
