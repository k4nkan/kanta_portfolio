import React from "react";

type AccessLinksProps = {
  icon: React.ReactNode;
  url: string;
  title: string;
};

const AccessLinks: React.FC<AccessLinksProps> = ({ icon, url, title }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-4 p-3 border-2 border-black text-lg md:text-xl lg:text-2xl rounded-xl w-[200px]"
    >
      <span className="text-3xl md:text-4xl lg:text-5xl">{icon}</span>
      <span>{title}</span>
    </a>
  );
};

export default AccessLinks;
