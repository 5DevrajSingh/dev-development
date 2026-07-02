import { section } from 'framer-motion/client'
import React from 'react'

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "I provide Web Development, React Development, Flutter App Development, and UI/UX implementation services.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I primarily work with React, JavaScript, Tailwind CSS, Flutter, Dart, Firebase, Node.js, and REST APIs.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes, I am available for freelance, remote, and contract-based projects.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact me through the Contact page, email, or LinkedIn profile.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, I provide ongoing support, maintenance, and feature enhancements for existing applications.",
  },
   {
    question: "What services do you provide?",
    answer:
      "I provide Web Development, React Development, Flutter App Development, and UI/UX implementation services.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I primarily work with React, JavaScript, Tailwind CSS, Flutter, Dart, Firebase, Node.js, and REST APIs.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes, I am available for freelance, remote, and contract-based projects.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact me through the Contact page, email, or LinkedIn profile.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, I provide ongoing support, maintenance, and feature enhancements for existing applications.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 lg:py-24 px-5 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
         
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some common questions about my services, technologies,
            and availability.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <FiMinus className="text-indigo-600" size={24} />
                ) : (
                  <FiPlus className="text-indigo-600" size={24} />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

