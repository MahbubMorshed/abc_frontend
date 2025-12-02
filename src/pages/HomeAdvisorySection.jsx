import React, { useEffect, useState } from "react";
import { getAllAdvisory } from "../api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AdvisorySection = () => {
  const [advisory, setAdvisory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAdvisory();
  }, []);

  const loadAdvisory = async () => {
    try {
      const res = await getAllAdvisory();
      setAdvisory(res.data.advisory);
    } catch (error) {
      console.error("Advisory fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <p className="text-center py-10">Loading advisory members...</p>;

  if (advisory.length === 0)
    return <p className="text-center py-10">No advisory members found.</p>;

  return (
    <div className="w-full py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
        >
          Advisory Board
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-gray-600 mb-12"
        >
          This is our dedicated board who work day-in and day-out together to
          bring our participants the most amazing scholars for a digitally
          connected world.
        </motion.p>

        {/* Advisory Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {advisory.map((item) => (
            <motion.div
              key={item._id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 15px 35px rgba(0,0,0,0.12)",
              }}
              className="bg-white rounded-xl shadow-md p-5 border border-gray-100 transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl mb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {item.name}
              </h3>

              <p className="text-sm text-blue-600 font-medium mt-1 line-clamp-1">
                {item.title}
              </p>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>

              <Link
                to={`/advisory/${item.slug}`}
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AdvisorySection;

// import React, { useEffect, useState } from "react";
// import { getAllAdvisory } from "../api";
// import { Link } from "react-router-dom";

// const AdvisorySection = () => {
//   const [advisory, setAdvisory] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadAdvisory();
//   }, []);

//   const loadAdvisory = async () => {
//     try {
//       const res = await getAllAdvisory();
//       setAdvisory(res.data.advisory);
//     } catch (error) {
//       console.error("Advisory fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading)
//     return <p className="text-center py-10">Loading advisory members...</p>;

//   if (advisory.length === 0)
//     return <p className="text-center py-10">No advisory members found.</p>;

//   return (
//     <div className="w-full py-10 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Title */}
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">
//           Advisory Board
//         </h2>

//         {/* Advisory Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {advisory.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
//             >
//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />

//               {/* Name */}
//               <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
//                 {item.name}
//               </h3>

//               {/* Title */}
//               <p className="text-sm text-gray-600">{item.title}</p>

//               {/* Description */}
//               <p className="text-sm text-gray-600 mt-2 line-clamp-3">
//                 {item.description}
//               </p>

//               <Link
//                 to={`/advisory/${item.slug}`}
//                 className="inline-block mt-3 text-blue-600 font-medium hover:underline"
//               >
//                 Read More →
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdvisorySection;
