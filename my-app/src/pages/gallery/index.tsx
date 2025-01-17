import GalleryLinks from "../../components/GalleryLinks";

const Home = () => {
  return (
    <div>
      <div>this is gallery</div>
      <GalleryLinks
        title={"就活メールつくるくん"}
        img={"/gallery_1.png"}
        altText={"project img, 就活メールつくるくん"}
        pageLink={"null"}
        gitLink={"https://github.com/k4nkan/hackathon-2023-TeamC"}
        detail={"ハッカソンで作成, 就活におけるメールを簡単に作成できます"}
        tech={"React, Next.js, TypeScript, Docker, Open AI api, etc"}
      />
    </div>
  );
};

export default Home;
