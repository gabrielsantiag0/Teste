import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import SystemLogo from '../../assets/SystemLogo.png';
import TechLogo from '../../assets/TechLogo.png';
import TechnologyLogo from '../../assets/TechnologyLogo.png';
import TechLogy from '../../assets/TechLogy.png';
import GrupoLogo from '../../assets/GrupoLogo.png'

import './about.css';
import '../../App.css'


export default function About() {
  return (
<section className="w-full p-8 bg-black" id='about'>
  <div className="max-w-7xl mx-auto container text-white px-4 sm:px-30 py-20">
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <div className='flex-auto sm:flex-1/6 mb-6 sm:mb-0'>
      <p className='text-3xl font-ma '>We collaborate with a few disability service br providers to create inclusive goods that meet their requirements.
      </p>
      </div>
      <div className='hidden sm:flex flex-none h-12 w-2 mx-8'></div>
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
      <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-10 sm:gap-15 text-center sm:text-left">
        <div className='flex-1'>
          <p className='text-center font-dm font-bold text-2xl'>25+</p> 
          <p className='text-center text-base font-bold font-dm'>Years of Experience</p>
        </div>
        <div className='flex-1 '>
             <div className="flex-1 flex flex-col">
          <p className="pt-2 mb-4 font-dm text-base max-w-md mx-auto sm:mx-0">
          Established in 1995, NEXIN has been a 
          leading force in the digital landscape 
          for over two decades. We're a passionate 
          team of designers,  
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
          <p className="pt-2 mb-4 font-dm text-sm max-w-md mx-auto sm:mx-0">
          Established in 1995, NEXIN has been a 
          leading force in the digital landscape 
          for over two decades. We're a passionate 
          team of designers,  
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
        <span className="px-4 text-2xl font-ma text-gray-200">We Worked With Global Largest Brands</span>
        <span className="flex grow-6 h-px bg-gray-600"></span>
      </div>

      <div className='mt-10'>
        <ul className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12'>
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
