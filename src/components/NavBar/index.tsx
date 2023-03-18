import React from "react";
import { SearchBar } from "../SearchBar";
import { NotificationIcon } from "../../../data/icons";

export function NavBar() {
  return <nav className="  z-40 w-full fixed lg:pl-72 p-2 bg-white py-5">

<SearchBar />

<NotificationIcon />





  </nav>;
}
