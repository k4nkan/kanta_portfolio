import { motion, AnimatePresence } from "framer-motion";
import { ImageAnimation } from "../Animations/Animations";

export default function FirstView() {
  return (
    <section
      id="firstview"
      className="flex justify-center items-center bg-white bg-opacity-60"
      style={{ height: "100vh", width: "100%", position: "relative" }}
    >
      <AnimatePresence>
        <motion.img
          {...ImageAnimation}
          src="/profile_images/top.jpeg"
          alt="Portfolio"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </AnimatePresence>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl md:text-6xl">Kanta Yamauchi</h1>
        <p className="text-1xl md:text-2xl">This is my portfolio</p>
      </div>
    </section>
  );
}
