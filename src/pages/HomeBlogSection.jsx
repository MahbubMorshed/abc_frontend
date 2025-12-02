import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categoryStyles = {
  Technology: { icon: "💻", color: "cyan" },
  Research: { icon: "📚", color: "purple" },
  Education: { icon: "🎓", color: "pink" },
  Business: { icon: "📈", color: "blue" },
  Science: { icon: "🔬", color: "green" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const HomeBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    try {
      const res = await getAllBlogs();
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error("Blog fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center py-10">Loading blogs...</p>;
  if (blogs.length === 0)
    return <p className="text-center py-10">No blogs found.</p>;

  return (
    <div className="relative w-full py-20 bg-gradient-to-br from-[#eef3f9] to-[#fafcff] overflow-hidden">
      {/* PARALLAX BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="w-72 h-72 bg-gradient-to-br from-blue-300/40 to-purple-500/40 rounded-full blur-3xl absolute top-10 left-5"
        ></motion.div>

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="w-64 h-64 bg-gradient-to-br from-pink-300/40 to-cyan-400/40 rounded-full blur-3xl absolute bottom-10 right-10"
        ></motion.div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-800 mb-12 text-center drop-shadow-sm"
        >
          Latest Blogs
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => {
            const style = categoryStyles[blog.category] || {
              icon: "📝",
              color: "gray",
            };

            return (
              <motion.div
                key={blog._id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="gradient-border glass p-5 rounded-2xl shadow-lg"
              >
                {/* Category ring */}
                <div
                  className={`w-12 h-12 ring-2 ring-${style.color}-400 ring-offset-2 ring-glow rounded-full flex items-center justify-center text-xl mb-3`}
                >
                  {style.icon}
                </div>

                {/* Thumbnail */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-xl mb-4 shadow"
                />

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-700 line-clamp-3">
                  {blog.shortDescription}
                </p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;
