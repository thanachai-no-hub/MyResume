
import React from 'react';

const Textbox = ({ placeholder, type = "text", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-[rgba(203,213,225,0.5)] rounded-[6px] bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
  );
};

export default Textbox;
