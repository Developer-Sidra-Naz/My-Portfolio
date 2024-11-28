// src/components/Skills.tsx

import React from 'react';

const skills = [
  { name: 'HTML', color: 'text-orange-500' },
  { name: 'CSS', color: 'text-blue-500' },
  { name: 'JavaScript', color: 'text-yellow-500' },
  { name: 'TypeScript', color: 'text-blue-600' },
  { name: 'React', color: 'text-cyan-500' },
  { name: 'Tailwind CSS', color: 'text-teal-500' },
  { name: 'Node.js', color: 'text-green-600' },
];

const Skills: React.FC = () => (
  <section id="skills" className="my-10">
    <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      Skills
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <h3 className={`text-xl font-semibold ${skill.color} mb-4`}>
            {skill.name}
          </h3>
          <p className="text-gray-300">Proficient in {skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
