import Vector from '../../assets/Vector-services.png';
import Vector2 from '../../assets/Vector-services-2.png';
import Vector3 from '../../assets/Vector-services-3.png';
import './service.css';
import '../../App.css';

export default function Services() {
  return (
    
    <section className="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-30 py-10 sm:py-16 lg:py-20">
  <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-0'>
          <div className="spinner bg-black mx-auto lg:mx-0">
          <div className="center-circle"></div>
        </div>
        <div className='flex-1 flex-col pl-0 lg:pl-50 text-center lg:text-center'>
{/* Essa aparece só no mobile (até sm) */}
<div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-3 block sm:hidden">
  <div className="container-circuloServies flex justify-center items-center gap-5">
    <div className="badge-circulo badge-circulo-preto"></div>
    <div className="badge-circulo badge-circulo-laranja"></div>
  </div>
  <span className="text-xs font-dm uppercase tracking-widest text-gray-400 font-semibold pl-4">
   Services
  </span>
</div>

{/* Essa some no mobile e aparece a partir do sm (desktop) */}
<div className="container-circuloServies flex justify-center lg:justify-start hidden sm:flex">
  <div className="badge-circulo badge-circulo-preto"></div>
  <div className="badge-circulo badge-circulo-laranja"></div>
  <span className="text-xs flex items-center uppercase tracking-widest text-gray-500 font-semibold pl-7">
    Services
  </span>
</div>

    <div className='pl-0 lg:pl-7 pt-2'>
         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-ma leading-tight mb-6 max-w-xl mx-auto lg:mx-0">
        Empowering Brands Through Strategic Digital Services
      </h2>
    </div>
    <div className='pl-0 lg:pl-25 pt-5'>
        <p className="text-gray-400 max-w-md mx-auto lg:mx-0 border-l-0 lg:border-l-2 border-gray-300 lg:pl-4 text-sm font-dm leading-relaxed">
        Established in 1995, NEXIN Has Been A Leading <br className="hidden lg:block"/> Force In The Digital Landscape For Over Two <br className="hidden lg:block"/>Decades. We're A Passionate Team Of Designers,
      </p>
    </div>
      </div>
  </div>
        <span className="block h-px bg-gray-300 my-10 lg:my-15" id='portifolio'></span>
        <div className="flex justify-center" >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-6xl">
          <div className='column-1'>
          <div className="relative border-2 border-gray-200 hover:border-[rgb(191,247,71)] transition-colors duration-300 p-8 rounded-2xl">
  <div className="flex flex-col gap-4">
    <span className="text-sm text-gray-400 flex items-center gap-2">
      <span className="w-1 h-1 font-dm bg-gray-400 rounded-full inline-block"></span>
      Visual Branding
    </span>

    <h3 className="text-2xl sm:text-3xl font-ma leading-tight">
      Web Design And <br /> Development
    </h3>

    <div>
      <img src={Vector} className="mx-auto lg:mx-0" alt="" />
      
    </div>

    <p className="text-gray-400 text-sm text-dm leading-relaxed">
      Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate
    </p>
  </div>

  <div className="absolute hover:bg-[rgb(191,247,71)]  -bottom-6 -right-6 w-16 h-16  rounded-full flex items-center justify-center shadow-sm">
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="24px"
  width="24px"
  viewBox="0 -960 960 960"
  fill="#1f1f1f"
  className="transform transition-transform duration-600 scale-x-[-1] hover:-rotate-45"
>
  <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" />
</svg>
      </div>
          </div>
          </div>
          <div className='column-2'>
             <div className="relative border-2 border-gray-200 hover:border-[rgb(191,247,71)] transition-colors duration-300 p-8 w-auto rounded-2xl">
  <div className="flex flex-col gap-4">
    <span className="text-sm text-gray-400 flex items-center gap-2">
      <span className="w-1 h-1 bg-gray-400 text-dm rounded-full inline-block"></span>
       Brand Strategy
    </span>

    <h3 className="text-2xl sm:text-3xl font-ma leading-tight">
     Branding And <br /> Creative Services
    </h3>

    <div>
      <img src={Vector2} alt="img-icone" className="mx-auto lg:mx-0"/>
      
    </div>

    <p className="text-gray-400 text-sm font-dm leading-relaxed">
      Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate
    </p>
  </div>

  <div className="absolute hover:bg-[rgb(191,247,71)]  -bottom-6 -right-6 w-16 h-16  rounded-full flex items-center justify-center shadow-sm">
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="24px"
  width="24px"
  viewBox="0 -960 960 960"
  fill="#1f1f1f"
  className="transform transition-transform duration-600 scale-x-[-1] hover:-rotate-45"
>
  <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" />
</svg>
      </div>
            </div>
          </div>
          <div className='column-3'>
 <div className="relative border-2 border-gray-200 hover:border-[rgb(191,247,71)] transition-colors duration-300 p-8 w-auto rounded-2xl">
  <div className="flex flex-col gap-4">
    <span className="text-sm text-gray-400 flex items-center gap-2">
      <span className="w-1 h-1 bg-gray-400 font-dm rounded-full inline-block"></span>
      Identity Build
    </span>

    <h3 className="text-2xl sm:text-3xl font-ma leading-tight">
      Creative Digital <br /> Agency
    </h3>

    <div>
      <img src={Vector3} alt="" className="mx-auto lg:mx-0"/>
      
    </div>

    <p className="text-gray-400 font-dm text-sm leading-relaxed">
      Established In 1995, NEXIN Has Been Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate
    </p>
  </div>

  <div className="absolute hover:bg-[rgb(191,247,71)]  -bottom-6 -right-6 w-16 h-16  rounded-full flex items-center justify-center shadow-sm">
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="24px"
  width="24px"
  viewBox="0 -960 960 960"
  fill="#1f1f1f"
  className="transform transition-transform duration-600 scale-x-[-1] hover:-rotate-45"
>
  <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z" />
</svg>
      </div>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 lg:mt-25 bg-white">
  <div className="flex flex-col lg:flex-row justify-center items-center relative gap-6 lg:gap-0">
    
    <div className="flex flex-col justify-center items-center text-center w-[200px] sm:w-[220px] md:w-[250px] h-[200px] sm:h-[220px] md:h-[250px] rounded-full border border-[#ddd]">
      <span className="font-dm text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-[10px]">35k+</span>
      <span className="font-medium text-gray-400 font-ma overflow-hidden">
        Project<br />Complete
      </span>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-[200px] sm:w-[220px] md:w-[250px] h-[200px] sm:h-[220px] md:h-[250px] rounded-full border border-[#ddd] lg:-ml-10">
      <span className="font-dm text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-[10px]">10k+</span>
      <span className="font-medium text-gray-400 font-ma overflow-hidden">
        Happy<br />Customers
      </span>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-[200px] sm:w-[220px] md:w-[250px] h-[200px] sm:h-[220px] md:h-[250px] rounded-full border border-[#ddd] lg:-ml-10">
      <span className="font-dm text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-[10px]">25+</span>
      <span className="font-medium text-gray-400 font-ma overflow-hidden">
        Years<br />Experiences
      </span>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-[200px] sm:w-[220px] md:w-[250px] h-[200px] sm:h-[220px] md:h-[250px] rounded-full border border-[#ddd] lg:-ml-10">
      <span className="font-dm text-3xl sm:text-4xl md:text-5xl font-medium text-black mb-[10px]">88</span>
      <span className="font-medium text-gray-400 font-ma overflow-hidden">
        Awards<br />Achievement
      </span>
    </div>

  </div>
</div>

</section>

  )
}
