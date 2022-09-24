import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    //   desktop view
    <nav className="flex justify-between pt-10">
      <div className="flex gap-8 items-center text-[#bfbfbf] font-semibold">
        <Link href="/">
          <a className="mr-4">
            <Image src="/logo.svg" alt="Shortly" height={35} width={140} />
          </a>
        </Link>
        <p>Features</p>
        <p>Prices</p>
        <p>Resources</p>
      </div>
      <div className="flex gap-8 items-center text-[#bfbfbf] font-semibold">
        <p>Login</p>
        <p>Sign Up</p>
      </div>
    </nav>
  );
};

export default Navbar;
