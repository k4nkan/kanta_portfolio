import GalleryLinks from "../../components/GalleryLinks";

const Home = () => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center pt-[65px]"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      <div className="text-center text-4xl pt-4">My Gallery</div>
      <div className="text-center text-xl">これまでの制作物です</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[600px] md:max-w-[1000px] w-11/12">
        <GalleryLinks
          title={"就活メールつくるくん"}
          img={"/gallery_images/gallery_1.png"}
          altText={"project img, 就活メールつくるくん"}
          pageLink={"null"}
          gitLink={"https://github.com/k4nkan/hackathon-2023-TeamC"}
          detail={
            "ハッカソンで作成, 就活における礼儀正しいメールを簡単に作成できます"
          }
          tech={"React, Next.js, TypeScript, Docker, Open AI api, etc"}
        />
        <GalleryLinks
          title={"MAsterpiece Challenge"}
          img={"/gallery_images/gallery_2.png"}
          altText={"project img, MAsterpiece Challenge"}
          pageLink={"null"}
          gitLink={"https://github.com/k4nkan/Lit-Kansai-Hackathon-2024"}
          detail={
            "ハッカソンで作成, マルチゲーム感覚でプログラミングスキルを伸ばせます"
          }
          tech={"React, Next.js, TypeScript, Firebase, CodeMirror, etc"}
        />
        <GalleryLinks
          title={"ポートフォリオサイト"}
          img={"/gallery_images/gallery_3.png"}
          altText={"project img, my portfolio"}
          pageLink={"https://kanta-portfolio.vercel.app/"}
          gitLink={"https://github.com/k4nkan/kanta_portfolio"}
          detail={"本ポートフォリオサイトです。"}
          tech={"React, Next.js, TypeScript, FramerMotion, etc"}
        />
        <GalleryLinks
          title={"color sync"}
          img={"/gallery_images/gallery_4.png"}
          altText={"project img, color sync"}
          pageLink={"https://color-sync-front.vercel.app/"}
          gitLink={"https://github.com/k4nkan/color-sync-front"}
          detail={
            "テーマを入力すると配色を提案してくれるサイトです。apiは別で作成し、デプロイしました。"
          }
          tech={"React, Next.js, TypeScript, Gemini AI, etc"}
        />
        <GalleryLinks
          title={"study clock"}
          img={"/gallery_images/gallery_5.png"}
          altText={"project img, study clock"}
          pageLink={"https://study-clock-sand.vercel.app/"}
          gitLink={"https://github.com/k4nkan/study-clock"}
          detail={
            "勉強に集中するために、パソコンを放置すれば放置するほど画面がオシャレになるサイトです。"
          }
          tech={"React, Next.js, TypeScript, FramerMotion, etc"}
        />
        <GalleryLinks
          title={"DISHdeCODE"}
          img="/gallery_images/gallery_6.jpeg"
          altText={"project img, DISHdeCODE"}
          pageLink={"null"}
          gitLink={"https://github.com/Shun4871/Dishcode"}
          detail={
            "数あるレシピサイトから、ユーザーに合うレシピを提案してくれるサイトです。（技育祭に向けて開発中）"
          }
          tech={"hono, bun, TypeScript, Python, browser-use etc"}
        />
      </div>
    </div>
  );
};

export default Home;
