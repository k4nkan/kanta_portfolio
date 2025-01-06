import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-7 bg-cyan-100">
      <Link href={"/"}>
        <div className="text-3xl">Kanta Yamauchi</div>
      </Link>
      <div className="flex gap-6">
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

export default Header;
