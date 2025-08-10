import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import SystemLogo from '../../assets/SystemLogo.png';
import TechLogo from '../../assets/TechLogo.png';
import VectorLogo from '../../assets/VectorLogo.png';
import TechnologyLogo from '../../assets/TechnologyLogo.png';
import TechLogy from '../../assets/TechLogy.png';
import GrupoLogo from '../../assets/GrupoLogo.png'

import './about.css';

export default function About() {
  return (
<section className="w-full p-8 font-sans bg-black">
  <div className="max-w-7xl mx-auto container text-white px-30 py-20">
    <div className="flex flex-row justify-center items-center">
      <div className='flex-1/6'>
      <p className='text-3xl'>We collaborate with a few disability service providers to create inclusive goods that meet their requirements.
      </p>
      </div>
      <div className='flex-1/6 flex-none bg-amber-700'></div>
      <div className='flex-1 items-end-safe'>
       <div className="flex justify-end flex-1">
<div className="containerCirculo">
    <div className="circleAbout left"></div>
    <div className="circleAbout right"></div>
    <div className="intersection"></div>
  </div> 
      </div>
      </div>
    </div>  
      <div className="flex flex-row justify-center items-center mt-10 gap-4">
        <div className='flex-1'>
          <p className='text-center text-bold text-6xl'>25+</p> 
          <p className='text-center text-medium'>Years of Experience</p>
        </div>
        <div className='flex-1 '>
             <div className="flex-1 flex flex-col">
          <p className="mb-4">
           Established in 1995, NEXIN has been a leading force
           in the digital landscape for over two decades. We're
           a passionate team of designers. 
          </p>
          <a
            href="#"
            className="inline-flex items-center font-bold decoration-1 underline "
          >
            More about us
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
        </div>
            <div className='flex-1 '>
             <div className="flex-1 flex flex-col">
          <p className="mb-4">
           Established in 1995, NEXIN has been a leading force
           in the digital landscape for over two decades. We're
           a passionate team of designers,  
          </p>
          <a
            href="#"
            className="inline-flex items-center font-bold decoration-1 underline "
          >
            Get in touch
            <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
        </div>
      </div>
      <div className="flex items-center w-full text-white mt-20">
        <span className="flex grow-1 h-px bg-gray-600"></span>
        <span className="px-4 text-bold">We Worked With Global Largest Brands</span>
        <span className="flex grow-6 h-px bg-gray-600"></span>
      </div>

      <div className='justify-center items-center mt-10'>
        <ul className='flex flex-row justify-center gap-12 img-logo-list'>
          <li className='img-logo'><a href="#" className="bg-white"><img src={TechLogo} alt="Brand 1" /></a></li>
          <li><a href="#" className="bg-white"><img src={TechnologyLogo} alt="Brand 2" /></a></li>
          <li><a href="#" className="bg-white"><img src={GrupoLogo} alt="Brand 2" /></a></li>
          <li><a href="#" className="bg-white"><img src={TechLogy} alt="Brand 3" /></a></li>
          <li><a href="#" className="bg-white"><img src={SystemLogo} alt="Brand 5" /></a></li>
        </ul>
      </div>

  </div>
</section>
  )
}
