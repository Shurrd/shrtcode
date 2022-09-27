import React from "react";

const Hero = () => {
  return (
    <section className="mt-10 flex flex-col gap-7 md:gap-0 md:flex-row items-center justify-between">
      <div className="flex flex-col gap-3 lg:pr-12 text-center md:text-start items-center md:items-start">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] lg:leading-[1.25] md:leading-[1.25] text-[#35323e]">
          More than just shorter links
        </p>
        <p className="text-[#949292] md:pr-16">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <p className="bg-[#2acfcf] text-white px-5 py-2 rounded-full text-sm w-max mt-3 cursor-pointer">
          Get Started
        </p>
      </div>
      <div className="w-[850px] sm:pl-0 pl-56 sm:w-full h-[350px] md:h-[250px] sm:h-full md:w-[800px] lg:w-full lg:h-full md:order-last order-first md:-mr-32 xl:-mr-44 lg:-mr-44">
        <img
          src="/illustration-working.svg"
          alt=""
          loading="lazy"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
