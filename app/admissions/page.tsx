"use client";

import { motion } from "framer-motion";
import Admissions from "@/components/Admissions";
import AdmissionsForm from "@/components/AdmissionsForm";
import Image from "next/image";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-[url('/admissions-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          className="relative z-10 max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Join Jadamy Elite Academy
          </motion.h1>
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-200"
          >
            A gateway to excellence in education. Enroll your child today!
          </motion.p>
        </motion.div>
      </section>

      {/* Admissions Component (General Info & Process) */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <Admissions />
      </section>

      {/* Tuition Fees Breakdown */}
      <section className="py-12 bg-gray-100 px-6 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="text-3xl font-semibold text-center"
          >
            Tuition Fees Breakdown
          </motion.h2>
          <motion.p
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            className="text-center text-gray-600 mt-2"
          >
            Tuition fees for Jadamy Elite School in Ruai, Nairobi.
          </motion.p>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[ 
              { level: "Kindergarten", fee: "KES 10,000 per term" },
              { level: "Primary (Grade 1-3)", fee: "KES 15,000 per term" },
              { level: "Primary (Grade 4-6)", fee: "KES 17,000 per term" },
              { level: "Junior Secondary (Grade 7-9)", fee: "KES 20,000 per term" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="p-6 bg-white shadow-lg rounded-lg text-gray-900"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold">{item.level}</h3>
                <p className="mt-2">{item.fee}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Form Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold text-center"
        >
          Admissions Form
        </motion.h2>
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 mt-2"
        >
          Fill in your details to begin the enrollment process.
        </motion.p>
        <div className="mt-8">
          <AdmissionsForm />
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;
