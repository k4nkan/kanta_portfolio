import Header from "../components/HeaderComponent/Header";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import useMedia from "use-media";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isDesktop = useMedia({ minWidth: "640px" });

  return (
    <div className="min-w-[320px]">
      {isDesktop ? <Header /> : <Header />}
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
