import React, { useEffect, useState } from "react";
import { getAllCfp } from "../api";
import { Link } from "react-router-dom";

const HomeCfpSection = () => {
  const [cfp, setCfp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCfp();
  }, []);

  const loadCfp = async () => {
    try {
      const res = await getAllCfp();
      setCfp(res.data.cfp);
    } catch (error) {
      console.error("CFP fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center py-10">Loading CFP...</p>;

  if (cfp.length === 0)
    return <p className="text-center py-10">No CFP announcements found.</p>;

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Call For Papers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cfp.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {item.name}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2">
                {item.heading}
              </p>

              <Link
                to={`/cfp/${item.slug}`}
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

export default HomeCfpSection;
