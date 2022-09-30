import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
const Advanced = dynamic(() => import("../components/Advanced"), {
  ssr: false,
});
import Boost from "../components/Boost";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const getStoredUrl = () => {
  if (typeof window !== "undefined") {
    let data = localStorage.getItem("data");
    if (data) {
      return JSON.parse(localStorage.getItem("data") as string);
    } else {
      return [];
    }
  }
};

const Home: NextPage = () => {
  const [data, setData] = useState<[] | any>(getStoredUrl());
  const [url, setUrl] = useState<string>("");

  const api = `https://api.shrtco.de/v2/shorten?url=${url}`;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | any = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      if (url === "") {
        alert("Input Field is Empty");
      } else {
        const response = await fetch(api);
        const data = await response.json();
        if (data.ok === false) {
          alert("Invalid Url");
        }
        setData(data);
        setUrl("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <Head>
        <title>Shortly - Shorten your URLs</title>
      </Head>
      <div className="md:px-16 lg:px-32 px-10 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Search url={url} setUrl={setUrl} handleSubmit={handleSubmit} />
        <Advanced data={data} />
        <Boost />
        <Footer />
      </div>
    </>
  );
};

export default Home;
