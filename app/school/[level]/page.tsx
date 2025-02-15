"use client";

import { useParams } from "next/navigation";
import SchoolLevel from "@/components/SchoolLevel";

const SchoolLevelPage = () => {
  const { level } = useParams();

  const schoolLevels = {
    "pre-primary": {
      title: "Pre-Primary",
      description: "A nurturing environment for early learners, fostering curiosity and foundational skills.",
      curriculum: "Early Childhood Development (ECD) - focusing on cognitive, social, and motor skills.",
      activities: ["Storytelling & Drama", "Outdoor Play", "Music & Dance", "Art & Craft"],
      facilities: ["Spacious Classrooms", "Playground", "Creative Learning Spaces", "Library"],
      image: "/images/pre-primary.jpg",
    },
    primary: {
      title: "Primary School",
      description: "A structured curriculum designed to build knowledge, creativity, and critical thinking.",
      curriculum: "Kenyan CBC curriculum covering Mathematics, English, Science, Social Studies, and more.",
      activities: ["Sports & Athletics", "Chess Club", "Debate & Public Speaking", "Scouting"],
      facilities: ["Science Lab", "Computer Lab", "Library", "Sports Grounds"],
      image: "/images/primary.jpg",
    },
    "junior-secondary": {
      title: "Junior Secondary",
      description: "Preparing students for advanced learning with specialized subjects and career-oriented skills.",
      curriculum: "CBC junior secondary education with a blend of academic and practical subjects.",
      activities: ["STEM Club", "Drama & Theatre", "Music Band", "Leadership Programs"],
      facilities: ["Digital Learning Center", "Modern Science Labs", "Basketball Court", "Music Room"],
      image: "/images/junior-secondary.jpg",
    },
  };

  const levelData = schoolLevels[level as keyof typeof schoolLevels];

  if (!levelData) {
    return <div className="text-center text-red-500">School level not found.</div>;
  }

  return <SchoolLevel {...levelData} />;
};

export default SchoolLevelPage;
