import React from "react";
import Marquee from "react-fast-marquee";
import { FaRegNewspaper } from "react-icons/fa";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-white shadow-sm rounded-lg p-3 gap-4 border border-gray-100">
      {/* Latest Tag */}
      <span className="bg-secondary text-white px-4 py-2 rounded-md font-semibold">
        Latest
      </span>

      {/* Marquee */}
      <Marquee pauseOnHover={true} speed={55} gradient={false}>
        <div className="flex items-center gap-10">
          {/* Item 1 */}
          <div className="flex items-center gap-2 hover:text-primary transition">
            <FaRegNewspaper size={14} className="text-primary" />
            <p className="font-medium">
              Bangladesh's Export Earnings Show Strong Growth in Q1 2025
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-2 hover:text-primary transition">
            <FaRegNewspaper size={14} className="text-primary" />
            <p className="font-medium">
              Foreign Investment in Bangladesh Reaches Record High in Fiscal
              Year 2024-25
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-2 hover:text-primary transition">
            <FaRegNewspaper size={14} className="text-primary" />
            <p className="font-medium">
              Government Announces New Incentives for Small and Medium
              Enterprises (SMEs)
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
