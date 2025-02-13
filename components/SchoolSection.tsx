"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SchoolSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose <span className="text-yellow-600">Jadamy Elite Academy?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide a top-tier education system with modern facilities and a nurturing environment to help students excel.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image src="/images/curriculum.jpg" alt="Curriculum" width={80} height={80} className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Comprehensive Curriculum</h3>
            <p className="text-gray-600 mt-2">
              We follow a balanced curriculum, blending academics with extra-curricular activities to ensure holistic development.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image src="/images/facilities.jpg" alt="Facilities" width={80} height={80} className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Modern Facilities</h3>
            <p className="text-gray-600 mt-2">
              Our school features science labs, ICT labs, a spacious library, and top-tier sports grounds.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }} 
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image src="/images/teachers.jpg" alt="Teachers" width={80} height={80} className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Qualified & Experienced Teachers</h3>
            <p className="text-gray-600 mt-2">
              Our teachers are highly trained professionals dedicated to providing the best education.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }} 
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image src="/images/sports.jpg" alt="Sports" width={80} height={80} className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Sports & Extracurriculars</h3>
            <p className="text-gray-600 mt-2">
              We offer a variety of sports and clubs to encourage talent development and teamwork.
            </p>
          </motion.div>

          {/* Feature 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.0 }} 
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image src="/images/transport.jpg" alt="Transport" width={80} height={80} className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Safe Transport System</h3>
            <p className="text-gray-600 mt-2">
              We offer safe and reliable school transport services to various locations.
            </p>
          </motion.div>

          {/* Feature 6 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 1.2 }} 
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image src="/images/success.jpg" alt="Success" width={80} height={80} className="mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold text-gray-800">Student Success</h3>
            <p className="text-gray-600 mt-2">
              Our students achieve academic excellence and secure top university placements.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-12"
        >
          <Link href="/about">
            <button className="px-6 py-3 bg-yellow-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-700 transition duration-300">
              Learn More About Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolSection;
