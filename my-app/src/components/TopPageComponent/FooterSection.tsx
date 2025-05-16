import Link from "next/link";

export default function FooterSection() {
  const section_style = "flex justify-center w-full";

  return (
    <section id="Footer" className={`${section_style} bg-gray-100`}>
      <div className="flex flex-col gap-2 p-4 items-center justify-center">
        <div>
          created by{" "}
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
  );
}
