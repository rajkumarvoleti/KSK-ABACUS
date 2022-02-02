import Head from "next/head";
import About from "../components/About";
import CarouselComp from "../components/CarouselComp";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KSK-Abacus</title>
        <meta name="description" content="Abacus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="center">
        <Intro />
        <Info />
        <About />
        <CarouselComp />
        <Footer />
      </div>
    </div>
  );
}
