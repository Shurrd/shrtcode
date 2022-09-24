import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shortly - Shorten your URLs</title>
      </Head>
      <div className="md:px-28 px-10 overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
