import useMedia from "use-media";
import HeaderForDesktop from "./HeaderForDesktop";
import HeaderForMobile from "./HeaderForMobile";

export default function Header() {
  const isDesktop = useMedia({ minWidth: "450px" });
  return isDesktop ? <HeaderForDesktop /> : <HeaderForMobile />;
}
