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
          <a href="/">
            <p>Features</p>
          </a>
          <a href="/">
            <p>Prices</p>
          </a>
          <a href="/">
            <p>Resources</p>
          </a>
        </div>
        <div className="flex xl:gap-8 md:gap-3 items-center text-[#bfbfbf] font-semibold">
          <Link href="/">
            <a>
              <p>Login</p>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p className="bg-[#2acfcf] text-white px-3 py-2 rounded-full text-sm">
                Sign Up
              </p>
            </a>
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
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
          <div className="grid gap-8">
            <p>Login</p>
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
