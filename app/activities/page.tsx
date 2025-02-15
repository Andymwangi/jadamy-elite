"use client";

import { NextPage } from "next";
import Activities from "@/components/Activities";
import { motion } from "framer-motion";

const ActivitiesPage: NextPage = () => {
  return (
    <main className="pt-20 min-h-screen bg-[#0A1F44]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-dark-blue">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Exciting Activities at Jadamy Elite Academy
          </h1>
          <motion.p 
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Explore a world of extracurricular programs designed to foster talent and skills beyond the classroom.
          </motion.p>
        </motion.div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Activities />
        </motion.div>
      </section>

      {/* Call to Action */}
      <motion.div 
        className="text-center mt-12 bg-dark-blue text-white py-12 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold">Want to Enroll Your Child?</h2>
        <p className="mt-2">
          Join our exciting programs and give your child the best opportunities for growth.
        </p>
        <div className="mt-6">
          <a href="/admissions">
            <button className="bg-yellow-500 text-dark-blue px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Apply Now
            </button>
          </a>
        </div>
      </motion.div>
    </main>
  );
};

export default ActivitiesPage;
