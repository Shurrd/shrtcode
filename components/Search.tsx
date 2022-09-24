import React from "react";

const Search = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> | any = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <div className="mt-11 z-50 relative -mb-16 bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-cover px-8 py-8 bg-[#3b3054] rounded-lg flex md:flex-row flex-col md:gap-12 gap-4">
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full h-full pl-6 py-3 rounded-lg outline-none"
          placeholder="Shorten a link here..."
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
