import Header from "../components/Header";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="min-w-[320px]">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
