import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("black");
  const [zIndex, setZIndex] = useState(20001);
  const [blendMode, setBlendMode] = useState("normal");
  const [size, setSize] = useState(20);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile (touch devices or small screens)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return; // ❌ Stop everything on mobile

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setColor("white");
      setZIndex(1001);
      setBlendMode("difference");
      setSize(40);
    };

    const handleMouseLeave = () => {
      setColor("white");
      setZIndex(1001);
      setBlendMode("normal");
      setSize(12);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const elements = document.querySelectorAll(
      "p, h1, h2, h3, h4, h5, h6, span, a, img, button",
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile]);

  // ❌ Hide completely on mobile
  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundColor: color,
        pointerEvents: "none",
        zIndex: zIndex,
        mixBlendMode: blendMode,
        isolation: "isolate",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
      animate={{
        x: position.x - size / 2,
        y: position.y - size / 2,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 60,
        mass: 0.5,
      }}
    />
  );
};

export default MouseFollower;
