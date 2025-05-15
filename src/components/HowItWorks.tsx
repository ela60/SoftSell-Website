'use client';

import { FaUpload, FaDollarSign, FaChartLine } from 'react-icons/fa';
import React from 'react';

const steps = [
  {
    icon: <FaUpload size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Upload License',
    description: 'Submit your unused software license securely through our platform.',
  },
  {
    icon: <FaChartLine size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Get Valuation',
    description: 'We analyze the license and provide an instant market valuation.',
  },
  {
    icon: <FaDollarSign size={40} className="text-indigo-600 dark:text-indigo-400" />,
    title: 'Get Paid',
    description: 'Accept the offer and get paid directly to your account.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          Selling your unused licenses is simple and secure with SoftSell. Just follow three easy steps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-gray-50 dark:bg-gray-800"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
