import React from 'react'
import Card from './Card'
import { services } from '../constants' 

const Service = () => {
  return (
    <section id='service' className='mt-10'>
        <div>
            <h1 className='text-center font-poppins font-semibold text-[40px]'>Some Services We Offer</h1>
        </div>
        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mt-10 mb-10'>
            {services.map((card) => (
                <Card key={card.id} {...card}/>
            ))}
        </div>
    </section>
  )
}

export default Service