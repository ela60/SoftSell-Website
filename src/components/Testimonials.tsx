'use client';

import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

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
];

export default function Testimonials() {
  return (
    <section className="bg-indigo-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-300 mb-10">
          What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 overflow-x-auto no-scrollbar px-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-md mx-auto"
            >
              <FaQuoteLeft className="text-indigo-400 mb-4 text-3xl" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{t.review}"</p>
              <div>
                <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
                  {t.name}
                </h3>
                <p className="text-indigo-700 dark:text-indigo-400 text-sm">
                  {t.role} @ {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
