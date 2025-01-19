import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <>
      {/* mobile用の構造 */}
      <div className="md:hidden">
        <div className="flex w-full h-[65px] justify-center items-center border-b-4 border-black">
          <FiMenu
            onClick={handleMenuToggle}
            className="absolute left-4 text-2xl"
          />
          <HeaderTitle />
        </div>
        {MenuOpen && (
          <div className="flex relative w-full h-[35px] justify-center border-b-4 border-black">
            <div className="absolute top-[-5px]">
              <HeaderMenu />
            </div>
          </div>
        )}
      </div>

      {/* desktop用の構造 */}
      <div className="md:flex hidden justify-center border-b-4 border-black">
        <div className="flex w-full h-[65px] max-w-[1200px] justify-between items-center px-10">
          <HeaderTitle />
          <HeaderMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
