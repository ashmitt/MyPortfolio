import React from 'react';

export default function Skills({ skills, darkMode }) {
  return (
    <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} data-aos="fade-up">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 