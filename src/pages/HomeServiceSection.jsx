import React, { useEffect, useState } from "react";
import { getAllServices } from "../api";
import { Link } from "react-router-dom";

const HomeServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const res = await getAllServices();
      setServices(res.data.services);
    } catch (error) {
      console.error("Services fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center py-10">Loading services...</p>;

  if (services.length === 0)
    return <p className="text-center py-10">No services found.</p>;

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Service Title */}
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {service.description}
              </p>

              {/* Read More Link */}
              <Link
                to={`/service/${service.slug}`}
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

export default HomeServicesSection;
