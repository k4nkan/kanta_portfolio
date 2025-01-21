import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderMenu from "./HeaderMenu";
import HeaderTitle from "./HeaderTitle";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const IconsAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, rotate: 360 },
  exit: { opacity: 0 },
};

const IconsAnimation = {
  variants: IconsAnimationVariants,
  initial: "hidden",
  animate: "visible",
  exit: "exit",
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  transition: { duration: 0.2 },
};

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setTimeout(() => {
      setMenuOpen(!MenuOpen);
    }, 200);
  };

  return (
    <>
      {/* mobile用の構造 */}
      <div className="md:hidden">
        <div
          className={`flex w-full h-[61px] justify-center items-center ${
            !MenuOpen ? "outline outline-4 outline-black" : ""
          } `}
        >
          {MenuOpen ? (
            <AnimatePresence>
              <motion.div
                key="close-icon"
                {...IconsAnimation}
                className="absolute left-4 text-3xl"
              >
                <MdClose onClick={handleMenuToggle} />
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                key="open-icon"
                {...IconsAnimation}
                className="absolute left-4 text-3xl"
              >
                <FiMenu onClick={handleMenuToggle} />
              </motion.div>
            </AnimatePresence>
          )}
          <HeaderTitle />
        </div>
        {MenuOpen && (
          <div className="flex relative w-full h-[39px] justify-center border-b-4 border-black">
            <div className="absolute top-[-5px]">
              <HeaderMenu />
            </div>
          </div>
        )}
      </div>

      {/* desktop用の構造 */}
      <div className="md:flex hidden justify-center outline outline-4 outline-black">
        <div className="flex w-full h-[61px] max-w-[1200px] justify-between items-center px-10">
          <HeaderTitle />
          <HeaderMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
