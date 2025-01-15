import Link from "next/link";
import React, { useState } from "react";

interface GalleryLinksProps {
  title: string;
  img: string;
  altText: string;
  gitLink: string;
  pageLink: string;
}

const GalleryLinks: React.FC<GalleryLinksProps> = ({
  title,
  img,
  altText,
  gitLink,
  pageLink,
}) => {
  const [detailOpen, setDetailOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setDetailOpen(true)}
        className="cursor-pointer p-3 w-[400px] bg-slate-200 hover:shadow-md transition-shadow duration-150"
      >
        <div className="text-xl px-4">{title}</div>
        <img src={img} alt={altText} className="rounded-md" />
      </div>

      {detailOpen && (
        <div
          onClick={() => setDetailOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex px-10 justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-5 rounded-lg shadow-md"
          >
            <h1 className="text-lg font-bold mb-4">{title}</h1>
            <img src={img} alt={altText} className="rounded-md mb-4" />
            <div className="flex space-x-4">
              <Link href={pageLink}>Page</Link>
              <Link href={gitLink}>Github</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryLinks;
