"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const gradeOptions = {
  "Pre-Primary": ["PP1", "PP2"],
  Primary: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
  "Junior Secondary": ["Grade 7", "Grade 8", "Grade 9"],
};

const AdmissionsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    grade: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, level: e.target.value, grade: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c3e3or6", // Replace with your EmailJS Service ID
        "template_fd7mvfe", // Replace with your EmailJS Template ID
        formData,
        "vFCaFoX_TDUDxw6cy" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          alert("Application submitted successfully!");
          setFormData({ name: "", email: "", phone: "", level: "", grade: "", location: "", message: "" });
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
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-lg">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-400 bg-gray-100 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-400 bg-gray-100 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-400 bg-gray-100 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* School Level Selection (Radio Buttons) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select School Level</label>
            <div className="mt-2 flex flex-col space-y-2">
              {Object.keys(gradeOptions).map((level) => (
                <label
                  key={level}
                  className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="level"
                    value={level}
                    checked={formData.level === level}
                    onChange={handleLevelChange}
                    className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-gray-300"
                  />
                  <span className="text-gray-900 font-semibold">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Grade Selection (Dropdown) */}
          {formData.level && (
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                Select Grade
              </label>
              <select
                id="grade"
                name="grade"
                required
                value={formData.grade}
                onChange={handleChange}
                className="mt-1 p-3 block w-full border border-gray-400 bg-gray-100 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 hover:bg-gray-200"
              >
                <option value="">-- Select Grade --</option>
                {gradeOptions[formData.level as keyof typeof gradeOptions].map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Parent's Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Parent's Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-400 bg-gray-100 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-3 block w-full border border-gray-400 bg-gray-100 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
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
