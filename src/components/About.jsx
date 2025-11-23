import React from 'react';
import Navbar from '../components/Navbar';
import { FaNewspaper, FaChartLine, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden mb-10">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      {/* About Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-6 rounded-3xl shadow-xl max-w-6xl mx-auto mt-10 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center underline decoration-white/70">
          About Dragon News
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
          Dragon News is your trusted source for the latest headlines, in-depth articles, and trending stories from around the world. 
          We focus on accuracy, speed, and clarity, ensuring our readers are always informed with quality news content.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
          Our mission is to connect people with relevant information, offering insights into politics, technology, entertainment, and more. 
          We value transparency, credibility, and innovation in journalism.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-center">
          Join our growing community and stay updated every day with Dragon News — where stories come alive and knowledge meets trust.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-3xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaNewspaper className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">Latest Headlines</h3>
          <p className="text-white/80">
            Stay updated with breaking news from around the globe in real-time.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-3xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaChartLine className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">Expert Analysis</h3>
          <p className="text-white/80">
            Get in-depth analysis and insights from our team of experienced journalists.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-3xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaUsers className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">Community Engagement</h3>
          <p className="text-white/80">
            Connect with fellow readers, share opinions, and join meaningful discussions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
