import React, { useState, useEffect } from "react";

const Search = () => {
  const [data, setData] = useState<[] | any>([]);
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
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-11 z-50 relative -mb-16 bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-cover px-8 py-8 bg-[#3b3054] rounded-lg flex md:flex-row flex-col md:gap-12 gap-4">
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full h-full pl-6 py-3 rounded-lg outline-none"
          placeholder="Shorten a link here..."
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
      </form>
      <div
        className="bg-[#2acfcf] text-white rounded-lg cursor-pointer w-full md:w-40 py-3 md:py-0 grid place-items-center"
        onClick={handleSubmit}
      >
        Shorten It!
      </div>
    </div>
  );
};

export default Search;
