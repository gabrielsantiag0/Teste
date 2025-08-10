import React from 'react'
import './service.css';

export default function Services() {
  return (
    
    <section className="max-w-7xl mx-auto container px-30 py-20 ">
    <div className='flex flex-row justify-items-center '>
        <div className='flex-1 flex-row'>
          <div className="spinner bg-black">
            <div className="center-circle"></div>
          </div>
        </div>
          <div className="icon-wrap-small">
            <div className="circle black"></div>
            <div className="circle ring"></div>
            <p className='pl-15 pt-4'>serviços</p>
          </div>          
        <div className='flex-1 flex'></div>
    </div>
    <div className='flex justify-center items-center border-l-2'>
      <h3 className='text-2xl'>Empowering Brands Through Strategic Digital Services</h3>
    </div>
    </section>
 
  )
}
