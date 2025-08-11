
import '../../App.css'

import img2 from '../../assets/img-computer.png'
import coworking from '../../assets/coworking.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'

export default function WhyChooseUs() {
  return (
    <div className='w-full 'style={{ backgroundColor: '#f8f8f8' }}>
<div className="max-w-7xl mx-auto container flex flex-col lg:flex-row justify-center py-16 px-5 sm:px-10 gap-8 lg:gap-10">
<div className="flex flex-col justify-center">

    <div className='flex-auto lg:pl-15'>
  <div className="mb-6 lg:mb-10 flex justify-start">
            <div className="container-circuloServies flex justify-center items-center gap-5">
          <div className="badge-circulo badge-circulo-preto"></div>
          <div className="badge-circulo badge-circulo-laranja"></div>
        </div>
         <span className="text-base uppercase text-gray-500 font-semibold font-dm pl-4">
      What Sets Us Apart
    </span>
  </div>

  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-ma font-medium mb-3">
    Driving Digital Success <br />
     with Strategy Design
  </h1>

  <p className="text-gray-400 font-dm text-sm mb-5">
    We Believe That The Surest Measure Of Success Is When Our Partners With <br /> Us More Than Half
    It’s More Than Just The Visuals.
  </p>

</div>
  <img src={img2} alt="Laptop teamwork" className="w-full lg:w-[620px] h-auto lg:h-[401px] pt-4" />
    </div>

<div className='flex-auto justify-start'>
    <div className="w-[283px] flex flex-col ">
  <img src={coworking} alt="Team meeting" className="w-full sm:w-[283px] h-auto sm:h-[250px] object-cover rounded" />

  <p className="text-gray-400 font-dm text-sm  mt-4">
    Conduct thorough market research to <br className="hidden lg:block"/>
    the fast target audience behaviours. <br className="hidden lg:block"/>
    Submit as many design tasks
  </p>

  <a href="#"
     className="mt-6 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full border border-black flex items-center justify-center text-black font-semibold font-dm text-xs sm:text-sm hover:bg-[rgb(191,247,71)] transition">
    Contact Us <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
  </a>
</div>
</div>

<div className='flex-1'>
    <div className="w-full sm:w-[283px] flex flex-col py-6">
  <p className="text-gray-400 text-sm font-dm mb-4">
    We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half  
    It's More Than Just The Visuals. We're Here To Support Your Growth.
  </p>

  <p className="text-gray-400 text-sm font-dm mb-8">
    We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half  
    It's More Than Just The Visuals.
  </p>

  <h3 className="text-lg sm:text-xl font-ma font-semibold mb-1 pt-8 lg:pt-12">Our Mission</h3>
  <p className="text-gray-400 text-sm font-dm mb-6">
    Conduct thorough market research to the fast target audience behaviours.
  </p>

  <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 pt-8 lg:pt-15">
      <div className="relative flex flex-col items-center w-full sm:w-40">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden absolute -top-10 sm:-top-12 z-10 shadow-lg">
        <img
          src={image4}
          alt="Imagem"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-lime-400 rounded-[30px] pt-14 sm:pt-16 pb-4 px-2 text-center">
        <p className="text-black font-dm font-semibold leading-tight">Marketing Strategy</p>
      </div>
    </div>
      <div className="relative flex flex-col items-center w-full sm:w-40">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden absolute -top-10 sm:-top-12 z-10 shadow-lg">
        <img
          src={image5}
          alt="Imagem"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-lime-400 rounded-[30px] pt-14 sm:pt-16 pb-9 px-2 text-center">
        <p className="text-black font-dm font-semibold leading-tight">UX/UI Solution</p>
      </div>
    </div>
</div>
</div>
</div>
        </div>
    </div>
  )
}
