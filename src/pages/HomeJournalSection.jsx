import React, { useEffect, useState } from "react";
import { getAllJournal } from "../api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const HomeJournalSection = () => {
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJournals();
  }, []);

  const loadJournals = async () => {
    try {
      const res = await getAllJournal();
      setJournals(res.data.journals);
    } catch (error) {
      console.error("Journal fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p className="text-center py-10 animate-pulse text-gray-600">
        Loading journals...
      </p>
    );
  if (journals.length === 0)
    return <p className="text-center py-10">No journals found.</p>;

  return (
    <div className="w-full py-16 bg-[#e9eef5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
        >
          Our Journals
        </motion.h2>
        <motion.p className="text-lg text-gray-600 text-center mb-3">
          {" "}
          ABC publishes peer-reviewed journals presenting the latest research
          across a broad range of disciplines. Each journal provides essential
          information for authors, editors, subscribers, and researchers.{" "}
        </motion.p>

        {/* Grid (6 cards per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {journals.map((journal, index) => (
            <motion.div
              key={journal._id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0px 0px 22px rgba(0, 150, 255, 0.35), 0 0 40px rgba(0, 150, 255, 0.25)",
                filter: "blur(0.3px)",
              }}
              whileTap={{
                scale: 0.97,
                boxShadow:
                  "inset 4px 4px 10px #c8d0e7, inset -4px -4px 10px #ffffff",
              }}
              className="
                neumorph-card
                bg-[#eef2f7]
                p-4 rounded-2xl cursor-pointer 
                shadow-[8px_8px_16px_#c7ccd4,_-8px_-8px_16px_#ffffff]
                transition-all duration-300
                flex flex-col
              "
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={journal.image}
                  alt={journal.title}
                  className="w-full h-32 object-cover rounded-xl transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900 mt-3 line-clamp-2">
                {journal.title}
              </h3>

              {/* Discipline */}
              <p className="text-xs text-gray-600">{journal.disciplin}</p>

              {/* Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to={`/journal/${journal.slug}`}
                  className="text-blue-600 text-xs font-medium hover:underline"
                >
                  Journal Details →
                </Link>

                {journal.domain && (
                  <a
                    href={
                      journal.domain.startsWith("http")
                        ? journal.domain
                        : `https://${journal.domain}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-600 text-xs text-center py-1.5 rounded-md hover:bg-blue-700 transition"
                  >
                    Visit Journal
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeJournalSection;
