import React from 'react'
import {ServiceTwo , Apple , Google} from '../assets'

const Downloadapp = () => {
  return (
    <section id='download' className='pb-10'>
            <div className='flex sm:flex-row flex-col '> 
            <div className=' basis-1/2 mt-5'>
                <img src={ServiceTwo} alt="" />
            </div>
            <div className=' basis-1/2 my-auto text-center sm:text-start md:p-5'>
                <h1 className='font-poppins font-semibold text-[40px] sm:text-[28px] lg:text-[45px] xl:text-[55px]'>Watch Your Delivery At Any Time</h1>
                <p className='font-poppins font-normal text-[18px] sm:text-[12px]  text-[#777776] lg:text-[15px] xl:text-[23px]'>With our app you can view the route of your order, from our local headquaters to the place where you are. Look for the app now!</p>
                <div className='flex sm:flex-row flex-col  mt-5  items-center'>
                    <div className='basis-1/2'>
                    <button className='bg-[#FDC72D] rounded-full font-semibold font-poppins text-[20px] p-3 flex w-[200px] mb-5 sm:mb-0'> <img src={Apple} className="w-10 h-10 m-2"/>
                        <span className='mt-3 pr-3'>App Store</span>
                        </button>
                    </div>
                    <div className='basis-1/2'>
                    <button className='bg-[#FDC72D] rounded-full font-semibold  font-poppins text-[20px] p-3 flex '><img src={Google} className="w-10 h-10 m-2"/>
                        <span className='mt-3 pr-3'>Google Play</span>
                        </button>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Downloadapp