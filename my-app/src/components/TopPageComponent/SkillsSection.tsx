import Skills from "./Skills";

export default function SkillsSection() {
  const section_style = "flex justify-center w-full";
  const section_container =
    "flex flex-col w-full max-w-[1400px] px-20 max-sm:px-10 py-20 gap-4";

  return (
    <section id="skills" className={`${section_style} bg-gray-100`}>
      <div className={`${section_container} items-center`}>
        <h2 className="text-4xl font-bold mb-4 text-[#1B706D]">Skills</h2>
        <h2 className="text-3xl mb-4 text-[#1B706D]">Programming Languages</h2>
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-left gap-8 max-sm:gap-2 px-4 py-4 rounded-xl">
            <Skills
              img="/skills_icons/ts.png"
              level={70}
              title="TypeScript"
              detail="フロントエンドにおいては、React, Next.js, Node.js などを使用します。バックエンドでは、Node.js や Express などを活用しながら使用しています。主に、ハッカソンや個人開発で使用しています。"
            />
            <Skills
              img="/skills_icons/js.png"
              level={70}
              title="JavaScript"
              detail="作成したバックエンドを叩いたり、DOM操作をしたりなどで主に使用しています。メンターとして教える際に使う教科書の制作なども行っています。"
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
          </div>
        </div>
        <h2 className="text-3xl mt-4 mb-4 text-[#1B706D]">Other Skills</h2>
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-left gap-8 max-sm:gap-2 px-4 py-4 rounded-xl">
            <Skills
              img="/skills_icons/Pr.png"
              level={70}
              title="Premiere Pro"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />
            <Skills
              img="/skills_icons/Ae.png"
              level={40}
              title="After Effects"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />
            <Skills
              img="/skills_icons/ps.png"
              level={40}
              title="Photoshop"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />{" "}
            <Skills
              img="/skills_icons/figma.png"
              level={80}
              title="Figma"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />{" "}
            <Skills
              img="/skills_icons/github.png"
              level={40}
              title="Git, Github"
              detail="高校の放送部で使い方を学びました。メンターとしてITキャンプで中高生に教えたりもしています。"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
