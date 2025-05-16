"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Generate falling shapes
  const [shapes, setShapes] = useState([]);
  useEffect(() => {
    const newShapes = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 8 + 4,
      type: Math.random() > 0.5 ? "circle" : "diamond",
    }));
    setShapes(newShapes);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center">
      {/* Falling Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${
              shape.type === "circle" ? "rounded-full" : "rotate-45"
            } bg-white dark:bg-white`}
            style={{
              left: `${shape.left}%`,
              width: shape.size,
              height: shape.size,
              top: "-10%",
            }}
            animate={{ y: "120vh" }}
            transition={{
              repeat: Infinity,
              duration: 10,
              delay: shape.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content Layout */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 dark:text-white leading-tight">
            Turn Unused <span className="text-indigo-500">Software</span>  Into Cash
          </h1>
          <p className="text-lg md:text-xl font-serif text-gray-600 dark:text-gray-300 max-w-xl">
            SoftSell helps you easily sell your unused software licenses and get
            paid fast. No hassle, just profit.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-6 py-3 border border-white text-white bg-indigo-600 rounded-xl text-lg font-semibold transition duration-300 hover:bg-white/10"
          >
            Sell My Licenses
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m0 0l4-4m-4 4l4 4"
              />
            </motion.svg>
          </a>
        </motion.div>

       
  <motion.div
  className="relative w-full h-[400px] flex justify-center items-center"
  animate={{ y: [0, 60, 0] }}
  transition={{
    repeat: Infinity,
    duration: 10,
    ease: "easeInOut",
  }}
>
  {/* Large Image - Bottom Right */}
  <Image
    src="https://i.ibb.co/dsnmDNQ7/Soft-Sell-Tech-Logo-Design.png"
    alt="SoftSell Logo Large"
    width={320}
    height={320}
    className="absolute bottom-0 right-0 object-contain drop-shadow-xl border border-gray-300 rounded-lg
               w-[160px] h-[160px] sm:w-[320px] sm:h-[320px]"
    priority
  />

  {/* Small Image - Top Left */}
  <Image
    src="https://i.ibb.co/dsnmDNQ7/Soft-Sell-Tech-Logo-Design.png"
    alt="SoftSell Logo Small"
    width={220}
    height={220}
    className="absolute top-0 left-0 object-contain drop-shadow-xl border border-gray-300 rounded-lg
               w-[110px] h-[110px] sm:w-[220px] sm:h-[220px]"
  />
</motion.div>


      </div>
    </section>
  );
}
