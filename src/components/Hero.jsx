import React from "react";
import { HomeOne } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex max-w-[1280px] sm:flex-row flex-col lg:px-20 xl:px-40 md:px-20  sm:py-2`}>
      <div className="flex-1 ">
        <div className="justify-center items-center">
          <div>
            <h1 className="text-[45px] w-[350px] justify-center font-semibold items-center font-poppins sm:text-[35px] sm:w-[250px] md:w-[250px] lg:text-[50px] lg:w-[350px]">
              Order Products <br />
              Faster Easier
            </h1>
          </div>
          <div>
            <p className="w-[270px] my-4 font-poppins sm:text-[12px] sm:w-[200px] lg:text-[18px] lg:w-[300px]">
              Order your favorite foods at any time and we will deliver them
              right to where you are.
            </p>
          </div>
        </div>

        {/* button get stard */}
        <div>
          <button className="bg-[#FDC72D] rounded-full font-semibold font-poppins text-[20px] p-3 mt-4 hidden sm:flex">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:my-0 relative z-01">
        <img
          src={HomeOne}
          alt="homeimgone"
          className="w-auto h-auto sm:w-[300px] sm:h-[250px] md:scale-x-150 md:scale-y-150 md:mr-0 md:pr-0"
        />
      </div>
    </section>
  );
};

export default Hero;
