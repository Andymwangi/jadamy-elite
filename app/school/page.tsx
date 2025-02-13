"use client";

import SchoolSection from "@/components/SchoolSection"; // Import the reusable SchoolSection component
import { motion } from "framer-motion";

const SchoolPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gray-900 text-white text-center py-16"
      >
        <h1 className="text-4xl font-bold">Our School</h1>
        <p className="mt-2 text-lg text-gray-300">
          Discover our commitment to excellence in education
        </p>
      </motion.div>

      {/* School Section */}
      <div className="container mx-auto px-4 py-10">
        <SchoolSection />
      </div>
    </div>
  );
};

export default SchoolPage;
