import React from 'react';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`} data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          I am a full-stack developer with a passion for creating clean, functional, and visually appealing websites and applications. I thrive in collaborative environments and enjoy turning complex problems into simple, elegant solutions.
        </p>
      </div>
    </section>
  );
} 