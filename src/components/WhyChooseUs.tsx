'use client';

import { FaShieldAlt, FaRocket, FaHandshake, FaUserCheck } from 'react-icons/fa';
import React, { useRef } from 'react';

const features = [
  {
    icon: <FaShieldAlt size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Secure Transactions',
    description: 'All license data is encrypted and processed securely across our platform.',
  },
  {
    icon: <FaRocket size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Fast Payouts',
    description: 'Get your payments within 24 hours after approval — no delays.',
  },
  {
    icon: <FaHandshake size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Trusted by Professionals',
    description: 'Our platform is trusted by 1000+ verified sellers and businesses.',
  },
  {
    icon: <FaUserCheck size={36} className="text-blue-600 dark:text-blue-400" />,
    title: 'Transparent Pricing',
    description: 'Flat fees, no hidden charges — complete clarity in every transaction.',
  },
];

export default function WhyChooseUs() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    marqueeRef.current?.style.setProperty('animation-play-state', 'paused');
  };

  const handleMouseLeave = () => {
    marqueeRef.current?.style.setProperty('animation-play-state', 'running');
  };

  return (
    <section className="relative bg-white  py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Decorative Background Shapes */}
  <div className="absolute top-10 left-5 w-24 h-24 bg-indigo-100 dark:bg-indigo-800 opacity-20 rotate-45 z-0 rounded-sm" />
  <div className="absolute bottom-16 right-8 w-32 h-32 bg-purple-100 dark:bg-purple-700 opacity-20 rounded-full z-0" />
  <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-100 dark:bg-pink-800 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
  <div className="absolute bottom-10 left-10 w-16 h-16 bg-yellow-100 dark:bg-yellow-700 opacity-20 rotate-12 z-0 rounded-sm" />

  {/* Content */}
  <div className="relative z-10 mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900  mb-4">
      Why Professionals Choose SoftSell
    </h2>
    <p className="text-gray-900  max-w-2xl mx-auto text-lg">
      Experience speed, security, and transparency — trusted by businesses worldwide.
    </p>
  </div>

  {/* Marquee Wrapper */}
  <div
    className="relative w-full overflow-hidden z-10"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div
      ref={marqueeRef}
      className="flex w-max space-x-6"
      style={{
        animation: 'marquee 15s linear infinite',
        display: 'inline-flex',
      }}
    >
      {[...features, ...features].map((feature, index) => (
        <div
          key={index}
          className="min-w-[280px] max-w-[280px] flex-shrink-0 p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out text-center"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Inline CSS for marquee */}
  <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>

  );
}
