import React, { useEffect, useState } from "react";
import { getAllAdvisory } from "../api";
import { Link } from "react-router-dom";

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
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Advisory Board
        </h2>

        {/* Advisory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advisory.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {item.name}
              </h3>

              {/* Title */}
              <p className="text-sm text-gray-600">{item.title}</p>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {item.description}
              </p>

              <Link
                to={`/advisory/${item.slug}`}
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

export default AdvisorySection;
