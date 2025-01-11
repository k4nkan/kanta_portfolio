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
      className="flex items-center justify-center gap-5 p-4 bg-slate-100 text-lg md:text-xl lg:text-2xl rounded-lg w-1/4 min-w-[200px]"
    >
      <span className="text-3xl md:text-4xl lg:text-5xl">{icon}</span>
      <span>{title}</span>
    </a>
  );
};

export default AccessLinks;
