import { NextPage } from "next";
import Activities from "@/components/Activities";

const ActivitiesPage: NextPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">School Activities</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover a variety of extracurricular activities that nurture talents and skills beyond the classroom.
        </p>
      </section>

      {/* Activities Component */}
      <Activities />

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">
          Want to Enroll Your Child?
        </h2>
        <p className="text-gray-600 mt-2">
          Join our exciting programs and give your child the best opportunities for growth.
        </p>
        <div className="mt-6">
          <a href="/admissions">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ActivitiesPage;
