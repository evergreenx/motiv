import React from "react";
import { SearchBar } from "../SearchBar";
import { NotificationIcon } from "../../../data/icons";
import { CustomAvatar } from "../Avatar";

export function NavBar() {
  return (
    <nav className="z-40 shadow w-full flex-row justify-between lg:pr-12 fixed flex  lg:pl-72 p-2 bg-white py-5">
      <SearchBar />

      <div className="nav__end flex items-center space-x-6 ">
        <NotificationIcon />

        <CustomAvatar src={'https://res.cloudinary.com/evergreenx/image/upload/v1644455293/1644455241214_oajzlo.jpg'} alt="user" />
      </div>
    </nav>
  );
}
