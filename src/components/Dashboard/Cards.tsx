import React from "react";

type Props = {
  title: string;
  icon: React.ReactNode;
  meterValue?: number;
  bgColor: string;
};

export const Cards = ({ title, icon, bgColor }: Props) => {
  return (
    <div
      className={`${bgColor} rounded-[14px] shadow-md h-[266px]  w-[87%] lg:w-[232px] p-3 text-primarydark my-7 first:text-white flex flex-col items-center  `}
    >
      <div className="py-2 leading-8">{icon}</div>

      <h1 className="text-2xl font-bold ">{title}</h1>
    </div>
  );
};
