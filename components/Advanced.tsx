import React from "react";
import Links from "./Links";

const Advanced = ({ data }: IData) => {
  return (
    <section className="bg-gray-200 -mx-32 px-32 flex flex-col items-center pb-20 pt-20 md:pb-40">
      <Links data={data} />
      <div className="text-center mt-16">
        <p className="text-[#35323e] text-2xl md:text-3xl font-bold">
          Advanced Statistics
        </p>
        <p className="text-[#adabab] mt-4 text-sm lg:max-w-lg max-w-xs">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="md:flex-row flex flex-col lg:gap-8 md:gap-3 gap-20 mt-16 relative feature">
        <div className="bg-white xl:pb-12 lg:pb-6 pb-12 pt-14 lg:pt-16 md:px-5 px-8 lg:px-8 rounded-md text-center md:text-start relative flex flex-col justify-center items-center md:items-start z-10 shadow-md">
          <img
            src="/icon-brand-recognition.svg"
            alt="icon"
            className="absolute top-[-13%] lg:top-[-13%] md:top-[-8%] bg-[#3b3054] px-3 py-3 rounded-full"
          />
          <p className="text-[22px] lg:text-[22px] text-[#232129] font-bold">
            Brand Recognition
          </p>
          <p className="text-[#adabab] lg:text-[0.95rem] text-[0.95rem] md:text-sm mt-5">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white xl:pb-12 lg:pb-6 pb-12 pt-14 lg:pt-16 md:px-5 px-8 lg:px-8 rounded-md text-center md:text-start relative md:mb-[-4%] md:mt-[4%] mb-0 mt-0 flex flex-col justify-center items-center md:items-start z-10 shadow-md">
          <img
            src="/icon-detailed-records.svg"
            alt="icon"
            className="absolute top-[-13%] lg:top-[-13%] md:top-[-8%] bg-[#3b3054] px-3 py-3 rounded-full"
          />
          <p className="text-[22px] text-[#232129] font-bold">
            Detailed Records
          </p>
          <p className="text-[#adabab] lg:text-[0.95rem] text-[0.95rem] mt-5 md:text-sm">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="bg-white xl:pb-12 lg:pb-6 pb-12 pt-14 lg:pt-16 md:px-5 px-8 lg:px-8 rounded-md text-center md:text-start relative md:mb-[-8%] md:mt-[8%] mb-0 mt-0 flex flex-col justify-center items-center md:items-start z-10 shadow-md">
          <img
            src="/icon-fully-customizable.svg"
            alt="icon"
            className="absolute top-[-14%] lg:top-[-14%] md:top-[-8%] lg:left-auto bg-[#3b3054] px-2 py-2 rounded-full"
          />
          <p className="text-[22px] text-[#232129] font-bold">
            Fully Customizable
          </p>
          <p className="text-[#adabab] lg:text-[0.95rem] text-[0.95rem] md:text-sm mt-5">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
