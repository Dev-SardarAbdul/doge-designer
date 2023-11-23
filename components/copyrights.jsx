import React from "react";

function Copyrights() {
  return (
    <div className="my-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white font-[300] cursor-pointer max-md:text-[14px]">
        dogedesigner@gmail.com
      </p>
      <p className="text-white font-[300] max-md:text-[14px]">
        ©{new Date().getFullYear()} By DogeDesigner. All rights Reserved.
      </p>
    </div>
  );
}

export default Copyrights;
