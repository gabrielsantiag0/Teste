

import './howwework.css'

export default function HowWeWork() {
  return (
    <section className="py-16 px-5 text-center container justify-center">
  <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-3 ">
            <div className="container-circuloServies flex justify-center items-center gap-5">
          <div className="badge-circulo badge-circulo-preto"></div>
          <div className="badge-circulo badge-circulo-laranja"></div>
        </div>
         <span className="text-xs font-dm uppercase tracking-widest text-gray-400 font-semibold pl-4">
      Workflow
    </span>
  </div>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-base font-ma flex justify-center">How We Work</h2>

  <div className="flex justify-center items-center gap-8 lg:gap-20 flex-wrap mt-12 w-full">

    <div className="w-full sm:w-[280px] lg:w-[250px] h-auto lg:h-[244px]">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 border border-black rounded-full flex items-center justify-center text-xl sm:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>
        </div>
        <div className="flex-1/3 bg-black ml-4 w-[272px] h-px"></div>
        <span className="ml-4 text-lg font-bold text-gray-300">01</span>
      </div>
      <h3 className="text-lg sm:text-xl font-ma font-bold mb-2 text-start">Research and Strategy</h3>
      <p className="text-sm text-gray-400 font-dm leading-relaxed text-start">
        Conduct thorough market research to understand target audience behaviors.
        Submit as many design tasks.
      </p>
    </div>

    <div className="w-full sm:w-[280px] lg:w-[250px] h-auto lg:h-[244px]">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 border border-black rounded-full flex items-center justify-center text-xl sm:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m307-320-87-360 260-240 260 240-87 360H307Zm63-80h220l61-253-131-121v106q14 10 22 25t8 33q0 29-20.5 49.5T480-540q-29 0-49.5-20.5T410-610q0-18 8-33t22-25v-106L309-653l61 253ZM160-120l22-65q8-25 29-40t47-15h444q26 0 47 15t29 40l22 65H160Z"/></svg>
        </div>
        <div className="flex-1 h-px bg-black ml-4"></div>
        <span className="ml-4 text-lg font-bold text-gray-300">02</span>
      </div>
      <h3 className="text-lg sm:text-xl font-ma font-bold mb-2 text-start">Plan Customization</h3>
      <p className="text-sm text-gray-400 font-dm leading-relaxed text-start">
        Conduct thorough market research to understand target audience behaviors.
        Submit as many design tasks.
      </p>
    </div>

    <div className="w-full sm:w-[280px] lg:w-[250px] h-auto lg:h-[244px]">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 border border-black rounded-full flex items-center justify-center text-xl sm:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
        </div>
        <div className="flex-1 h-px bg-black ml-4"></div>
        <span className="ml-4 text-lg font-bold text-gray-300">02</span>
      </div>
      <h3 className="text-lg sm:text-xl font-ma font-bold mb-2 text-start">Finished & User Testing</h3>
      <p className="text-sm text-gray-400 font-dm leading-relaxed text-start">
        Conduct thorough market research to understand target audience behaviors.
        Submit as many design tasks.
      </p>
    </div>
  </div>
    </section>
  )
}
