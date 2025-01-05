import useMedia from "use-media";
import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Home() {
  const isWide = useMedia({ minWidth: "375px" });

  return isWide ? <Desktop /> : <Mobile />;
}
