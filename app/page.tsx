import Link from "next/link";

import Hero from "@/components/Hero";
import Admissions from "@/components/Admissions";
import SchoolSection from "@/components/SchoolSection";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Welcome Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to Jadamy Elite Academy</h2>
        <p className="mt-4 text-lg text-gray-600">
          A place where academic excellence meets holistic education.
        </p>
        <div className="mt-6">
          <Link href="/about">
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </section>

      <Admissions />
      <SchoolSection />
      <Activities />
      <Gallery />
    </>
  );
};

export default Home;
