import React from 'react';
import Navbar from '../components/Navbar';
import { FaBriefcase, FaLaptopCode, FaUsers } from 'react-icons/fa';

const Career = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden mb-10">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

      {/* Career Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 rounded-3xl shadow-xl max-w-6xl mx-auto mt-10 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center underline decoration-white/70">
          Join Our Team
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
          Dragon News is always looking for talented individuals passionate about delivering quality news and innovative solutions. 
          If you are ambitious, creative, and ready to grow, we would love to hear from you.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-center">
          Explore our open positions and become part of a team that values integrity, collaboration, and professional development.
        </p>
      </section>

      {/* Career Features / Opportunities */}
      <section className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-3xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaBriefcase className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">Marketing & PR</h3>
          <p className="text-white/80">
            Drive brand awareness and connect with our global audience through strategic marketing campaigns.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-3xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaLaptopCode className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">Tech & Development</h3>
          <p className="text-white/80">
            Build and maintain our digital platforms, improve user experience, and innovate new tech solutions.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white rounded-3xl shadow-xl p-8 text-center transform transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaUsers className="mx-auto mb-4 w-12 h-12" />
          <h3 className="text-2xl font-bold mb-4">Community & Support</h3>
          <p className="text-white/80">
            Engage with our community, provide top-notch support, and help strengthen the Dragon News family.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Career;
