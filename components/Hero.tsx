"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="pt-20 relative bg-gradient-to-r from-yellow-50 to-yellow-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/jadamy1.PNG"
          alt="School Image"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 md:px-16">
        {/* Sliding Animated Text */}
        <motion.h1
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1.5 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Welcome to{" "}
          <span className="text-yellow-600">Jadamy Elite Academy</span>
        </motion.h1>

        {/* Sliding Subtext */}
        <motion.p
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1.5, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl"
        >
          Excellence in Education, Excellence in Life. Shaping young minds for a
          brighter future.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6"
        >
          <Link href="/about">
            <button className="px-6 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300">
              Learn More
            </button>
          </Link>

          <Link href="/admissions">
            <button className="px-6 py-3 bg-white text-yellow-700 text-lg font-semibold border border-yellow-600 rounded-lg shadow-lg hover:bg-yellow-50 transition duration-300">
              Apply Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
