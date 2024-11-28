// src/components/Projects.tsx

import React from "react";
import Link from "next/link"; // Import Link from Next.js

const projects = [
  {
    title: "Static Resume",
    description: "Using of HTML and CSS.",
    link: "https://static-resume-building-hackathon-1-0.vercel.app",
    bgColor: "from-purple-600 to-pink-500",
  },
  {
    title: "Edtable Resume",
    description: "Using of HTML, CSS and Typescript with a preview button.",
    link: "https://editable-resume-xi-ten.vercel.app",
    bgColor: "from-teal-600 to-blue-500",
  },
  {
    title: "Multipage Assignment",
    description: "A multipage assignment using of next.js with tailwind CSS.",
    link: "https://multipage-pakwheel-9k5k.vercel.app",
    bgColor: "from-red-600 to-yellow-500",
  },
];

const Project: React.FC<{ title: string; description: string; link: string; bgColor: string }> = ({
  title,
  description,
  link,
  bgColor,
}) => (
  <div
    className={`p-6 bg-gradient-to-br ${bgColor} text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-lg mb-4">{description}</p>
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-lg font-medium text-white bg-transparent border-2 border-white rounded py-2 px-4 hover:bg-white hover:text-black transition duration-300"
    >
      View Project
    </Link>
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="my-10">
    <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      My Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Project
          key={project.title} // Ensure a unique key
          title={project.title}
          description={project.description}
          link={project.link}
          bgColor={project.bgColor}
        />
      ))}
    </div>
  </section>
);

export default Projects;
