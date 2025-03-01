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
      className="flex items-center justify-center gap-4 p-3 border-2 border-black text-lg rounded-xl w-full"
    >
      <span className="text-3xl">{icon}</span>
      <span>{title}</span>
    </a>
  );
};

export default AccessLinks;
