import React from "react";
import { SearchIcon } from "../../../data/icons";

export function SearchBar() {
  return (
    <div className="bg-[#F5F4F6] space-x-3 divide-x-2 py-3 px-[14px] w-[358px] rounded-lg flex items-center  ">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search or type "
        className="w-full bg-[#F5F4F6]  rounded-md  text-sm font-medium  text-graydark4 focus:outline-none"
      />
    </div>
  );
}
