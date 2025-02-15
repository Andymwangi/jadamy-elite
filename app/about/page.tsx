"use client";

import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Image from "next/image";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// Animation variants
const fadeInSlide = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0A1F44] text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* History & Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-gray-300">Our Journey</h2>
          <p className="mt-4 text-white">
            Established in <strong>2008</strong>, Jadamy Elite Academy has grown into one of the leading private schools along 
            <strong> Kangundo-Nairobi Road</strong>. With <strong>spacious grounds</strong> and modern facilities, we nurture 
            <strong> academic excellence, creativity, and discipline</strong>.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src="/jadamy1.PNG"
              alt="School Campus"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">Why We Stand Out</h3>
            <ul className="space-y-3 text-gray-700 mt-4">
              <li><strong>Modern Classrooms:</strong> Tech-enabled learning spaces.</li>
              <li><strong>Spacious Grounds:</strong> Ample space for learning & play.</li>
              <li><strong>Qualified Teachers:</strong> Experienced and passionate educators.</li>
              <li><strong>Holistic Approach:</strong> Academic, extracurricular & personal growth.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission & Core Values (Collapsible with Sliding Effect) */}
      <section className="py-16 bg-gray-100 px-6">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Our Guiding Principles</h2>
        </motion.div>

        <motion.div
          className="mt-10 max-w-4xl mx-auto"
          variants={fadeInSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {[
            { title: "Our Vision", content: "To be a center of excellence, nurturing future leaders with knowledge and integrity." },
            { title: "Our Mission", content: "To provide quality education that fosters innovation, critical thinking, and leadership." },
            { title: "Core Values", content: "Excellence, Integrity, Discipline, Innovation, and Community Service." }
          ].map((item, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                  className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left text-lg font-semibold bg-yellow-600 text-white focus:outline-none">
                    {item.title}
                    <ChevronUpIcon className={`h-6 w-6 transition-transform ${open ? "rotate-180" : ""}`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 text-gray-700">{item.content}</Disclosure.Panel>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </motion.div>
      </section>

      {/* Call to Action with Sliding Effect */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto text-center"
        variants={fadeInSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-white">Enroll Your Child Today!</h2>
        <p className="mt-2 text-gray-300">
          Join a community that values academic excellence and holistic development.
        </p>
        <motion.a
          href="/admissions"
          className="mt-6 inline-block px-6 py-3 text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Apply for Admission
        </motion.a>
      </motion.section>
    </div>
  );
};

export default AboutPage;
