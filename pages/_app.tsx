import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <div className="w-full h-auto relative ">
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </div>
    </div>
  );
}
