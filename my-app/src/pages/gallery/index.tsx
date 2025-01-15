import GalleryLinks from "../../components/GalleryLinks";

const Home = () => {
  return (
    <div>
      <div>this is gallery</div>
      <GalleryLinks
        title={"就活メールつくるくん"}
        img={"/gallery_1.png"}
        altText={"project img, 就活メールつくるくん"}
        pageLink={""}
        gitLink={"https://github.com/k4nkan/hackathon-2023-TeamC"}
      />
    </div>
  );
};

export default Home;
