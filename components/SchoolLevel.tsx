import Image from "next/image";

interface SchoolLevelProps {
  title: string;
  description: string;
  curriculum: string;
  activities: string[];
  facilities: string[];
  image: string;
}

const SchoolLevel: React.FC<SchoolLevelProps> = ({ title, description, curriculum, activities, facilities, image }) => {
  return (
    <div className="container mx-auto p-6 md:p-12">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700 md:text-xl">{description}</p>
      </div>

      {/* Curriculum Section */}
      <div className="mt-12 bg-yellow-100 p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">📘 Curriculum</h2>
        <p className="mt-4 text-gray-700 text-lg">{curriculum}</p>
      </div>

      {/* Activities Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">🏅 Extracurricular Activities</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-lg text-gray-700">{activity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="mt-12 bg-gray-100 p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">🏫 Facilities</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <p className="text-lg text-gray-700">{facility}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">Interested in enrolling?</p>
        <a href="/admissions" className="mt-4 inline-block bg-yellow-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default SchoolLevel;
