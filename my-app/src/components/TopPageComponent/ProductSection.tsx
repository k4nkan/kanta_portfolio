import Products from "./Products";
import { motion } from "framer-motion";
import { MoreAnimation } from "../Animations/Animations";

export default function ProductSection() {
  const section_style = "flex justify-center w-full";
  const section_container =
    "flex flex-col w-full max-w-[1400px] px-20 max-sm:px-10 py-20 gap-4";

  return (
    <section id="product" className={`${section_style} bg-white`}>
      <div className={`${section_container} max-lg:max-w-[600px] mx-auto`}>
        <h2 className="text-4xl font-bold text-[#F8B133]">Product</h2>
        <p className="text-lg max-sm:text-sm font-mono">
          制作したプロダクトを紹介します。
          <br />
          他のプロダクトについては、ギャラリーページにあります。
        </p>
        <div className="flex max-lg:flex-col max-lg:items-center gap-6">
          <Products
            title="DISHdeCODE"
            img="/gallery_images/gallery_6.jpeg"
            text={`技育キャンプで作成、優秀賞を受賞しました！\n担当はバックエンドがメインで、Python使いながらbrowser-useと格闘しました。`}
          />
          <Products
            title="MAsterPieceChallenge"
            img="/gallery_images/gallery_2.png"
            text={`長期インターン先のハッカソンで作成、優秀賞を受賞しました！\nテックリード的なポジションで、フロントエンドもバックエンドもやりました！`}
          />
        </div>
        <motion.a
          {...MoreAnimation}
          href={"/gallery"}
          className="flex items-center justify-center p-3 border-2 border-[#F8B133] text-[#F8B133] text-2xl rounded-xl"
        >
          more
        </motion.a>
      </div>
    </section>
  );
}
