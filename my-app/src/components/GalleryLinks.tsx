import Link from "next/link";
import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";

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
      <div
        onClick={() => setDetailOpen(true)}
        className="cursor-pointer w-[400px] border-2 border-black rounded-xl"
      >
        <div className="text-xl text-center pt-2">{title}</div>
        <img src={img} alt={altText} className="p-1"/>
      </div>

      {detailOpen && (
        <div
          onClick={() => setDetailOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex px-10 justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-5 rounded-xl shadow-md max-w-[700px]"
          >
            <div className="flex items-center justify-between px-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold p-2">
                {title}
              </h1>
              <MdClose
                onClick={() => setDetailOpen(false)}
                className="text-2xl md:text-3xl lg:text-4xl cursor-pointer"
              />
            </div>
            <img src={img} alt={altText} />
            <div className="px-2">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={pageLink}
                className="flex gap-2 items-center mb-2"
              >
                <TbWorld size={25} />
                <div className="pt-1">Page Link</div>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={gitLink}
                className="flex gap-2 items-center mb-3"
              >
                <FaGithub size={25} />
                <div className="pt-1">Github Link</div>
              </Link>
              <div className="mb-3 text-sm md:text-md lg:text-lg">
                概要：{detail}
              </div>
              <div className="mb-3 text-sm md:text-md lg:text-lg">
                使用技術：{tech}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryLinks;
