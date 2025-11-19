// import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
// import { Link } from "react-router";

// const NewsCard = ({ news }) => {
//   const { id, title, author, thumbnail_url, details, rating, total_view } =
//     news;

//   const formattedDate = new Date(
//     news.author.published_date
//   ).toLocaleDateString();

//   return (
//     <div className="card bg-base-100 shadow-md mb-6">
//       {/* Author + Share */}
//       <div className="flex bg-base-200 justify-between items-center p-4">
//         <div className="flex items-center gap-3">
//           <div className="avatar">
//             <div className="w-10 rounded-full">
//               <img src={author.img} alt={author.name} />
//             </div>
//           </div>
//           <div>
//             <h2 className="font-bold text-sm">{author.name}</h2>
//             <p className="text-xs text-gray-500">{formattedDate}</p>
//           </div>
//         </div>
//         <button className="text-gray-500 hover:text-primary flex gap-1">
//           <FaRegBookmark></FaRegBookmark>
//           <FaShareAlt />
//         </button>
//       </div>

//       {/* Title */}
//       <div className="px-4 py-4">
//         <h2 className="text-lg font-bold text-primary  cursor-pointer">
//           {title}
//         </h2>
//       </div>

//       {/* Image */}
//       <div className="px-4 py-2">
//         <img
//           src={thumbnail_url}
//           alt={title}
//           className="w-full h-48 object-cover rounded-md"
//         />
//       </div>

//       {/* Details */}
//       <div className="px-4  text-accent">
//         {details.length > 200 ? (
//           <>
//             {details.slice(0, 200)}...
//             <Link
//               to={`/news-details/${id}`}
//               className="text-primary font-semibold cursor-pointer hover:underline"
//             >
//               Read More
//             </Link>
//           </>
//         ) : (
//           details
//         )}
//       </div>

//       {/* Footer */}
//       <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 mt-3">
//         {/* Rating */}
//         <div className="flex items-center gap-1 text-orange-400">
//           {Array.from({ length: rating.number }).map((_, i) => (
//             <FaStar key={i} />
//           ))}
//           <span className="ml-2 text-gray-600">{rating.number}</span>
//         </div>

//         {/* Views */}
//         <div className="flex items-center gap-2 text-gray-500">
//           <FaEye />
//           <span>{total_view}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-gray-700 transition-colors">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-gray-700 transition-colors">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-5">
        <h1 className="text-xl font-bold leading-snug hover:text-primary transition-colors cursor-pointer">
          {title}
        </h1>
      </div>

      {/* Image */}
      <div className="px-5 py-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-60 object-cover rounded-xl shadow-sm"
        />
      </div>

      {/* Details */}
      <div className="px-5 text-gray-600 leading-relaxed pb-4 text-sm">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news-details/${id}`}
              className="text-primary font-semibold ml-1 hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-4 bg-gray-50">

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: Math.round(rating.number) }).map((_, i) => (
            <FaStar key={i} size={15} />
          ))}
          <span className="ml-1 text-gray-700 text-sm">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye size={16} />
          <span className="text-sm">{total_view}</span>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;
