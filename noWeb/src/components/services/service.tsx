import React from 'react';
import Vector from '../../assets/Vector-services.png';
import './service.css';

export default function Services() {
  return (
    
    <section className="max-w-7xl mx-auto container px-30 py-20 ">
  <div className='flex flex-row '>
          <div className="spinner bg-black">
          <div className="center-circle"></div>
        </div>
        <div className='flex-2/3 flex-col pl-50'>
          <div className="container-circuloServies">
          <div className="badge-circulo badge-circulo-preto"></div>
          <div className="badge-circulo badge-circulo-laranja"></div>
        <span className="text-xs flex items-center uppercase tracking-widest text-gray-500 font-semibold pl-7 ">Services</span>
        </div>
    <div className='pl-7 pt-2'>
         <h2 className="text-4xl font-serif leading-tight mb-6 max-w-xl">
        Empowering Brands Through <br /> Strategic Digital Services
      </h2>
    </div>
    <div className='pl-25 pt-5 '>
        <p className="text-gray-400 max-w-md border-l-2 border-gray-300 pl-4 text-sm leading-relaxed">
        Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers,
      </p>
    </div>
      </div>
  </div>
        <span className="flex grow-1 h-px bg-gray-300 my-12"></span>
        <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-4">
          <div>
            <div className="relative border border-gray-200 p-8 w-[410px] h-[364px]">
  {/* Conteúdo do card */}
  <div className="flex flex-col gap-4">
    <span className="text-sm text-gray-400 flex items-center gap-2">
      <span className="w-1 h-1 bg-gray-400 rounded-full inline-block"></span>
      Visual Branding
    </span>

    <h3 className="text-3xl font-serif leading-tight">
      Web Design And <br /> Development
    </h3>

    {/* Ícone principal */}
    <div>
      <img src={Vector} alt="" />
      
    </div>

    <p className="text-gray-400 text-sm leading-relaxed">
      Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate
    </p>
  </div>

  {/* Círculo no canto com seta */}
  <div className="absolute hover:bg-green-200 -bottom-6 -right-6 w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
    <svg className='' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/></svg>
      </div>
    </div>
          </div>
          <div>02</div>
          <div>03</div>
        </div>
        </div>
</section>

  )
}
