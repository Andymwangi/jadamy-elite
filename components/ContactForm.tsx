"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS Config
    const serviceId = "service_c3e3or6";
    const templateId = "template_dxafdb4";
    const publicKey = "vFCaFoX_TDUDxw6cy";

    // Validate Inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setStatus({ type: "success", message: "Message sent successfully! We'll get back to you soon." });

      // Reset Form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Contact Us</h3>
      <p className="text-center text-gray-600 mb-6">
        Fill out the form below, and we’ll reach out to you as soon as possible.
      </p>

      {/* Status Message */}
      {status.message && (
        <div className={`p-3 text-center text-sm rounded-md mb-4 ${status.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={sendEmail} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
