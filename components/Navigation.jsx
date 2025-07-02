import React from 'react';

export default function Navigation({ darkMode }) {
  return (
    <nav className={`sticky top-0 backdrop-blur-md z-40 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">YourName</h1>
        <ul className="flex gap-6">
          {['about', 'objectives', 'education', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="hover:text-purple-500 transition">{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 