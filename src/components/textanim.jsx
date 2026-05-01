import { useEffect, useState } from "react";

const name = "Mudassir";

export default function AnimatedName() {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 120 : 220;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(name.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === name.length) {
          setTimeout(() => setIsDeleting(true), 2500); // pause
        }
      } else {
        setDisplayed(name.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <span className='text-gray-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
      {"<"}
      {displayed}
      <span className='border-r-2 border-teal-400 ml-1 animate-pulse'></span>
      {"/>"}
    </span>
  );
}
