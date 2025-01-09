import Link from "next/link";
import React from "react";

const HeaderForDesktop = () => {
  return (
    <div className="flex justify-between items-center p-7 px-5 pb-5 md:px-10 lg:px-15 border-b-4 border-black">
      <Link href={"/"}>
        <div className="text-2xl md:text-3xl lg-4xl">Kanta Yamauchi</div>
      </Link>
      <div className="flex gap-5 md:gap-7.5 lg:gap-10 text-lg md:text-xl lg-2xl">
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
