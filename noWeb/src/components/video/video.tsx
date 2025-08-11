import React from 'react'
import VideoPhoto from '../../assets/VideoPhoto.png'
import '../../App.css'

export default function Video() {
  return (
    <section className="relative  mx-auto container">
      {/* Imagem preenchendo tudo */}
      <img
        src={VideoPhoto}
        alt="Video"
        className="w-full h-full object-cover"
      />
  
      <button className="  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-white rounded-full shadow-lg hover:bg-gray-200 transition 
          font-bold text-xs sm:text-sm md:text-base font-dm uppercase
          w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]
          p-2 sm:p-3 md:p-4">
        Play video
      </button>
    </section>
  )
}
