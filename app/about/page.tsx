"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Image from "next/image";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section (Reused Component) */}
      <Hero />

      {/* History & Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-center">Our Journey</h2>
          <p className="mt-4 text-gray-700 text-center">
            Established in <strong>2008</strong>, Jadamy Elite Academy has grown into one of the leading private schools along 
            <strong> Kangundo-Nairobi Road</strong>. With <strong>spacious grounds</strong> and modern facilities, we nurture <strong>academic excellence, creativity, and discipline</strong>.
          </p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/school-campus.jpg"
            alt="School Campus"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold">Why We Stand Out</h3>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-md">
              <ul className="space-y-3 text-gray-700">
                <li>✅ <strong>Modern Classrooms:</strong> Tech-enabled learning spaces.</li>
                <li>✅ <strong>Spacious Grounds:</strong> Ample space for learning & play.</li>
                <li>✅ <strong>Qualified Teachers:</strong> Experienced and passionate educators.</li>
                <li>✅ <strong>Holistic Approach:</strong> Academic, extracurricular & personal growth.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values (Collapsible Sections) */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Guiding Principles</h2>
        </div>

        <div className="mt-10 max-w-4xl mx-auto">
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
                  transition={{ duration: 0.3 }}
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Enroll Your Child Today!</h2>
        <p className="mt-2 text-gray-700">
          Join a community that values academic excellence and holistic development.
        </p>
        <motion.a
          href="/admissions"
          className="mt-6 inline-block px-6 py-3 text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Apply for Admission
        </motion.a>
      </section>
    </div>
  );
};

export default AboutPage;
