import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className='bg-[#020617] text-gray-300 py-6 px-4 border-t border-white/10 relative'>
      {/* Added pr-20 on md to avoid overlap with button */}
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:pr-20'>
        {/* Social Icons */}
        <div className='flex gap-4 px-4 py-2 rounded-full text-gray-300'>
          <a
            href='https://github.com/Mudassir-dev12/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='cursor-pointer transition transform hover:scale-110 hover:text-white' />
          </a>

          <a
            href='https://www.linkedin.com/in/mudassir-waseem-979575297/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='cursor-pointer transition transform hover:scale-110 hover:text-blue-400' />
          </a>

          <a
            href='https://twitter.com/your-username'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter className='cursor-pointer transition transform hover:scale-110 hover:text-sky-400' />
          </a>

          <a
            href='https://www.instagram.com/mudassir_456'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='cursor-pointer transition transform hover:scale-110 hover:text-pink-400' />
          </a>
        </div>
        {/* Copyright */}
        <p className='text-sm text-center md:text-left'>
          © 2024 <span className='text-teal-400'>Mudassir</span>. All rights
          reserved.
        </p>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className='absolute right-4 bottom-4 md:right-6 md:bottom-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-md transition transform hover:scale-110'
      >
        <HiArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
