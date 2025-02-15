"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const galleryImages = [
  "/classroom.jpeg",
  "/classroom1.jpeg",
  "/children.jpeg",
  "/schoolbus.jpeg",
  "/children3.jpeg",
  "/football.jpg",
];

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            School <span className="text-yellow-600">Gallery</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse of life at Jadamy Elite Academy—our students, activities, and facilities.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-5xl mx-auto"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                  onClick={() => openLightbox(image)}
                >
                  <Image
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    width={500}
                    height={350}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">View Image</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white bg-gray-800 px-3 py-2 rounded-full hover:bg-gray-700"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Expanded View"
                width={800}
                height={600}
                className="max-w-full max-h-[90vh] rounded-lg"
              />
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
