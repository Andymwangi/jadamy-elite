"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInSlide = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Admissions = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Submit Application", description: "Fill out the online application form with necessary details." },
    { id: 2, title: "Entrance Assessment", description: "Schedule and attend an entrance interview or assessment." },
    { id: 3, title: "Review & Acceptance", description: "Wait for the admissions team to review and confirm acceptance." },
    { id: 4, title: "Enrollment & Fees", description: "Complete enrollment by submitting fees and required documents." },
  ];

  return (
    <motion.section
      className="bg-gray-100 py-12"
      variants={fadeInSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <motion.div
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-yellow-600">Admissions Process</h2>
          <p className="text-gray-700 mt-3 text-lg">Join Jadamy Elite Academy – A Place for Academic Excellence!</p>
        </motion.div>

        {/* Admissions Steps */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={fadeInSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`p-6 rounded-lg shadow-md ${
                currentStep >= step.id ? "bg-yellow-500 text-white" : "bg-white"
              }`}
              onMouseEnter={() => setCurrentStep(step.id)}
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href="/admissions">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Apply Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Admissions;
