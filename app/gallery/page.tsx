"use client";

import Gallery from "@/components/Gallery"; // Import the reusable Gallery component
import { motion } from "framer-motion";

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gray-900 text-white text-center py-16"
      >
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="mt-2 text-lg text-gray-300">
          Explore moments from our vibrant school life
        </p>
      </motion.div>

      {/* Gallery Component */}
      <div className="container mx-auto px-4 py-10">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
