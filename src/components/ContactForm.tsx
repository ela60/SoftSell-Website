'use client';

import React, { useState } from 'react';

const licenseOptions = [
  'Windows',
  'Microsoft Office',
  'Adobe Creative Cloud',
  'Antivirus',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Email is invalid';
    if (!form.company.trim()) newErrors.company = 'Company is required';
    if (!form.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      setForm({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <section className="relative bg-white  py-16 px-6 overflow-hidden">
  {/* Triangle Background Decorations */}
  <div className="absolute -top-10 -left-10 w-32 h-32 rotate-45 bg-indigo-100 dark:bg-indigo-900 opacity-20 z-0" />
  <div className="absolute bottom-0 right-0 w-40 h-40 rotate-12 bg-indigo-200 dark:bg-indigo-800 opacity-20 z-0" />
  <div className="absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-indigo-50 dark:bg-indigo-700 opacity-10 z-0" />

  <div className="relative max-w-3xl mx-auto z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
      Contact / Lead Form
    </h2>
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Contact form"
    >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-indigo-500'
              } shadow-sm dark:bg-gray-800 dark:text-white`}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-indigo-500'
              } shadow-sm dark:bg-gray-800 dark:text-white`}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${
                errors.company
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-indigo-500'
              } shadow-sm dark:bg-gray-800 dark:text-white`}
              aria-invalid={!!errors.company}
              aria-describedby="company-error"
            />
            {errors.company && (
              <p
                id="company-error"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.company}
              </p>
            )}
          </div>

          {/* License Type */}
          <div>
            <label
              htmlFor="licenseType"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              License Type <span className="text-red-500">*</span>
            </label>
            <select
              id="licenseType"
              name="licenseType"
              value={form.licenseType}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border ${
                errors.licenseType
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-indigo-500'
              } shadow-sm dark:bg-gray-800 dark:text-white`}
              aria-invalid={!!errors.licenseType}
              aria-describedby="licenseType-error"
            >
              <option value="">Select a license type</option>
              {licenseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.licenseType && (
              <p
                id="licenseType-error"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.licenseType}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className={`mt-1 block w-full rounded-md border ${
                errors.message
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:border-indigo-500'
              } shadow-sm dark:bg-gray-800 dark:text-white`}
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-xs text-red-600 dark:text-red-400"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
