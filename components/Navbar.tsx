import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      {/* desktop view */}
      <nav className="md:flex justify-between pt-10 hidden">
        <div className="flex xl:gap-8 md:gap-2 items-center text-[#bfbfbf] font-semibold">
          <Link href="/">
            <a className="w-max flex justify-center mr-7">
              <Image src="/logo.svg" alt="Shortly" width={120} height={35} />
            </a>
          </Link>
          <p>
            <p className="hover:text-black">Features</p>
          </p>
          <p>
            <p className="hover:text-black">Prices</p>
          </p>
          <p>
            <p className="hover:text-black">Resources</p>
          </p>
        </div>
        <div className="flex xl:gap-8 md:gap-3 items-center text-[#bfbfbf] font-semibold">
          <Link href="/">
            <p>
              <p>Login</p>
            </p>
          </Link>
          <Link href="/">
            <p>
              <p className="bg-[#2acfcf] text-white px-3 py-2 rounded-full text-sm">
                Sign Up
              </p>
            </p>
          </Link>
        </div>
      </nav>

      {/* mobile view */}
      <nav className="pt-10 flex flex-col gap-8">
        <div className="flex justify-between md:hidden">
          <Link href="/">
            <a className="w-max flex justify-center">
              <Image src="/logo.svg" alt="Shortly" width={120} height={35} />
            </a>
          </Link>
          <Image
            src="/hamburger.svg"
            alt=""
            width={40}
            height={20}
            className="cursor-pointer"
            onClick={() => setShowNav((prev) => !prev)}
          />
        </div>
        <div
          className={
            showNav
              ? "flex flex-col bg-[#3b3054] text-white text-center px-8 py-10 rounded-lg font-semibold gap-4 md:hidden duration-150"
              : "hidden"
          }
        >
          <div className="border-b-[#646363] border-b grid gap-8 pb-8">
            <p className="cursor-pointer hover:text-[#2acfcf]">Features</p>
            <p className="cursor-pointer hover:text-[#2acfcf]">Pricing</p>
            <p className="cursor-pointer hover:text-[#2acfcf]">Resources</p>
          </div>
          <div className="grid gap-8">
            <p className="cursor-pointer hover:text-[#2acfcf]">Login</p>
            <p className="bg-[#2acfcf] text-white px-3 py-2 rounded-full text-sm cursor-pointer">
              Sign Up
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
