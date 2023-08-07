import { footerLinks, socialMediaArray } from "@/constants/footer";
import Image from "next/image";
import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-10 py-8 text-gray-300 flex justify-between items-end border-b-[1px] border-slate-600">
        <p className="font-semibold text-[230px] leading-none relative bottom-[-2rem]  opacity-70 ">
          tender
        </p>
        <section className="max-w-[300px] text-right h-fit">
          <div className="  opacity-70 ">
            <p> Do you want to be aware of the</p>
            <p> news and be the first to know about</p>
            <p> discounts and promotions?</p>
          </div>

          <div className="rounded-3xl border-[1px] w-fit flex justify-around  p-[2px] gap-2 ml-auto mt-3  ">
            <input
              className="rounded-2xl ml-2 p-[2px] placeholder:opacity-70 bg-black max-w-[200rem] focus:outline-none "
              placeholder="write your email"
            />
            <button className="bg-white text-black rounded-2xl px-6 py-1  opacity-70 hover:opacity-90 transition duration-300 ">
              Send
            </button>
          </div>
        </section>
      </div>
      <div className="mx-10 py-8 text-gray-300 flex justify-between items-end border-b-[1px] border-slate-600 ">
        <section className="text-2xl   opacity-70 ">
          <p>&quot;Bartending is not just about making</p>
          <p>drinks, it&apos;s about creating a moment that</p>
          <p>your customer will remember forever&quot;</p>
        </section>
        <section className="flex gap-[3rem] items-end mt-[8rem]">
          <ul>
            {footerLinks.slice(0, 4).map((item) => (
              <li key={item.name} className="  opacity-70 ">
                <span className="hover-underline-animation">{item.name}</span>
              </li>
            ))}
          </ul>
          <ul>
            {footerLinks.slice(4, 8).map((item) => (
              <li key={item.name} className="  opacity-70 ">
                <span className="hover-underline-animation">{item.name}</span>
              </li>
            ))}
          </ul>
          <div className="  opacity-70 ">
            <p>Amsterdam</p>
            <p>Mc De Lier 40/32</p>
            <p>+31 178 098 223</p>
          </div>
        </section>
      </div>
      <div className="mx-10 mt-10 flex justify-between relative text-white">
        <div className="flex gap-4 ">
          {socialMediaArray.map((item) => (
            <button
              key={item.name}
              className="border-[1px] border-slate-400  opacity-70  p-1 rounded-full hover:opacity-90 transition duration-300"
            >
              {item.icon}
            </button>
          ))}
        </div>
        <button className="border-[1px] border-slate-400  opacity-70  p-1 rounded-full  hover:opacity-90  transition duration-300 absolute right-0  ">
          <BiUpArrowAlt size={"2rem"} />
        </button>
      </div>
      <div className="mt-[3rem]">
        <Marquee>
          {[...new Array(4)].map((_, index) => (
            <div className="relative h-[8rem] w-[500px]" key={index}>
              <Image
                src={"/Images/footer/image1.png"}
                fill={true}
                sizes={"1"}
                alt="hi"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </footer>
  );
};

export default Footer;
