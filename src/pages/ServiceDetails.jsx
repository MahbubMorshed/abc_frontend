import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleService } from "../api";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, [slug]);

  const loadService = async () => {
    try {
      const res = await getSingleService(slug);
      setService(res.data.service);
    } catch (error) {
      console.error("Service fetch error:", error);
      setService(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center py-10">Loading service...</p>;

  if (!service) return <p className="text-center py-10">Service not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Back Link */}
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Services
      </Link>

      {/* Service Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

      {/* Description */}
      <p className="text-gray-700 mb-4">{service.description}</p>

      {/* Optional Domain */}
      {service.domain && (
        <p className="text-gray-500">
          <span className="font-semibold">Domain: </span>
          {service.domain}
        </p>
      )}
    </div>
  );
};

export default ServiceDetails;
