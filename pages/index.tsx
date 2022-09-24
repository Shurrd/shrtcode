import type { NextPage } from "next";
import Head from "next/head";
import Advanced from "../components/Advanced";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shortly - Shorten your URLs</title>
      </Head>
      <div className="md:px-28 px-10 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Search />
        <Advanced />
      </div>
    </>
  );
};

export default Home;
