import Link from "next/link";
import React from "react";

const HeaderForMobile = () => {
  return (
    <div className="bg-slate-100 p-5 text-lg">
      <Link href={"/"}>
        <div>Kanta Yamauchi</div>
      </Link>
      <div className="flex justify-between pt-3 text-sm">
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

export default HeaderForMobile;
