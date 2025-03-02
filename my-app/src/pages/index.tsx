import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ImageAnimation,
  MoreAnimation,
  TopButtonAnimation,
} from "../components/Animations/Animations";
import Skills from "../components/TopPageComponent/Skills";
import Link from "next/link";
import Products from "../components/TopPageComponent/Products";

export default function Home() {
  const top_image = "/profile_images/top.jpeg";
  const section_style = "flex justify-center w-full";
  const section_container =
    "flex flex-col w-full max-w-[1200px] px-20 max-sm:px-10 py-20 gap-4";

  return (
    <>
      <motion.a
        {...TopButtonAnimation}
        href="/#firstview"
        className="flex items-center justify-center fixed w-12 h-12 bottom-6 right-6 z-10 rounded-full bg-white border-2 border-black"
      >
        TOP
      </motion.a>

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
          <h2 className="text-4xl font-bold text-[#E08199]">About</h2>
          <p className="text-lg max-sm:text-sm font-mono">
            立命館大学 情報理工学部
            システムアーキテクトコースで学ぶ大学3年生です。
            <br />
            プログラミングしつつ、ブレイクダンス踊ったり、ITキャンプのメンターやったりしてます。
            <br />
            超絶ポジティブで適応力が高いと自負しております。
            <br />
            フロントエンドをメインに学んできましたが、バックエンドやデザインにも興味があり、学んでいます！
          </p>
          <h3 className="text-2xl font-bold mt-4 text-[#E08199]">My History</h3>
          <table className="w-full text-xl max-sm:text-sm table-auto font-mono">
            <thead>
              <tr>
                <th className="text-left border-b-2 border-[#E08199] py-2">
                  Year
                </th>
                <th className="text-left border-b-2  border-[#E08199] px-2 py-2">
                  Event
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">2004</td>
                <td className="py-2 px-2">ドイツ、エスリンゲンにて爆誕</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2005</td>
                <td className="py-2 px-2">イギリス、ロンドンに引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2006</td>
                <td className="py-2 px-2">フランス、パリに引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2012</td>
                <td className="py-2 px-2">日本、奈良に引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2016</td>
                <td className="py-2 px-2">イタリア、ミラノに引っ越し</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2018</td>
                <td className="py-2 px-2">マルタ島に語学留学 </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2019</td>
                <td className="py-2 px-2">日本、京都に引っ越し </td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2022</td>
                <td className="py-2 px-2">立命館大学に入学</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">2024</td>
                <td className="py-2 px-2">
                  ライフイズテック株式会社にて長期インターン
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Skills セクション */}
      <section id="skills" className={`${section_style} bg-gray-100`}>
        <div className={`${section_container} items-center`}>
          <h2 className="text-4xl font-bold mb-4 text-[#1B706D]">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8 max-sm:gap-2">
            <Skills
              img="/skills_icons/ts.png"
              level={70}
              title="TypeScript"
              detail="一番力を入れて学習しています。React, Next.js, Node.js などもよく使用します。ハッカソンや個人開発でよく活用しています。"
            />
            <Skills
              img="/skills_icons/js.png"
              level={40}
              title="JavaScript"
              detail="最近、デザインを学びつつ、jQueryを用いながら学習中です。"
            />
            <Skills
              img="/skills_icons/html.png"
              level={80}
              title="HTML"
              detail="サークルや大学においてかなり時間をかけて学びました。メンターとして中高生に教えたこともあります。"
            />
            <Skills
              img="/skills_icons/css.png"
              level={80}
              title="CSS"
              detail="サークルや大学においてかなり時間をかけて学びました。メンターとして中高生に教えたこともあります。"
            />
            <Skills
              img="/skills_icons/c.png"
              level={60}
              title="C"
              detail="大学でがっつり学びました。大変でした。オセロやインベーダーゲーム、勤怠管理のプログラムなどを作成しました。"
            />
            <Skills
              img="/skills_icons/Python.png"
              level={70}
              title="Python"
              detail="中学の時に独学で初めて学んだプログラミング言語です。現在は大学における研究やハッカソンいおけるバックエンド開発などで使用しています。"
            />
            <Skills
              img="/skills_icons/Pr.png"
              level={60}
              title="Premier Pro"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />
            <Skills
              img="/skills_icons/Ae.png"
              level={60}
              title="After Effect"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />
            <Skills
              img="/skills_icons/Ai.png"
              level={40}
              title="Illustrator"
              detail="デザインを勉強する中で使い方を学びました。難しいです。"
            />
          </div>
        </div>
      </section>

      {/* Product セクション */}
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

      {/* Footer セクション */}
      <section id="Footer" className={`${section_style} bg-gray-100`}>
        <div className="flex flex-col gap-2 p-4 items-center justify-center">
          <div>
            created by
            <a className="text-[#ED335A]" href="/links">
              Kanta Yamauchi
            </a>
          </div>
          <div>
            icons by &nbsp;
            <Link href={"https://icons8.com"}>Icons8</Link>
          </div>
        </div>
      </section>
    </>
  );
}
