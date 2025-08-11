import Vector from '../../assets/Vector-services.png';
import Vector2 from '../../assets/Vector-services-2.png';
import Vector3 from '../../assets/Vector-services-3.png';
import './service.css';
import '../../App.css';

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
         <h2 className="text-4xl font-ma leading-tight mb-6 max-w-xl">
        Empowering Brands Through Strategic Digital Services
      </h2>
    </div>
    <div className='pl-25 pt-5 '>
        <p className="text-gray-400 max-w-md border-l-2 border-gray-300 pl-4 text-sm font-dm leading-relaxed">
        Established in 1995, NEXIN Has Been A Leading <br /> Force In The Digital Landscape For Over Two <br />Decades. We're A Passionate Team Of Designers,
      </p>
    </div>
      </div>
  </div>
        <span className="flex grow-1 h-px bg-gray-300 my-15"></span>
        <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-7">
          <div className='column-1'>
          <div className="relative border-2 border-gray-200 hover:border-[rgb(191,247,71)] transition-colors duration-300 p-8 w-auto rounded-2xl">
  <div className="flex flex-col gap-4">
    <span className="text-sm text-gray-400 flex items-center gap-2">
      <span className="w-1 h-1 font-dm bg-gray-400 rounded-full inline-block"></span>
      Visual Branding
    </span>

    <h3 className="text-3xl font-ma leading-tight">
      Web Design And <br /> Development
    </h3>

    <div>
      <img src={Vector} alt="" />
      
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

    <h3 className="text-3xl font-ma leading-tight">
     Branding And <br /> Creative Services
    </h3>

    <div>
      <img src={Vector2} alt="" />
      
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

    <h3 className="text-3xl font-ma leading-tight">
      Creative Digital <br /> Agency
    </h3>

    <div>
      <img src={Vector3} alt="" />
      
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

        <div className="flex justify-center items-center mt-25 bg-white font-sans">
  <div className="flex  justify-center items-center relative">

    <div className="flex flex-col justify-center items-center text-center w-[250px] h-[250px] rounded-full border border-[#ddd] ml-0">
      <span className="font-dm text-5xl font-medium text-black mb-[10px]">35k+</span>
      <span className="font-medium text-gray-400  font-ma overflow-hidden">Project<br />Complete</span>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-[250px] h-[250px] rounded-full border border-[#ddd] -ml-10">
      <span className="font-dm text-5xl font-medium text-black mb-[10px]">10k+</span>
      <span className="font-medium text-gray-400  font-ma overflow-hidden">Happy<br />Customers</span>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-[250px] h-[250px] rounded-full border border-[#ddd] -ml-10">
      <span className="font-dm text-5xl font-medium text-black mb-[10px]">25+</span>
      <span className="font-medium text-gray-400  font-ma overflow-hidden">Years<br />Experiences</span>
    </div>

    <div className="flex flex-col justify-center items-center text-center w-[250px] h-[250px] rounded-full border border-[#ddd] -ml-10">
      <span className="font-dm text-5xl font-medium text-black mb-[10px]">88</span>
      <span className="font-medium text-gray-400  font-ma overflow-hidden">Awards<br />Achievement</span>
    </div>

  </div>
</div>
</section>

  )
}
