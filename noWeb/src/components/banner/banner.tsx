import '../../App.css'

import { IoMdArrowRoundUp } from "react-icons/io";

import Avatar from '../../assets/Avatar.png';
import ImagBanner from '../../assets/image.png';
import BannerImg1 from '../../assets/banner-img-1.png';
import BannerImg2 from '../../assets/banner-img-2.png';
import BannerImg3 from '../../assets/banner-img-3.png';

export function Banner() {
  return (
<section className="w-full">
      <div className="max-w-7xl mx-auto container px-4 sm:px-6 md:px-30 py-10 md:py-20">
        <div className="pl-4 md:pl-16 mb-4">
          <p className="sm:text-sm md:text-sm font-dm text-black">
            Great Design Services <br />
            Without The Pretentiousness.!
          </p>
        </div>


      <div className="pt-5 flex flex-col md:flex-row md:gap-2 items-start md:items-center">
          <div className="flex-1 pl-4 md:pl-16 sm:justify-center">
            <h1 className="text-5xl md:text-[140px] font-gallery tracking-wider leading-none text-center md:text-start">
              Digital
            </h1>
              <span className="block md:hidden text-5xl font-gallery font-normal text-black">
              Solution
            </span>
          </div>

       <div className=" flex flex-col text-black text-sm sm:px-0 md:text-start">
          <p className="mb-4 font-dm text-sm md:text-xs ">
            We believe that the surest measure of success is when our <br /> partners
            with us more than half. It's more than just the <br /> visuals. We're
            here to support your growth.
          </p>
          <a
            href="#"
            className="pt-5 font-dm inline-flex items-center text-black font-semibold decoration-1 underline self-end"
          >
            View All Services
            <IoMdArrowRoundUp className="w-4 h-4 ml-1 transform transition-transform duration-600 scale-x-[-1] -rotate-320 " />
          </a>
        </div>


        <div className="flex flex-1 flex-col md:items-end md:mt-0 px-4 ml-10 sm:px-0">
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center border border-black rounded-full px-2 py-1 bg-white">
        <div className="flex -space-x-3">
          <img
            src={BannerImg1}
            alt="User 1"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={BannerImg2}
            alt="User 2"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src={BannerImg3}
            alt="User 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold border-2 border-white">
            15k+
          </div>
        </div>
      </div>

      {/* Texto abaixo */}
      <p className="text-sm font-dm">
        Excellent <span className="font-bold ">4.000+</span> Reviews
      </p>
    </div>

        </div>
        </div>

<div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-24 mt-6 px-4 sm:fkex sm:justify-center">
  {/* WEB DESIGN */}
  <div className="order-1 md:order-1 flex items-center pl-4 md:pl-16">
    <button className="button-color px-5 text-black font-bold md:px-9 md:py-5 rounded-3xl">
      <p className="pr-5 font-dm font-bold text-[12px] sm:text-base md:text-xl md:text-left">
        WEB <br /> DESIGN
      </p>
    </button>
    <div className="w-12 h-12 md:w-20 md:h-23 rounded-3xl bg-black flex items-center justify-center shadow-lg -ml-7 sm:w-25 sm:h-25">
      <img
        src={Avatar}
        alt="Avatar"
        className="w-5 h-5 md:w-15 md:h-15 rounded-full"
      />
    </div>
  </div>

<div className="hidden md:block order-2 md:order-2">
  <h1 className="text-4xl sm:text-5xl md:text-9xl font-gallery font-normal text-black text-center md:text-left">
    Solution
  </h1>
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
