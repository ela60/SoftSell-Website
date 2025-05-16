'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaUpload, FaDollarSign, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    title: 'Upload License',
    icon: <FaUpload size={24} className="text-indigo-600 dark:text-indigo-400" />,
    defaultImage: 'https://graphpaperpress.com/wp-content/uploads/2016/05/photo-sales-1000x600.jpg',
    description: 'Easily upload your license and our system will validate its authenticity.',
  },
  {
    title: 'Get Valuation',
    icon: <FaChartLine size={24} className="text-indigo-600 dark:text-indigo-400" />,
    defaultImage: 'https://www.yesware.com/wp-content/uploads/2023/08/soft-sell-yesware.jpg',
    description: 'Our AI engine evaluates your license value instantly with market trends.',
  },
  {
    title: 'Get Paid',
    icon: <FaDollarSign size={24} className="text-indigo-600 dark:text-indigo-400" />,
    defaultImage: 'https://www.theladders.com/wp-content/uploads/money_190405.jpg',
    description: 'After approval, funds are transferred directly to your chosen payment method.',
  },
];

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
   <section className="relative bg-white  py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Decorative Background Shapes */}
  <div className="absolute top-10 left-5 w-24 h-24 bg-indigo-100 dark:bg-indigo-800 opacity-20 rotate-45 z-0 rounded-sm" />
  <div className="absolute bottom-16 right-8 w-32 h-32 bg-purple-100 dark:bg-purple-700 opacity-20 rounded-full z-0" />
  <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-100 dark:bg-pink-800 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
  <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-100 dark:bg-yellow-700 opacity-20 rotate-12 z-0 rounded-sm" />
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800   mb-4">
          How It Works
        </h2>
        <p className="text-gray-900  max-w-2xl mx-auto text-lg">
          Selling your unused licenses is simple and secure with SoftSell. Just follow three easy steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-gray-50 dark:bg-gray-800"
              >
                {/* Always show the default image */}
                <div className="w-full h-60 relative">
                  <Image
                    src={step.defaultImage}
                    alt={step.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300"
                  />
                </div>

                {/* Show title below image by default */}
                {!isHovered && (
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                )}

                {/* On hover: show overlay content */}
                {isHovered && (
                  <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 p-6 flex flex-col justify-center items-center text-center transition duration-300 z-10">
                    <div className="mb-3">{step.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {step.description}
                    </p>
                    <button className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                      See More
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Optional bottom button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
            See All Details
          </button>
        </div>
      </div>
    </section>
  );
}
