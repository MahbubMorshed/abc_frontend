import React, { useEffect, useState } from "react";
import { getAllServices } from "../api";
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
    <div className="w-full py-16 bg-[#e9eef5]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
        >
          Our Services
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0px 0px 22px rgba(0, 150, 255, 0.45), 0 0 40px rgba(0, 150, 255, 0.25)",
                filter: "blur(0.3px)",
              }}
              whileTap={{
                scale: 0.97,
                boxShadow:
                  "inset 4px 4px 10px #c8d0e7, inset -4px -4px 10px #ffffff",
              }}
              className="
                neumorph-card 
                p-5 rounded-2xl cursor-pointer transition-all duration-300
              "
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-gray-700 line-clamp-3">
                {service.description}
              </p>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="mt-4"
              >
                <Link
                  to={`/service/${service.slug}`}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium"
                >
                  Read More →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServicesSection;
