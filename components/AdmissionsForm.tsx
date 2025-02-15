"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const gradeOptions = {
  "Pre-Primary": ["PP1", "PP2"],
  Primary: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
  "Junior Secondary": ["Grade 7", "Grade 8", "Grade 9"],
};

const locationOptions = ["Embakasi", "Utawala", "Ruai", "Githunguri", "Kamulu", "Joska", "Other"];

const AdmissionsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentLevel: "",
    grade: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c3e3or6",
        "template_fd7mvfe",
        formData,
        "vFCaFoX_TDUDxw6cy"
      )
      .then(
        () => {
          alert("Application submitted successfully!");
          setFormData({ name: "", email: "", phone: "", studentLevel: "", grade: "", location: "", message: "" });
        },
        () => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-600 text-center">Admissions Application Form</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Student Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Student Level</label>
            <select
              name="studentLevel"
              required
              value={formData.studentLevel}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="" disabled>Select Level</option>
              {Object.keys(gradeOptions).map((level) => (
                <option key={level} value={level} className="hover:bg-yellow-100">
                  {level}
                </option>
              ))}
            </select>
          </div>

          {/* Grade */}
          {formData.studentLevel && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Grade</label>
              <select
                name="grade"
                required
                value={formData.grade}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="" disabled>Select Grade</option>
                {gradeOptions[formData.studentLevel as keyof typeof gradeOptions].map((grade) => (
                  <option key={grade} value={grade} className="hover:bg-yellow-100">
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <select
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
            >
              <option value="" disabled>Select Location</option>
              {locationOptions.map((loc) => (
                <option key={loc} value={loc} className="hover:bg-yellow-100">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Information</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md text-gray-900 focus:ring-yellow-500 focus:border-yellow-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdmissionsForm;
