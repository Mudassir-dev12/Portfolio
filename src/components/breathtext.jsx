import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BreathingText() {
  const [active, setActive] = useState(0);

  // switch between 0 and 1 every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const breath = {
    scale: [1, 1.03, 1],
    opacity: [0.7, 1, 0.7],
  };

  const transition = {
    duration: 2.2,
    ease: "easeInOut",
  };

  return (
    <div>
      {/* First H1 */}
      <motion.h1
        animate={active === 0 ? breath : {}}
        transition={transition}
        className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
      >
        Frontend Web
      </motion.h1>

      {/* Second H1 */}
      <motion.h1
        animate={active === 1 ? breath : {}}
        transition={transition}
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-teal-400 mb-4 md:mb-6"
      >
        Developer
      </motion.h1>
    </div>
  );
}