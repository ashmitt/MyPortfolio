import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">Contact Me</h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          Feel free to reach out if you'd like to collaborate or have any questions!
        </p>
        <form className="space-y-6 max-w-xl mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-purple-500 outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-purple-500 outline-none" />
          <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-purple-500 outline-none"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-red-600 hover:from-purple-600 hover:to-red-700 text-white py-3 rounded transition">
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://instagram.com/yourhandle " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
            Instagram
          </a>
          <a href="https://linkedin.com/in/yourprofile " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername " target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
} 