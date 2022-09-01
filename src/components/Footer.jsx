import React from 'react'
import { Logo , Facebook , Instagram , Twitter } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className='md:mt-5 sm:mb-5 md:mb-5 lg:mb-5'>
        <div className='sm:flex-row flex-col w-full flex justify-center items-start '>
            <div className='flex-1 flex flex-col mx-auto '>
                <img src={Logo} className="w-10 h-10 mx-auto mt-2 md:ml-1"/>
                <p className='font-bold mt-5 md:w-[150px]'>Order Products Faster Easier</p>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-5'>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key}>  
                        <h4 className='mb-5 font-bold'>{footerLink.title}</h4>

                        <ul>
                            {footerLink.links.map((link) =>( 
                                <li className='text-[#777776] hover:font-bold' key={link.name}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>


                    </div>
                    
                ))}
                <div className='flex gap-3 md:my-5 my-5 mx-auto sm:mx-0 md-mx-0'>
                    <img src={Facebook} alt="socialmedia" className='w-8 h-8'/>
                    <img src={Twitter} alt="socialmedia" className='w-8 h-8'/>
                    <img src={Instagram} alt="socialmedia" className='w-8 h-8'/>
                </div>
            </div>
            
        </div>
        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-1 pb-1 border-t-[1px] border-t-[#3F3E45] my-2'>
        <p className='font-poppins  text-center text-[15px] font-bold text-[#777776]'>
          2022 DKOFFICIAL All Rights Reserved.
        </p>

      </div>
    </section>
  )
}

export default Footer