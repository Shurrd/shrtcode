import React, { Dispatch } from "react";

const Search = ({
  url,
  setUrl,
  handleSubmit,
}: {
  url: string;
  setUrl: Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
}) => {
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
      <button
        className="bg-[#2acfcf] text-white rounded-lg cursor-pointer w-full md:w-40 py-3 md:py-0 grid place-items-center focus:bg-slate-800"
        onClick={handleSubmit}
      >
        Shorten It!
      </button>
    </div>
  );
};

export default Search;
