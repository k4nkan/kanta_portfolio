import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageAnimation } from "../components/Animations/Animations";
import Skills from "../components/TopPageComponent/Skills";
import Link from "next/link";
import Products from "../components/TopPageComponent/Products";

export default function Home() {
  const top_image = "/profile_images/top.jpeg";
  const section_style = "flex justify-center w-full";
  const section_container =
    "flex flex-col w-full max-w-[1200px] px-20 py-20 gap-8";

  return (
    <>
      {/* First View */}
      <section
        id="firstview"
        className="flex justify-center items-center bg-white bg-opacity-60"
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <AnimatePresence>
          <motion.img
            {...ImageAnimation}
            src={top_image}
            alt="Portfolio"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          />
        </AnimatePresence>

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl md:text-6xl">Kanta Yamauchi</h1>
          <p className="text-1xl md:text-2xl">This is my portfolio</p>
        </div>
      </section>

      {/* About セクション */}
      <section id="about" className={`${section_style} bg-white`}>
        <div className={section_container}>
          <h2 className="text-4xl font-bold">About</h2>
          <p className="text-lg md:text-xl">
            立命館大学 情報理工学部
            システムアーキテクトコースで学ぶ大学3年生です。
            <br />
            プログラミングしつつ、ブレイクダンス踊ったり、ITキャンプのメンターやったりしてます。
            <br />
            超絶ポジティブで適応力が高いと自負しております。
            <br />
            フロントエンドをメインに学んできましたが、バックエンドやデザインにも興味があり、学んでいます！
          </p>
        </div>
      </section>

      {/* History セクション */}
      <section id="history" className={`${section_style} bg-gray-100`}>
        <div className={section_container}>
          <h2 className="text-4xl font-bold">History</h2>
          <table className="w-full text-xl table-auto">
            <thead>
              <tr>
                <th className="text-left border-b px-4 py-2">Year</th>
                <th className="text-left border-b px-4 py-2">Event</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">2004</td>
                <td className="px-4 py-2">ドイツ、エスリンゲンにて爆誕</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2005</td>
                <td className="px-4 py-2">イギリス、ロンドンに引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2006</td>
                <td className="px-4 py-2">フランス、パリに引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2012</td>
                <td className="px-4 py-2">日本、奈良に引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2016</td>
                <td className="px-4 py-2">イタリア、ミラノに引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2018</td>
                <td className="px-4 py-2">マルタ島に語学留学 </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2019</td>
                <td className="px-4 py-2">日本、京都に引っ越し </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2022</td>
                <td className="px-4 py-2">立命館大学に入学</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Skills セクション */}
      <section id="skills" className={`${section_style} bg-white`}>
        <div className={`${section_container} items-center`}>
          <h2 className="text-4xl font-bold">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Skills img="/skills_icons/ts.png" level={70} title="TypeScript" />
            <Skills img="/skills_icons/js.png" level={50} title="JavaScript" />
            <Skills img="/skills_icons/html.png" level={80} title="HTML" />
            <Skills img="/skills_icons/css.png" level={80} title="CSS" />
            <Skills img="/skills_icons/c.png" level={60} title="C" />
            <Skills img="/skills_icons/Python.png" level={70} title="Python" />
            <Skills img="/skills_icons/Pr.png" level={60} title="Premier Pro" />
            <Skills
              img="/skills_icons/Ae.png"
              level={60}
              title="After Effect"
            />
            <Skills img="/skills_icons/Ai.png" level={40} title="Illustrator" />
          </div>
        </div>
      </section>

      {/* Product セクション */}
      <section id="product" className={`${section_style} bg-gray-100`}>
        <div className={section_container}>
          <h2 className="text-4xl font-bold">Product</h2>
          <p className="mt-4 text-lg">
            制作したプロダクトを紹介します。
            <br />
            他のプロダクトについては、ギャラリーページにあります。
          </p>
          <div className="flex max-lg:flex-col max-lg:items-center gap-8">
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
          <a
            href={"/gallery"}
            className="flex items-center justify-center p-3 border-2 border-black text-lg rounded-xl w-full max-lg:max-w-[600px] mx-auto"
          >
            more
          </a>
        </div>
      </section>

      {/* Contact セクション */}
      <section id="contact" className={`${section_style} bg-white`}>
        <div className={section_container}>
          <h2 className="text-4xl font-bold">Links</h2>
          <p>
            <Link href={"/links"}>こちら</Link> のページからどうぞ！
          </p>
        </div>
      </section>

      {/* Footer セクション */}
      <section id="Footer" className={`${section_style} bg-gray-100`}>
        <div className={section_container}>
          <div>
            icons by &nbsp;
            <Link href={"https://icons8.com"}>Icons8</Link>
          </div>
        </div>
      </section>
    </>
  );
}
