import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

type CustomAvatarProps = {
  src: string;
  alt: string;
};

export const CustomAvatar = ({ src, alt }: CustomAvatarProps) => {
  return (
    <Avatar.Root  className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image src={src} alt={alt}   className="h-full w-full rounded-[inherit] object-cover"/>
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        EV

        </Avatar.Fallback>
    </Avatar.Root>
  );
};
