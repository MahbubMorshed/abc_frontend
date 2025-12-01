import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleAdvisory } from "../api";

const AdvisoryDetails = () => {
  const { slug } = useParams();
  const [advisory, setAdvisory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdvisory();
  }, []);

  const fetchAdvisory = async () => {
    try {
      const res = await getSingleAdvisory(slug);
      setAdvisory(res.data.advisory);
    } catch (error) {
      console.error("Advisory details fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Skeleton Loader
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 animate-pulse">
        <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
        <div className="h-8 bg-gray-300 w-1/2 mb-4 rounded"></div>
        <div className="h-6 bg-gray-300 w-1/3 mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 w-full mb-2 rounded"></div>
        <div className="h-4 bg-gray-300 w-5/6 mb-2 rounded"></div>
      </div>
    );
  }

  if (!advisory)
    return <p className="text-center py-10">Advisory member not found.</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow p-6 md:flex gap-6">
        {/* Image */}
        <img
          src={advisory.image}
          alt={advisory.name}
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />

        {/* Content */}
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800">{advisory.name}</h1>

          <p className="text-gray-600 mt-1 text-lg">{advisory.title}</p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            {advisory.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryDetails;
