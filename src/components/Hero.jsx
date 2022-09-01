import React from "react";
import { HomeOne } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex max-w-[1280px] sm:flex-row flex-col lg:px-20 xl:px-40 md:px-20  sm:py-2`}>
      <div className="flex-1 xl:my-12 md:my-8 lg:my-8 xl:pt-12">
        <div className="justify-center items-center">
          <div>
            <h1 className="text-center sm:text-start text-[45px]  justify-center font-semibold items-center font-poppins sm:text-[35px] sm:w-[250px] md:w-[250px] lg:text-[50px] lg:w-[350px]">
              Order Products <br />
              Faster Easier
            </h1>
          </div>
          <div>
            <p className="text-center sm:text-start text-[#777776] mt-2  font-poppins sm:text-[12px] sm:w-[200px] lg:text-[18px] lg:w-[300px]">
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
          className="w-auto xl:max-h-[723px] xl:max-w-[600px] h-auto sm:w-[300px] sm:h-[250px] sm:scale-x-150 sm:scale-y-150 md:w-auto md:h-auto lg:w-auto lg:h-auto md:mr-0 md:pr-0"
        />
      </div>
    </section>
  );
};

export default Hero;
