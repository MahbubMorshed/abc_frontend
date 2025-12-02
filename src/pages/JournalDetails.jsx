import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleJournal } from "../api";
import { motion } from "framer-motion";

const JournalDetails = () => {
  const { slug } = useParams();
  const [journal, setJournal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJournal();
  }, [slug]);

  const fetchJournal = async () => {
    try {
      const res = await getSingleJournal(slug);
      setJournal(res.data.journal);
    } catch (err) {
      console.error("Single journal error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!journal)
    return (
      <div className="text-center py-20 text-gray-600">Journal not found</div>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <Link to="/" className="text-blue-600 hover:underline block mb-6">
        ← Back to Journals
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">{journal.title}</h1>

      <div className="overflow-hidden rounded-lg mb-6 shadow-lg">
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          src={journal.image}
          alt={journal.title}
          className="w-full h-80 object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-6 text-gray-700 text-sm mb-6">
        <span>
          <strong>Disciplin:</strong> {journal.disciplin}
        </span>

        {journal.domain && (
          <a
            href={
              journal.domain.startsWith("http")
                ? journal.domain
                : `https://${journal.domain}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 text-xs text-center p-3 rounded-md hover:bg-blue-700 transition"
          >
            Visit Journal
          </a>
        )}
      </div>

      <p className="text-gray-800 leading-relaxed whitespace-pre-line">
        {journal.description}
      </p>
    </motion.div>
  );
};

export default JournalDetails;

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getSingleJournal } from "../api";
// // import SkeletonJournal from "../components/SkeletonJournal";

// const JournalDetails = () => {
//   const { slug } = useParams();

//   const [journal, setJournal] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchJournal();
//   }, [slug]);

//   const fetchJournal = async () => {
//     try {
//       const res = await getSingleJournal(slug);
//       setJournal(res.data.journal);
//     } catch (err) {
//       console.error("Single journal error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   //   if (loading) return <SkeletonJournal />;

//   if (!journal)
//     return (
//       <div className="text-center py-20 text-gray-600">Journal not found</div>
//     );

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <Link to="/" className="text-blue-600 hover:underline block mb-5">
//         ← Back to Journals
//       </Link>

//       <h1 className="text-3xl font-bold text-gray-800 mb-4">{journal.title}</h1>

//       <img
//         src={journal.image}
//         alt={journal.title}
//         className="w-full h-80 object-cover rounded-lg shadow mb-6"
//       />

//       <div className="flex gap-6 text-gray-600 text-sm mb-4">
//         <span className="font-medium">Disciplin:</span> {journal.disciplin}
//         <span className="font-medium">Domain:</span> {journal.domain}
//       </div>

//       <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//         {journal.description}
//       </p>
//     </div>
//   );
// };

// export default JournalDetails;
