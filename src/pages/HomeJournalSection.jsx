import React, { useEffect, useState } from "react";
import { getAllJournal } from "../api";
import { Link } from "react-router-dom";

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

  if (loading) return <p className="text-center py-10">Loading journals...</p>;

  if (journals.length === 0)
    return <p className="text-center py-10">No journals found.</p>;

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Latest Journals
        </h2>

        {/* Journals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {journals.map((journal) => (
            <div
              key={journal._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {journal.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {journal.description}
              </p>

              <div className="mt-4 flex justify-between text-xs text-gray-500">
                <span>{journal.disciplin}</span>
                <span>{journal.domain}</span>
              </div>

              <Link
                to={`/journal/${journal.slug}`}
                className="inline-block mt-3 text-blue-600 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeJournalSection;
