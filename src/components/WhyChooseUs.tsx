'use client';

import { FaShieldAlt, FaRocket, FaHandshake, FaUserCheck } from 'react-icons/fa';
import React from 'react';

const features = [
  {
    icon: <FaShieldAlt size={36} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Secure Transactions',
    description: 'Your license data is encrypted and protected during every step.',
  },
  {
    icon: <FaRocket size={36} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Fast Payouts',
    description: 'Once accepted, your payment is processed within 24 hours.',
  },
  {
    icon: <FaHandshake size={36} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Trusted by Sellers',
    description: 'We’ve helped 1000+ users resell licenses with full transparency.',
  },
  {
    icon: <FaUserCheck size={36} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'No Hidden Fees',
    description: 'What you see is what you get. No surprise deductions.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Why Choose SoftSell?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          We make software license resale safe, fast, and user-friendly. Here's why our customers love us:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
