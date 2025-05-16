'use client';

import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const pieData = [
  { value: 30, label: 'Customer Satisfaction', color: '#6366F1' },
  { value: 20, label: 'Better Quality', color: '#EC4899' },
  { value: 25, label: 'High Quality Service', color: '#F59E0B' },
  { value: 25, label: 'Provide Unique Idea', color: '#10B981' },
];

const testimonials = [
  {
    name: 'Jane Smith',
    role: 'IT Manager',
    company: 'Tech Solutions Inc.',
    review:
      'SoftSell made it so easy to sell our unused licenses. The payout was quick and the process was seamless!',
  },
  {
    name: 'Michael Johnson',
    role: 'Software Developer',
    company: 'CodeCraft LLC',
    review:
      'I was skeptical at first, but SoftSell’s valuation was spot on. Highly recommend for anyone looking to resell licenses.',
  },
  {
    name: 'Lisa Chen',
    role: 'Project Coordinator',
    company: 'BrightWorks',
    review:
      'Great platform! I recovered costs on licenses we no longer used. The process was clear and support was excellent.',
  },
  {
    name: 'David Lee',
    role: 'Product Owner',
    company: 'NextGen Apps',
    review:
      'We found unexpected value in reselling old software licenses. SoftSell turned waste into revenue for us.',
  },
  {
    name: 'Emily Davis',
    role: 'Operations Analyst',
    company: 'InnovateX',
    review:
      'SoftSell provided professional support and quick transactions. Very happy with the experience overall.',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const radius = 50;

  const createPaths = () => {
    let cumulativeAngle = 0;
    return pieData.map((slice, index) => {
      const startAngle = cumulativeAngle;
      const angle = (slice.value / 100) * 360;
      cumulativeAngle += angle;
      const endAngle = cumulativeAngle;

      const startRadians = (startAngle * Math.PI) / 180;
      const endRadians = (endAngle * Math.PI) / 180;

      const x1 = 50 + radius * Math.cos(startRadians);
      const y1 = 50 + radius * Math.sin(startRadians);
      const x2 = 50 + radius * Math.cos(endRadians);
      const y2 = 50 + radius * Math.sin(endRadians);

      const largeArc = angle > 180 ? 1 : 0;
      const d = `M50,50 L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`;

      const midAngle = ((startAngle + endAngle) / 2) * (Math.PI / 180);
      const labelX = 50 + (radius - 15) * Math.cos(midAngle);
      const labelY = 50 + (radius - 15) * Math.sin(midAngle);

      return (
        <g key={index}>
          <path d={d} fill={slice.color} />
          <foreignObject x={labelX - 15} y={labelY - 10} width={30} height={20}>
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                fontSize: '6px',
                color: 'white',
                textAlign: 'center',
                lineHeight: '1.1',
                wordWrap: 'break-word',
              }}
            >
              {slice.label}
            </div>
          </foreignObject>
        </g>
      );
    });
  };

  const orbitColors = pieData.map((d) => d.color);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-indigo-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-800 dark:text-white">
          Customer Testimonials
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Hear what our customers say about their experience with SoftSell.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
        {/* Testimonials */}
        <div className="relative w-full lg:w-1/2 h-[300px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-2xl transition-all duration-500 ${
                i === currentIndex ? 'z-20 opacity-100 scale-100' : 'z-10 opacity-0 scale-95'
              }`}
            >
              <FaQuoteLeft className="text-indigo-400 mb-4 text-2xl sm:text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-sm sm:text-base">
                "{t.review}"
              </p>
              <div>
                <h3 className="text-md sm:text-lg font-semibold text-indigo-900 dark:text-indigo-200">
                  {t.name}
                </h3>
                <p className="text-indigo-700 dark:text-indigo-400 text-sm">
                  {t.role} @ {t.company}
                </p>
              </div>
            </div>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -bottom-12 right-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow"
          >
            Next →
          </button>
        </div>

        {/* Pie Chart Container */}
        <div className="relative w-64 h-64 mx-auto lg:mx-0 flex-shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full rounded-full shadow-lg">
            {createPaths()}
          </svg>

          {/* Orbiting Dots */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {orbitColors.map((color, i) => {
              const angle = (360 / orbitColors.length) * i;
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: color,
                    top: '50%',
                    left: '50%',
                    marginTop: '-0.375rem',
                    marginLeft: '-0.375rem',
                    transformOrigin: '0 10rem',
                    animation: `orbit 10s linear infinite`,
                    animationDelay: `${(i * 10) / orbitColors.length}s`,
                    transform: `rotate(${angle}deg) translateX(10rem)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Orbiting Keyframes */}
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(10rem) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(10rem) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
