import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 relative z-10">
      <Image
        src={"/images/navLogo.png"}
        width={69}
        height={69}
        alt="navbar logo"
        className="cursor-pointer"
      />
      <Image
        src={"/images/buyBtn.png"}
        width={120}
        height={131}
        alt="Buy Button"
        className="cursor-pointer"
      />
    </div>
  );
}

export default Navbar;
