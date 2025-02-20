import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageAnimation } from "../components/Animations/Animations";

const images = ["/profile_images/top.jpeg"];

export default function Home() {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="flex justify-center items-center bg-white bg-opacity-60"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
      onClick={changeImage}
    >
      <AnimatePresence>
        <motion.img
          {...ImageAnimation}
          key={imageIndex}
          src={images[imageIndex]}
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

      <div
        className="text-center text-4xl md:text-6xl text-black"
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
