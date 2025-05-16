export default function About() {
  const section_style = "flex justify-center w-full";
  const section_container =
    "flex flex-col w-full max-w-[1400px] px-20 max-sm:px-10 py-20 gap-4";

  return (
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
              <th className="text-left border-b-2 border-[#E08199] px-2 py-2">
                Event
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2004", "ドイツ、エスリンゲンにて爆誕"],
              ["2005", "イギリス、ロンドンに引っ越し"],
              ["2006", "フランス、パリに引っ越し"],
              ["2012", "日本、奈良に引っ越し"],
              ["2016", "イタリア、ミラノに引っ越し"],
              ["2018", "マルタ島に語学留学"],
              ["2019", "日本、京都に引っ越し"],
              ["2022", "立命館大学に入学"],
              ["2024", "ライフイズテック株式会社にて長期インターン"],
            ].map(([year, event]) => (
              <tr key={year} className="border-b">
                <td className="py-2">{year}</td>
                <td className="py-2 px-2">{event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
