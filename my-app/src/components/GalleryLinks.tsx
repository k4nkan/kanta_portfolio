import Link from "next/link";
import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import AccessLinks from "./AccessLinks";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  BigButtonAnimation,
  ButtonAnimation,
  LinksAnimation,
} from "./Animations/Animations";

interface GalleryLinksProps {
  title: string;
  img: string;
  altText: string;
  gitLink: string;
  pageLink: string;
  detail: string;
  tech: string;
}

const GalleryLinks: React.FC<GalleryLinksProps> = ({
  title,
  img,
  altText,
  gitLink,
  pageLink,
  detail,
  tech,
}) => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <motion.div
        {...BigButtonAnimation}
        onClick={() => setDetailOpen(true)}
        className="flex flex-col gap-3 cursor-pointer border-2 border-black"
      >
        <div className="text-md md:text-xl text-center">{title}</div>
        <div className="h-full">
          <img src={img} alt={altText} />
        </div>
      </motion.div>

      {detailOpen && (
        <div
          onClick={() => setDetailOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-50 p-5 rounded-xl shadow-md w-11/12 max-w-[600px] min-w-[280px]"
          >
            <div className="flex items-center justify-between px-2">
              <h1 className="text-2xl font-bold p-2">{title}</h1>
              <motion.div {...ButtonAnimation}>
                <MdClose
                  onClick={() => setDetailOpen(false)}
                  className="text-2xl cursor-pointer"
                />
              </motion.div>
            </div>
            <img src={img} alt={altText} className="p-3" />
            <div className="flex flex-col gap-4 px-3 text-md">
              <motion.span {...LinksAnimation} className="w-full">
                <AccessLinks
                  icon={<FaGithub />}
                  url={gitLink}
                  title="Github Link"
                />
              </motion.span>
              <motion.span {...LinksAnimation} className="w-full">
                <AccessLinks
                  icon={<TbWorld />}
                  url={pageLink}
                  title="Page Link"
                />
              </motion.span>
              <div>概要：{detail}</div>
              <div>使用技術：{tech}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryLinks;
