import React from "react";
import Logo from "../../../public/logo.svg";
import { routes } from "../../../data/routes";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  const renderLinks = (start: number, end: number) => {
    return routes.slice(start, end).map((route: any) => {
      return (
        <Link href={route.path} key={route.name}>
          <li className="text-graydark capitalize hover:text-[#5F6165] rounded-md py-[7px] px-[8px] hover:bg-[#F3F5F8] text-sm font-medium lettercase">
            {route.name}
          </li>
        </Link>
      );
    });
  };
  return (
    <aside className="bg-red-200 p-5 flex flex-col justify-between  fixed  z-40 w-[248px] h-screen ">
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
