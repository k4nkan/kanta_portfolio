import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const HeaderForMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-slate-100 p-5 text-2xl">
      <div className="flex gap-3 items-center">
        <FiMenu onClick={() => setMenuOpen(!menuOpen)} />
        <Link href="/">
          <div>Kanta Yamauchi</div>
        </Link>
      </div>
      {menuOpen && (
        <div className="flex justify-between pt-3 text-sm">
          <Link href="/">
            <div>Top</div>
          </Link>
          <Link href="/gallery">
            <div>Gallery</div>
          </Link>
          <Link href="/access">
            <div>Access</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderForMobile;
