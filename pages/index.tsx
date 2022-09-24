import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shortly - Shorten your URLs</title>
      </Head>
      <div className="px-28">
        <Navbar />
      </div>
    </>
  );
};

export default Home;
