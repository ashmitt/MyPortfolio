import React from 'react';

export default function Projects({ projects, darkMode }) {
  return (
    <section id="projects" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">GitHub Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-purple-900/40 text-purple-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 