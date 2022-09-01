import React from 'react'

const Contactus = () => {
  return (
    <section>
        <div className='flex sm:flex-row flex-col '>
            <div>
               <h1 className='font-poppins font-semibold text-[40px] sm:text-[28px] lg:text-[45px] xl:text-[55px] text-center sm:text-start sm:w-[250px] md:w-[220px] lg:w-[350px] xl:w-[450px]'>Contact Us From Here</h1>
               <p className='font-poppins font-normal text-[18px] sm:text-[12px]  text-[#777776] lg:text-[15px] xl:text-[23px] text-center mt-5 mb-5 sm:text-start sm:w-[250px] md:w-[220px] lg:w-[300px] xl:w-[440px]'>You can contact us from here, you can write to us, call us or visit our service center, we will gladly assit you.</p>
            </div>
            <div className='text-center space-y-2 lg:my-auto sm:mx-auto sm:my-auto'>
                <p className='font-bold'>Telephone: <span className='font-bold text-[#777776]'>(+94) 7560 490 15</span></p>
                <p className='font-bold'>Email: <span className='font-bold text-[#777776]'>delivery@gmail.com</span></p>
                <p className='font-bold'>Location: <span className='font-bold text-[#777776]'>Mirigama - Sri Lanka</span></p>
            </div>
            <div className='my-4 mx-auto lg:my-auto md:mx-auto md:my-auto'>
                <button className='bg-[#FDC72D] rounded-full font-semibold items-center font-poppins text-[20px] p-3 md:flex sm:hidden  '>
                Contact Us
                </button>
            </div>
        </div>
    </section>
  )
}

export default Contactus