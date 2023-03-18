import React from "react";
import Logo from "../../../public/logo.svg";
import { routes } from "../../../data/routes";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  const renderLinks = (start: number, end: number) => {
    return routes.slice(start, end).map((route: any) => {
      return (
        <Link className="p-3" href={route.path} key={route.name}>
          <li className="text-graydark mb-[1px] flex items-center w-full space-x-3 capitalize hover:text-[#5F6165] rounded-md py-[6px] px-[7px] hover:bg-[#F3F5F8] text-sm font-medium lettercase">
            <div>{route.icon}</div>
            <div>{route.name}</div>
          </li>
        </Link>
      );
    });
  };
  return (
    <aside className="bg-graywhite drop-shadow-lg p-5 lg:flex flex-col justify-between  fixed hidden  z-40 w-[248px] h-screen ">
      <div className="top_contain">
        <div className="logo__area mb-8">
          <Image src={Logo} alt="logo" />
        </div>

        <div className="routes__contain">
          <ul className="routes__list">{renderLinks(0, 7)}</ul>
        </div>
      </div>

      <div className="bottom__contain  ">
        {" "}
        <ul className="routes__list">{renderLinks(7, 9)}</ul>
      </div>
    </aside>
  );
}
