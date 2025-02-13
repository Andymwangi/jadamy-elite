"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Sports & Athletics",
    description:
      "We offer football, basketball, swimming, and track events, promoting teamwork and physical fitness.",
    image: "/football.jpeg", // Replace with actual image paths
  },
  {
    title: "Music & Drama",
    description:
      "Our vibrant music and drama clubs allow students to explore their artistic talents through performances.",
    image: "/music.jpeg",
  },
  {
    title: "Science Club",
    description:
      "Hands-on experiments and scientific exploration help students develop problem-solving skills.",
    image: "/science.jpeg",
  },
  {
    title: "Coding & Robotics",
    description:
      "We introduce students to programming and AI to prepare them for the future.",
    image: "/IT.jpeg",
  },
];

const Activities = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-yellow-600 text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our School Activities
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-600">{activity.title}</h3>
                <p className="text-gray-700 mt-2">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
