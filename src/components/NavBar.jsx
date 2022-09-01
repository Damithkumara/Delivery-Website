import React from "react";
import { useState } from "react";
import { navLinks } from "../constants";
import { Menu, Close, Logo } from "../assets";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={Logo} alt="logo" className="w-[50px] h-[50px]" />

      <ul className="list-none md:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal  cursor-pointer text-[20px] text-black ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>

          </li>

        ))}
      </ul>
      <button className='bg-[#FDC72D] rounded-full font-semibold font-poppins text-[20px] p-3 md:flex hidden'>
                        Order Now!
        </button>

      {/* mobile view */}

      <div className="md:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? Close : Menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-500 absolute top-20 left-6 right-6 mt-5 rounded-xl `}
        >
          <ul className="list-none flex flex-col justify-end items-end font-poppins  flex-1">
            {navLinks.map((nav, index) => (
              <li
                className={`font-poppins font-normal cursor-pointer text-[20px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <button
          className={`${
            toggle ? "flex" : "hidden"} absolute bg-[#FDC72D] rounded-full font-semibold font-poppins text-[20px] p-3 `}> 
                Order Now!
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
