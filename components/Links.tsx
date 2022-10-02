import Link from "next/link";
import React, { useState } from "react";

const Links = ({ data }: IData) => {
  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(data.result.short_link);
    setButtonText("Copied!");
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex md:flex-row justify-between flex-col md:items-center items-start bg-white px-6 py-4 md:py-2 rounded-md gap-2 md:gap-0">
        <p className="border-b-[#cccccc] border-b md:border-none w-full md:w-max pb-2 md:pb-0">
          {data?.result?.original_link}
        </p>
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-4 gap-3 w-full md:w-max">
          <Link href={data?.result?.full_short_link}>
            <a target="_blank" rel="noreferrer" className="text-[#2acfcf]">
              {data?.result?.short_link}
            </a>
          </Link>
          <button
            className="bg-[#2acfcf] text-white px-8 py-2 rounded-md cursor-pointer w-full md:w-max text-center focus:bg-slate-800"
            onClick={handleCopy}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;
