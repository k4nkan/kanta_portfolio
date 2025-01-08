import Link from "next/link";
import React from "react";

const HeaderForDesktop = () => {
  return (
    <div className="flex justify-between items-center p-7 px-5 md:px-10 lg:px-15  bg-gray-100">
      <Link href={"/"}>
        <div className="text-xl md:text-2xl lg-3xl">Kanta Yamauchi</div>
      </Link>
      <div className="flex gap-5 md:gap-7.5 lg:gap-10 text-sm md:text-lg lg-xl">
        <Link href={"/"}>
          <div>Top</div>
        </Link>
        <Link href={"/gallery"}>
          <div>Gallery</div>
        </Link>
        <Link href={"/access"}>
          <div>Access</div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderForDesktop;
