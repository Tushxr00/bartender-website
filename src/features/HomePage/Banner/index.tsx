"use client";

import Button from "@/@common/Button";
import Image from "next/image";
import React from "react";

const AwwardConstant = [
  "/Images/HomePage/Banner/awards/banner-sub-1.png",
  "/Images/HomePage/Banner/awards/banner-sub-2.png",
  "/Images/HomePage/Banner/awards/banner-sub-3.png",
];
const BrandImages = [
  "/Images/HomePage/Banner/brands/company-logo-1.png",
  "/Images/HomePage/Banner/brands/company-logo-2.png",
  "/Images/HomePage/Banner/brands/company-logo-3.png",
  "/Images/HomePage/Banner/brands/company-logo-4.png",
  "/Images/HomePage/Banner/brands/company-logo-5.png",
];
const Banner = () => {
  return (
    <>
      <div className="px-16 mt-2">
        <div className="flex ">
          <div className=" w-1/2 my-auto">
            <h1 className="font-bold text-7xl">
              Unlock Your Potenntial with Bartending School
            </h1>
            <p className="mt-4 w-1/2">
              School of bartenders where you will learn everything from mixlogy
              to customer service
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
          <div className="flex gap-5 w-auto">
            {AwwardConstant.map((item) => (
              <div
                className="relative w-[5rem] "
                style={{
                  aspectRatio: "4/3",
                  objectFit: "contain",
                  mixBlendMode: "color-burn",
                  filter: " grayscale(1)",
                }}
                key={item}
              >
                <Image src={item} fill={true} sizes={"1"} alt="hi" />
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-right w-1/3">
            &quot;Good drinks are like good friends - they lift your spirits and
            make you feel happy.&quot;
          </p>
        </div>
      </div>
      <div className="my-12">
        <hr />
        <div className="flex gap-5 justify-around  px-6">
          {BrandImages.map((item) => (
            <div
              className="relative w-[9rem] my-8"
              style={{
                aspectRatio: "4/3",
                objectFit: "contain",
              }}
              key={item}
            >
              <Image
                src={item}
                fill={true}
                sizes={"1"}
                alt="hi"
                style={{
                  mixBlendMode: "color-burn",
                }}
              />
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Banner;
