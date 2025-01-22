import { motion } from "framer-motion";
import Link from "next/link";
import { BigButtonAnimation } from "../Animations/Animations";

const HeaderTitle = () => {
  return (
    <Link href={"/"}>
      <motion.div {...BigButtonAnimation} className="text-3xl">
        Kanta Yamauchi
      </motion.div>
    </Link>
  );
};

export default HeaderTitle;
