import React from 'react'

const Card = ({title, imag , cont , lrnmore}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5 mx-auto border-2 shadow-xl hover:bg-gray-100'>
        <div>
            <h1 className='text-center text-[20px] font-bold'>{title}</h1>
        </div>
        <div>
            <img src={imag} alt="image service" className='mx-auto my-5' />
        </div>
        <div>
            <p className='font-poppins font-normal text-[18px]  text-center  text-[#777776]'>{cont}
            </p>
        </div>
        <div>
            <p className='text-center font-bold cursor-pointer py-5'>{lrnmore}</p>
        </div>
    </div>
  )
}

export default Card