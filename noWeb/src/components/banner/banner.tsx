import React from 'react';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Avatar from '../../assets/Avatar.png';
import Avatar3 from '../../assets/Avatar-3imgs.png';
import ImagBanner from '../../assets/image.png';

export function Banner() {
  return (
<section className="w-full font-sans">
      <div className="max-w-7xl mx-auto container p-8">
        {/* Texto pequeno no topo */}
        <div className="pl-16 mb-4">
          <p className="text-sm text-gray-700">
            Great Design Services <br />
            Without The Pretentiousness.!
          </p>
        </div>

        {/* 3 colunas */}
        <div className="flex gap-8 items-center">
          {/* Coluna 1 - Título */}
          <div className="flex-1 pl-16">
            <h1 className="text-9xl font-gallery font-normal leading-none">
              Digital
            </h1>
          </div>

          {/* Coluna 2 - Texto + botão */}
       <div className="flex-1 flex flex-col text-gray-700 text-sm">
          <p className="mb-4 font-poppins">
            We believe that the surest measure of success is when our partners
            with us more than half. It's more than just the visuals. We're
            here to support your growth.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-black font-semibold decoration-1 underline self-end"
          >
            View All Services
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </a>
        </div>


          {/* Coluna 3 - Avatares + texto */}
        <div className="flex-1 flex flex-col items-start md:items-center">
          <div className="flex flex-col items-center gap-2">
            {/* Avatares sobrepostos */}
            <div className="flex -space-x-3">
              <img src={Avatar3} alt="" />
            </div>

            {/* Texto de reviews */}
            <p className="text-sm font-medium text-center">
              Excellent <b>4.000+</b> Reviews
            </p>
          </div>
        </div>
        </div>

    <div className="flex  items-center gap-24">
      {/* Div do botão verde com texto e ícone */}
        <div className="flex items-center mt-6 pl-16">
            <button className="bg-lime-400 text-black font-bold px-6 py-2 rounded rounded-2xl">
              <p className='pr-5 font-medium '>WEB <br /> DESIGN</p>
              
            </button>
          <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center shadow-lg">
            {/* Avatar estilizado */}
            <img
            src={Avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
 
      {/* Div do texto Solution */}
      <div>
        <h1 className="text-9xl font-gallery font-normal text-black">Solution</h1>
      </div>
    </div>
      </div>
        <div className="w-full">
        <img
          src={ImagBanner}
          alt="Banner full width"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
