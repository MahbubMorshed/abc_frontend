import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleService } from "../api";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-12 px-4"
    >
      {/* Back link */}
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Services
      </Link>

      {/* Image */}
      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-72 object-cover rounded-xl shadow mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {service.title}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-gray-700 leading-relaxed mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {service.description}
      </motion.p>

      {service.domain && (
        <p className="text-gray-600">
          <span className="font-semibold">Domain: </span>
          {service.domain}
        </p>
      )}
    </motion.div>
  );
};

export default ServiceDetails;
