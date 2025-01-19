import React, { useState, useEffect, useRef } from "react";

type AccessLinksProps = {
  icon: React.ReactNode;
  url: string;
  title: string;
};

const AccessLinks: React.FC<AccessLinksProps> = ({ icon, url, title }) => {
  const [isWide, setIsWide] = useState(false); // サイズ監視の状態
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!linkRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setIsWide(width > 450); // 450pxを超えたらtrueに
      }
    });

    observer.observe(linkRef.current);

    return () => {
      if (linkRef.current) {
        observer.unobserve(linkRef.current);
      }
    };
  }, []);

  return (
    <div className={`my-3 mx-20 ${isWide ? "m-auto" : ""}`}>
      <a
        ref={linkRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-4 p-3 border-2 border-black text-lg md:text-xl lg:text-2xl rounded-xl w-full max-w-[450px]"
      >
        <span className="text-3xl md:text-4xl lg:text-5xl">{icon}</span>
        <span>{title}</span>
      </a>
    </div>
  );
};

export default AccessLinks;
