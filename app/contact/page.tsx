
import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-600">
          We'd love to hear from you! Reach out with any inquiries or visit us at Jadamy Elite Academy.
        </p>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Details Section */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Our Contact Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Phone Contact */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-yellow-500 text-3xl" />
            <h3 className="font-medium text-lg mt-2">Phone</h3>
            <p className="mt-1">+254 722 440 402</p>
            <p>+254 720 309 209</p>
          </div>

          {/* Email Contact */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-yellow-500 text-3xl" />
            <h3 className="font-medium text-lg mt-2">Email</h3>
            <p className="mt-1">info@jadamyeliteacademy@gmail.com</p>
            <p>support@jadamyeliteacademy@gmail.com</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl" />
            <h3 className="font-medium text-lg mt-2">Location</h3>
            <p className="mt-1 text-center">
              Kagundo-Nairobi Road, <br /> Ruai, Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-4xl h-64 md:h-80 lg:h-96 shadow-lg rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821397929036!2d36.994016675595155!3d-1.2808574356215099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6db30bfe0f5b%3A0x989597ba58182569!2sJADAMY%20ELITE%20ACADEMY%20RUAI!5e0!3m2!1sen!2ske!4v1739460379969!5m2!1sen!2ske"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">
          Visit or Contact Us
        </h2>
        <p className="text-gray-600 mt-2">
          Need more information? Fill out the form, give us a call, or visit us in person.
        </p>
        <div className="mt-6">
          <a href="/admissions">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Enroll Now
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
