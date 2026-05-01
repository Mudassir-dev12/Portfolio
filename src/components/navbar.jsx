import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 overflow-hidden
      ${
        scrolled
          ? "bg-[#010716]/30 backdrop-blur-[4px] border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className='flex justify-between items-center relative z-10'>
        {/* Logo */}
        <Link to='/'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-[#32EFF1] to-white bg-clip-text text-transparent'>
            {"<"} Mudassir {" />"}
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden text-xl text-white md:flex gap-20'>
          {menuItems.map((item, i) => (
            <li key={i} className='relative cursor-pointer group'>
              <a
                href={item.link}
                className='relative inline-block group-hover:text-yellow-400 transition'
              >
                {item.name}

                {/* 🔥 Line Effect */}
                <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-2xl text-white z-10'
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className='flex flex-col gap-4 mt-4 text-white bg-[#020617] md:hidden p-4'>
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className='hover:text-yellow-400'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
