import GalleryLinks from "../../components/GalleryLinks";

const Home = () => {
  return (
    <div
      className="flex flex-col gap-5 justify-center"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <div className="text-center text-2xl">My Gallery</div>
      <GalleryLinks
        title={"就活メールつくるくん"}
        img={"/gallery_1.png"}
        altText={"project img, 就活メールつくるくん"}
        pageLink={"null"}
        gitLink={"https://github.com/k4nkan/hackathon-2023-TeamC"}
        detail={"ハッカソンで作成, 就活におけるメールを簡単に作成できます"}
        tech={"React, Next.js, TypeScript, Docker, Open AI api, etc"}
      />
      <GalleryLinks
        title={"MAsterpiece Challenge"}
        img={"/gallery_1.png"}
        altText={"project img, MAsterpiece Challenge"}
        pageLink={"null"}
        gitLink={"https://github.com/k4nkan/Lit-Kansai-Hackathon-2024"}
        detail={
          "ハッカソンで作成, ゲーム感覚でプログラミングスキルを伸ばせます"
        }
        tech={"React, Next.js, TypeScript, Firebase, CodeMirror, etc"}
      />
    </div>
  );
};

export default Home;
