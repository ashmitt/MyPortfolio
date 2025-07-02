import React from 'react';

export default function Education({ education, darkMode }) {
  return (
    <section id="education" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution} ({edu.year})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 