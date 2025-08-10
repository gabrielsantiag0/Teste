import React from 'react'
import VideoPhoto from '../../assets/VideoPhoto.png'

export default function Video() {
  return (
    <section className="relative  mx-auto container">
      {/* Imagem preenchendo tudo */}
      <img
        src={VideoPhoto}
        alt="Video"
        className="w-full h-full object-cover"
      />
  
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[170px] h-[170px] text-black p-4 rounded-full shadow-lg hover:bg-gray-200 transition font-bold">
        PLAY VIDEO
      </button>
    </section>
  )
}
