"use client";
import Button from "@/@common/Button";
import { headerLinks } from "@/constants/header";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex mx-6 justify-between my-4">
      <button
        onClick={() => router.push("/")}
        className="text-xl cursor-pointer"
      >
        tender
      </button>
      <div className="flex gap-8">
        {headerLinks.map((item) => (
          <button
            key={item.name}
            className="text-opacity-70 hover-underline-animation"
          >
            {item.name}
          </button>
        ))}
        <Button text="Sign up" onClickAction={() => {}} />
      </div>
    </header>
  );
};

export default Header;
