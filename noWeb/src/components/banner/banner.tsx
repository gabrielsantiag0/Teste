import React from 'react';
import '../../App.css'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Avatar from '../../assets/Avatar.png';
import Avatar3 from '../../assets/Avatar-3imgs.png';
import ImagBanner from '../../assets/image.png';

export function Banner() {
  return (
<section className="w-full">
      <div className="max-w-7xl mx-auto container px-4 sm:px-6 md:px-30 py-10 md:py-20">
        <div className="pl-4 md:pl-16 mb-4">
          <p className="text-xs sm:text-sm md:text-sm font-dm text-gray-700">
            Great Design Services <br />
            Without The Pretentiousness.!
          </p>
        </div>


      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
          <div className="flex-1 pl-4 md:pl-16">
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-gallery leading-none text-center md:text-left">
              Digital
            </h1>
          </div>

       <div className="flex-1 flex flex-col text-gray-700 text-sm px-4 sm:px-0 text-center md:text-left">
          <p className="mb-4 font-dm text-sm md:text-sm">
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


        <div className="flex-1 flex flex-col items-center md:items-center mt-6 md:mt-0 px-4 sm:px-0">
          <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3">
              <img src={Avatar3} alt="" />
            </div>

            <p className="text-xs sm:text-sm font-medium font-dm text-center">
              Excellent <b>4.000+</b> Reviews
            </p>
          </div>
        </div>
        </div>

    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-24 mt-6 px-4 sm:px-0">
        <div className="flex items-center pl-4 md:pl-16">
            <button className="bg-lime-400 text-black font-bold px-6 py-2  rounded-2xl">
              <p className='pr-5 font-dm font-medium text-center md:text-left'>WEB <br /> DESIGN</p>
              
            </button>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl bg-black flex items-center justify-center shadow-lg -ml-7">
            <img
            src={Avatar}
            alt="Avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
          </div>
        </div>
 
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-9xl font-gallery font-normal text-black text-center md:text-left">Solution</h1>
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
