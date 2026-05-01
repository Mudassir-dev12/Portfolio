import React, { useState, useMemo } from "react";

const projects = [
  {
    title: "Food Delivery App",
    subtitle: "eCommerce",
    video: "/vd2.mp4",
    poster: "/poster1.jpg",
    link: "https://turbotastes.netlify.app/",
  },
  {
    title: "Weather APP",
    subtitle: "check any country or city weather",
    video: "/vd3.mp4",
    poster: "/poster2.jpg",
    link: "https://weather868.netlify.app/",
  },
  {
    title: "Product Designer",
    subtitle: "Track your income",
    video: "/vd4.mp4",
    poster: "/poster3.jpg",
    link: "https://gsap-anim-web.netlify.app/",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % projects.length);
  const prev = () =>
    setActive((p) => (p - 1 + projects.length) % projects.length);

  const positions = useMemo(() => {
    const prevIndex = (active - 1 + projects.length) % projects.length;
    const nextIndex = (active + 1) % projects.length;
    return [prevIndex, active, nextIndex];
  }, [active]);

  return (
    <div className='min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-4 py-12 overflow-hidden'>
      {/* Heading */}
      <div className='flex items-center gap-4 mb-8'>
        <div className='hidden sm:block w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent' />
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Projects</h2>
        <div className='hidden sm:block w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent' />
      </div>

      {/* Carousel */}
      <div className='relative w-full max-w-4xl h-[320px] sm:h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden'>
        {positions.map((projIndex, i) => {
          const project = projects[projIndex];
          const isCenter = i === 1;

          return (
            <a
              key={projIndex}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`absolute transition-all duration-500 ease-out will-change-transform rounded-2xl overflow-hidden border border-teal-400/20 bg-[#020617]
              ${isCenter ? "z-30 cursor-pointer" : "z-10 cursor-default"}`}
              style={{
                transform:
                  i === 0
                    ? "translateX(-70%) scale(0.85)"
                    : i === 2
                      ? "translateX(70%) scale(0.85)"
                      : "translateX(0%) scale(1)",
                opacity: isCenter ? 1 : 0.6,
                pointerEvents: isCenter ? "auto" : "none",
              }}
            >
              <div className='w-[200px] sm:w-[240px] md:w-[280px] h-[280px] sm:h-[320px] md:h-[360px]'>
                {/* Video */}
                <video
                  src={project.video}
                  poster={project.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='auto'
                  className='w-full h-40 sm:h-44 md:h-48 object-cover bg-black transition-opacity duration-700'
                  onLoadedData={(e) => {
                    e.currentTarget.style.opacity = 1;
                  }}
                  style={{ opacity: 0 }}
                />

                {/* Content */}
                <div className='p-4'>
                  <h3 className='text-base sm:text-lg md:text-xl font-bold text-teal-400'>
                    {project.title}
                  </h3>
                  <p className='text-xs sm:text-sm text-gray-400 mt-2'>
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Controls */}
      <div className='flex gap-4 mt-6'>
        <button
          onClick={prev}
          className='px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 active:scale-95 transition'
        >
          Prev
        </button>
        <button
          onClick={next}
          className='px-4 py-2 bg-teal-500 rounded hover:bg-teal-400 active:scale-95 transition'
        >
          Next
        </button>
      </div>

      {/* Dots */}
      <div className='flex gap-2 mt-4'>
        {projects.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === active ? "bg-orange-400 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
