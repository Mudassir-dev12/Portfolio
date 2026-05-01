import React from "react";
import BlurText from "./blurtext";
import Text2 from "./breathtext";
import Text1 from "./textanim";

function FrontPage() {
  return (
    <div className='w-full min-h-screen bg-[#020617] text-white flex flex-col md:flex-row items-center justify-between px-5 sm:px-10 md:px-20 py-10 relative overflow-hidden'>
      {/* 🔵 LEFT SIDE SVG GRADIENT */}
      <img
        src='/svg.png'
        alt='developer'
        className='absolute left-0 top-0 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] z-0 object-contain'
      />

      {/* 🔵 BLOB (BEHIND IMAGE ONLY) */}
      <div className='absolute right-10 md:right-20 top-20 md:top-32 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-gradient-to-br from-teal-500/20 to-blue-900/30 rounded-full blur-3xl z-0'></div>

      {/* ✨ Glow Dots */}
      <div className='absolute inset-0 z-0'>
        {/* Cyan dots */}
        <div className='absolute w-2 h-2 bg-cyan-400 rounded-full top-20 left-1/4 shadow-[0_0_20px_#22d3ee] animate-pulse'></div>
        <div className='absolute w-1.5 h-1.5 bg-cyan-300 rounded-full top-32 right-1/3 shadow-[0_0_15px_#67e8f9] animate-pulse delay-200'></div>
        <div className='absolute w-2 h-2 bg-cyan-400 rounded-full bottom-24 right-10 shadow-[0_0_20px_#22d3ee] animate-pulse delay-500'></div>

        {/* Orange dots */}
        <div className='absolute w-2 h-2 bg-orange-400 rounded-full bottom-20 left-10 shadow-[0_0_20px_#fb923c] animate-pulse'></div>
        <div className='absolute w-1.5 h-1.5 bg-orange-300 rounded-full top-1/2 left-5 shadow-[0_0_15px_#fdba74] animate-pulse delay-300'></div>

        {/* Mixed positions */}
        <div className='absolute w-2 h-2 bg-cyan-400 rounded-full top-40 right-20 shadow-[0_0_20px_#22d3ee] animate-pulse'></div>
        <div className='absolute w-1 h-1 bg-white rounded-full top-10 right-1/2 shadow-[0_0_10px_white] animate-pulse'></div>
        <div className='absolute w-1.5 h-1.5 bg-blue-400 rounded-full bottom-10 right-1/3 shadow-[0_0_15px_#60a5fa] animate-pulse delay-700'></div>
      </div>
      <div className='absolute top-5 left-10 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_20px_#22d3ee] animate-pulse'></div>
      <div className='absolute top-10 right-20 w-3 h-3 bg-orange-400 rounded-full blur-[2px] shadow-[0_0_25px_#fb923c] animate-pulse'></div>
      <div className='absolute bottom-5 left-1/3 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_18px_#22d3ee] animate-pulse'></div>
      <div className='absolute bottom-2 right-10 w-4 h-4 bg-cyan-300 rounded-full blur-[3px] shadow-[0_0_30px_#67e8f9] animate-pulse'></div>

      {/* LEFT CONTENT */}
      <div className='z-10 max-w-xl text-center md:text-left'>
        <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide text-white sm:text-teal-400  mb-2'>
          Hi I'm <Text1 />
          {/* <span className='text-gray-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            &lt;Muadssir/&gt;
          </span> */}
        </h3>

        {/* <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold leading-tight'>
          Frontend Web
        </h1>

        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-teal-400 mb-4 md:mb-6'>
          Developer
        </h1> */}
        <Text2 />

        {/* <p className='text-gray-400 text-sm sm:text-base mb-6 md:mb-8'>
          I build responsive, user-friendly and high performance websites and
          web applications.
        </p> */}
        <BlurText />

        <button
          onClick={() => window.open("/CV.pdf", "_blank")}
          className='bg-gradient-to-r from-orange-500 to-orange-600 
          px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold 
          flex items-center justify-center md:justify-start gap-3 
          transition duration-300 hover:scale-105 
          hover:shadow-[0_0_25px_rgba(255,115,0,0.7)]'
        >
          ⬇ Download CV
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className='z-10 mt-10 md:mt-0 flex justify-center relative'>
        <img
          src='/pic2.png'
          alt='developer'
          className='w-[250px] sm:w-[320px] md:w-[450px] max-w-full h-auto relative z-10'
        />
      </div>
    </div>
  );
}

export default FrontPage;
