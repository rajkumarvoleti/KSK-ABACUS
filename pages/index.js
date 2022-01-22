import Head from "next/head";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KSK-Abacus</title>
        <meta name="description" content="Abacus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Intro />
      </div>
    </div>
  );
}
