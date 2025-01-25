import GalleryLinks from "../../components/GalleryLinks";

const Home = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center pt-[65px]"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <div className="text-center text-4xl">My Gallery</div>
      <div className="text-center text-xl">これまでの制作物です</div>
      <div className="grid grid-cols-2 gap-3 max-w-[600px] md:grid-cols-3 md:max-w-[1000px] w-11/12">
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
          img={"/gallery_2.png"}
          altText={"project img, MAsterpiece Challenge"}
          pageLink={"null"}
          gitLink={"https://github.com/k4nkan/Lit-Kansai-Hackathon-2024"}
          detail={
            "ハッカソンで作成, ゲーム感覚でプログラミングスキルを伸ばせます"
          }
          tech={"React, Next.js, TypeScript, Firebase, CodeMirror, etc"}
        />
        <GalleryLinks
          title={"ポートフォリオサイト"}
          img={"/gallery_3.png"}
          altText={"project img, my portfolio"}
          pageLink={"null"}
          gitLink={"https://github.com/k4nkan/Lit-Kansai-Hackathon-2024"}
          detail={"ポートフォリオサイトです。"}
          tech={"React, Next.js, TypeScript, FramerMotion, etc"}
        />
      </div>
    </div>
  );
};

export default Home;
