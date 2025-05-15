'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-3xl mx-auto"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Turn Unused Software Into Cash
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            SoftSell helps you easily sell your unused software licenses and get paid fast. No hassle, just profit.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-indigo-600 px-8 py-4 text-white text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              Sell My Licenses
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
