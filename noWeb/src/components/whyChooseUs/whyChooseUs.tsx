import React from 'react'
import img2 from '../../assets/img-computer.png'
import coworking from '../../assets/coworking.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'

export default function WhyChooseUs() {
  return (
    <div className='w-full 'style={{ backgroundColor: '#f8f8f8' }}>
<div className="max-w-7xl mx-auto container flex justify-center py-16 px-10 gap-10">
<div className="flex flex-col justify-center">

    <div className='flex-auto pl-15'>
  <div className="mb-10 flex justify-start ">
            <div className="container-circuloServies flex justify-center items-center gap-5">
          <div className="badge-circulo badge-circulo-preto"></div>
          <div className="badge-circulo badge-circulo-laranja"></div>
        </div>
         <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold pl-4">
      What Sets Us Apart
    </span>
  </div>

  <h1 className="text-5xl font-bold mb-3">
    Driving Digital Success <br />
     with Strategy Design
  </h1>

  <p className="text-gray-500 text-sm mb-5">
    We Believe That The Surest Measure Of Success Is When Our Partners With <br /> Us More Than Half
    It’s More Than Just The Visuals.
  </p>

</div>
  <img src={img2} alt="Laptop teamwork" className="w-[620px] h-[401px] pt-4" />
    </div>

<div className='flex-auto justify-start'>
    <div className="w-[283px] flex flex-col ">
  <img src={coworking} alt="Team meeting" className="w-[283px] h-[250px] object-cover rounded" />

  <p className="text-gray-500 text-sm  mt-4">
    Conduct thorough market research to <br />
    the fast target audience behaviours. <br />
    Submit as many design tasks
  </p>

  <a href="#"
     className="mt-6 w-[120px] h-[120px] rounded-full border border-black flex items-center justify-center text-black font-semibold text-sm hover:bg-[rgb(191,247,71)] transition">
    Contact Us <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
  </a>
</div>
</div>

<div className='flex-1'>
    <div className="w-[283px] flex flex-col py-6">
  <p className="text-gray-500 text-sm mb-4">
    We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half  
    It's More Than Just The Visuals. We're Here To Support Your Growth.
  </p>

  <p className="text-gray-500 text-sm mb-8">
    We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half  
    It's More Than Just The Visuals.
  </p>

  <h3 className="text-xl font-serif font-semibold mb-1 pt-12">Our Mission</h3>
  <p className="text-gray-500 text-sm mb-6">
    Conduct thorough market research to the fast target audience behaviours.
  </p>

  <div className="flex gap-4 pt-15">
      <div className="relative flex flex-col items-center w-40">
      <div className="w-24 h-24 rounded-full overflow-hidden absolute -top-12 z-10 shadow-lg ">
        <img
          src={image4}
          alt="Imagem"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-lime-400 rounded-[30px] pt-16 pb-4 px-2 text-center w-27">
        <p className="text-black font-semibold leading-tight">Marketing Strategy</p>
      </div>
    </div>
      <div className="relative flex flex-col items-center w-40">
      <div className="w-24 h-24 rounded-full overflow-hidden absolute -top-12 z-10 shadow-lg ">
        <img
          src={image5}
          alt="Imagem"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-lime-400 rounded-[30px] pt-16 pb-4 px-2 text-center w-27">
        <p className="text-black font-semibold leading-tight">UX/UI Solution</p>
      </div>
    </div>
</div>
</div>
</div>
        </div>
    </div>
  )
}
