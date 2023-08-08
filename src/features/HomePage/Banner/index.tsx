"use client";

import Button from "@/@common/Button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="px-16 mt-2">
      <div className="flex ">
        <div className=" w-1/2 my-auto">
          <h1 className="font-bold text-7xl">
            Unlock Your Potenntial with Bartending School
          </h1>
          <p className="mt-4 w-1/2">
            School of bartenders where you will learn everything from mixlogy to
            customer service
          </p>
          <Button text="Sign up" onClickAction={() => {}} className="mt-2" />
        </div>
        <div className="relative w-1/2 aspect-square">
          <Image
            src={"/Images/HomePage/Banner/whiskey-glass.png"}
            fill={true}
            sizes={"1"}
            alt="hi"
          />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <p>1</p>
        <p className="text-gray-400 text-right w-1/3">
          &quot;Good drinks are like good friends - they lift your spirits and
          make you feel happy.&quot;
        </p>
      </div>
    </div>
  );
};

export default Banner;
