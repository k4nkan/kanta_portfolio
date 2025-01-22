import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IconsAnimation, MenuAnimation } from "../Animations/Animations";

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <>
      {/* mobile用の構造 */}
      <div className="md:hidden">
        <motion.div
          className={`flex relative w-full h-[65px] z-50 bg-white justify-center items-center ${
            !MenuOpen ? "border-b-4 border-black" : "border-b-4 border-white"
          } `}
        >
          <AnimatePresence>
            {MenuOpen ? (
              <motion.div
                key="close-icon"
                {...IconsAnimation}
                className="absolute left-4 text-3xl"
              >
                <MdClose onClick={handleMenuToggle} />
              </motion.div>
            ) : (
              <motion.div
                {...IconsAnimation}
                className="absolute left-4 text-3xl"
              >
                <FiMenu onClick={handleMenuToggle} />
              </motion.div>
            )}
          </AnimatePresence>
          <HeaderTitle />
        </motion.div>

        <AnimatePresence>
          {MenuOpen && (
            <motion.div
              key={"menu-open"}
              {...MenuAnimation}
              className="flex absolute w-full h-[39px] bg-white justify-center border-b-4 border-black"
            >
              <div className="top-[-5px]">
                <HeaderMenu />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* desktop用の構造 */}
      <div className="md:flex hidden justify-center border-b-4 border-black">
        <div className="flex w-full h-[61px] max-w-[1200px] justify-between items-center px-10">
          <HeaderTitle />
          <HeaderMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
