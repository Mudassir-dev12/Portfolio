import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text =
  "I build responsive, user-friendly and high performance websites and web applications.";

const BlurText = () => {
  const words = text.split(" ");
  const [cycle, setCycle] = useState(0);

  // restart animation after full sequence completes
  useEffect(() => {
    const totalDuration = words.length * 500 + 1000;

    const timeout = setTimeout(() => {
      setCycle((prev) => prev + 1); // force re-render → restart animation
    }, totalDuration);

    return () => clearTimeout(timeout);
  }, [cycle]);

  return (
    <p className='text-gray-400 text-sm sm:text-base mb-6 md:mb-8 flex flex-wrap gap-x-1'>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${cycle}-${i}`} // important for restart
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: i * 0.25,
          }}
          className='inline-block'
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
