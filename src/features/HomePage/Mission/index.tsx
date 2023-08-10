import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <div className="px-16 mb-16">
      <p className="text-gray-400 text-center text-lg">Mission</p>
      <h2 className="text-center text-4xl mt-4 w-[55%] mx-auto ">
        Our mission is to educate and inspire students to become professional
        bartenders
      </h2>
      <div className="relative w-1/3 aspect-square mx-auto mt-10">
        <Image
          src={"/Images/HomePage/Banner/whiskey-glass.png"}
          fill={true}
          style={{
            aspectRatio: "4/3",
          }}
          sizes={"1"}
          alt="hi"
        />
      </div>
      <section className="text-gray-400 mx-auto w-fit mt-4">
        <p className="text-black w-fit mx-auto text">Negroni</p>
        <div className="flex text-gray-400 gap-1 w-fit mx-auto">
          <div className="w-[2rem] bg-gray-400 h-[2px] rounded-md my-auto" />
          <p className="mt-[-2px] "> &#x2022;</p>
          <div className="w-[2rem] bg-gray-400 h-[2px] rounded-md my-auto" />
        </div>
        <p className="w-fit mx-auto">1919</p>
        <div className="">
          <hr />
          <div className="flex gap-1 opacity-50 ">
            <p className="">hiiehfiwheifo</p>
            <p> &#x2022;</p>
            <p className="">hiiwehfiwhefo</p>
            <p> &#x2022;</p>
            <p className="">hiiwehfiowhefoi</p>
            <p> &#x2022;</p>
            <p className="">hiopwejfpowjef</p>
          </div>
          <hr />
        </div>
      </section>
    </div>
  );
};

export default Mission;
