import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Objectives from './components/Objectives';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Example",
      year: "2020 - 2024"
    },
    {
      degree: "High School Diploma",
      institution: "Example High School",
      year: "2018 - 2020"
    }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and TailwindCSS.",
      link: "https://github.com/yourusername/portfolio ",
      tags: ["React", "TailwindCSS"]
    },
    {
      title: "Task Manager App",
      description: "A simple task manager with CRUD operations and local storage support.",
      link: "https://github.com/yourusername/task-manager ",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Weather Dashboard",
      description: "Fetches live weather data and displays forecast for multiple cities.",
      link: "https://github.com/yourusername/weather-app ",
      tags: ["API", "JavaScript", "OpenWeatherMap"]
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "HTML/CSS", "Git", "MongoDB", "Express", "Figma"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-red-500 text-white shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
      </div>

      <Navigation darkMode={darkMode} />
      <Hero />
      <About darkMode={darkMode} />
      <Objectives />
      <Education education={education} darkMode={darkMode} />
      <Projects projects={projects} darkMode={darkMode} />
      <Skills skills={skills} darkMode={darkMode} />
      <Contact />
      <Footer darkMode={darkMode} />
    </div>
  );
}