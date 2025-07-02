import React from 'react';

export default function Footer({ darkMode }) {
  return (
    <footer className={`py-6 text-center text-gray-500 border-t ${darkMode ? 'border-gray-800' : 'border-gray-300'}`}>
      <p>&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
    </footer>
  );
} 