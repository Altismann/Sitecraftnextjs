import type { NextPage } from "next";
import Image from "next/image";

export type NavType = {
  className?: string;
};

const Nav: NextPage<NavType> = ({ className = "" }) => {
  return (
    <header
      className={`w-full bg-black flex flex-row items-center justify-center py-2.5 px-[847px] gap-[30px] top-[0] z-[99] sticky text-left text-sm text-white font-montserrat lg:pl-[423px] lg:pr-[423px] lg:box-border ${className}`}
    >
      <Image
        className="h-10 w-10 relative overflow-hidden shrink-0"
        loading="lazy"
        width={40}
        height={40}
        alt=""
        src="/img5611hdsvg.svg"
      />
      <div className="w-[120.6px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
        <div className="self-stretch h-5 relative">
          <a className="[text-decoration:none] absolute top-[0px] left-[0px] leading-[20px] font-bold text-[inherit] flex items-center w-[37.1px] h-5 min-w-[37.1px]">
            Start
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[66.1px] leading-[20px] font-bold text-[inherit] flex items-center w-[55.5px] h-5 min-w-[55.5px] whitespace-nowrap">
            Mitt CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
