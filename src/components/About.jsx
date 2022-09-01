import React from 'react'
import {AboutOne , AboutTwo} from '../assets'

const About = () => {
  return (
    <section id='about' className='mb-10 '>
        <div className='flex sm:flex-row flex-col-reverse mb-8'>
            <div className=' basis-1/2'>
                <img src={AboutOne} alt="" />
            </div>
            <div className=' basis-1/2 my-auto text-center p-2 sm:text-start md:p-5'>
                <h1 className='font-poppins font-semibold text-[40px] sm:text-[28px] lg:text-[45px] xl:text-[55px]'>Find Out A Little More About Us</h1>
                <p className='font-poppins font-normal text-[18px] sm:text-[12px]  text-[#777776] lg:text-[15px] xl:text-[23px]'>We are a company dedicated to the distribution of products by delivery to your home or to the place where you are, with the best quality of dellivery</p>
            </div>

        </div>
        <div className='flex sm:flex-row flex-col '> 
            <div className=' basis-1/2 my-auto text-center sm:text-start md:p-5'>
                <h1 className='font-poppins font-semibold text-[40px] sm:text-[28px] lg:text-[45px] xl:text-[55px]'>Your Safety Is Important</h1>
                <p className='font-poppins font-normal text-[18px] sm:text-[12px]  text-[#777776] lg:text-[15px] xl:text-[23px]'>When your order reaches you, we have the health safety protocols, so that you are protected from any disease. Watch the video of how the delivery is made.</p>
            </div>
            <div className=' basis-1/2 mt-5'>
                <img src={AboutTwo} alt="" />
            </div>

        </div>
    </section>
  )
}

export default About