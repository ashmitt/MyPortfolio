import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6" data-aos="fade-up">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-red-900/10 z-0"></div>
      <div className="max-w-4xl mx-auto text-center z-10 pt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">
          Hi, I'm YourName
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
          A passionate developer building modern web experiences.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-red-600 hover:from-purple-600 hover:to-red-700 transition-all duration-300 shadow-lg text-white font-semibold"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
} 