// import React from 'react';

// const NewsDetailsCard = ({news}) => {
//     return (
//         <div>
//             News Details Card HEre {news.title}
//         </div>
//     );
// };

// export default NewsDetailsCard;

import React from "react";
import { Link } from "react-router";
import { FaEye, FaStar } from "react-icons/fa";

const NewsDetailsCard = ({ news }) => {
  if (!news) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-5 md:p-8 mt-6">
      {/* Thumbnail */}
      <div className="w-full mb-5">
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
        {news.title}
      </h1>

      {/* Author */}
      <div className="flex items-center gap-3 mb-5">
        <img
          src={news.author?.img}
          alt={news.author?.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="text-gray-800 font-medium">{news.author?.name}</p>
          <p className="text-gray-500 text-sm">
            {new Date(news.author?.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* News Details */}
      <p className="text-gray-700 leading-relaxed mb-4">{news.details}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {news.tags?.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Extra Info */}
      {/* <div className="mt-6 flex flex-wrap items-center justify-between text-gray-600 text-sm">
        <p>Views: {news.total_view}</p>
        <p className="capitalize">Ratings: {news.rating?.badge}</p>
      </div> */}
      <div className="mt-6 flex flex-wrap items-center justify-between text-gray-700 text-sm font-medium">

  {/* Views */}
  <p className="flex items-center gap-2">
    <FaEye className="text-blue-600" />
    {news.total_view?.toLocaleString()} views
  </p>

  {/* Rating */}
  <p className="flex items-center gap-2">
    <FaStar className="text-yellow-500" />
    <span className="font-semibold">{news.rating?.number}</span>
    {/* <span className="capitalize text-gray-500">
      ({news.rating?.badge})
    </span> */}
  </p>

</div>
      {/* Back Button */}
      <div className="mt-4">
        <Link
          to={`/category/${news.category_id}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium 
             hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-sm"
        >
          <span className="text-lg">←</span>
          Back 
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
