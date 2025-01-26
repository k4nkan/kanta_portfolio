import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "profile_images/profile_1.jpeg",
  "profile_images/profile_2.jpeg",
  "profile_images/profile_3.jpeg",
  "profile_images/profile_4.jpeg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="flex justify-center items-center bg-white bg-opacity-50"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
      onClick={changeImage}
    >
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </AnimatePresence>

      {/* テキスト */}
      <div
        className="text-center text-4xl text-black"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        this is my portfolio
      </div>
    </div>
  );
}
