import type { NextPage } from "next";
import Image from "next/image";

export type NavType = {
  className?: string;
};

const Nav: NextPage<NavType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-black flex flex-row items-center justify-center py-2.5 z-[99] text-left text-sm text-white font-montserrat ${className}`}
    >
      <Image
        className="h-10 w-10 relative overflow-hidden shrink-0"
        loading="lazy"
        width={40}
        height={40}
        alt=""
        src="/img5611hdsvg.svg"

      />
      <div className="">

      </div>
    </header>
  );
};

export default Nav;