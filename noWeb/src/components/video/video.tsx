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
          bg-white rounded-full shadow-lg hover:bg-black hover:text-white transition 
          font-bold text-base sm:text-sm md:text-sm font-dm uppercase
          w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[130px] md:h-[130px] lg:w-[140px] lg:h-[140px]
          p-2 sm:p-3 md:p-4">
        Play video
      </button>
    </section>
  )
}
