import React, { useEffect, useState } from "react";
import { getSingleBlog } from "../api";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlog();
  }, [slug]);

  const loadBlog = async () => {
    try {
      const res = await getSingleBlog(slug);
      setBlog(res.data.blog);
    } catch (error) {
      console.error("Blog fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <p className="text-center py-10 text-lg">Loading blog...</p>;
  if (!blog)
    return <p className="text-center py-10 text-lg">Blog not found.</p>;

  return (
    <div className="w-full min-h-screen py-16 px-4 bg-blog-details relative overflow-hidden">
      {/* FLOATING GRADIENT ORBS */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="orb orb-1"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="orb orb-2"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="glass-card gradient-border p-8 rounded-2xl shadow-2xl"
        >
          {/* TITLE */}
          <h1 className="text-4xl font-extrabold text-text-primary mb-4">
            {blog.title}
          </h1>

          {/* META */}
          <div className="text-text-secondary text-sm mb-6">
            {blog.author && <span>By {blog.author}</span>}
            {blog.category && <span className="ml-3">| {blog.category}</span>}
            <span className="ml-3">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            src={blog.image}
            alt={blog.title}
            className="w-full h-80 object-cover rounded-xl shadow-xl mb-8"
          />

          {/* SHORT DESCRIPTION */}
          <p className="text-lg text-text-primary/90 mb-6 bg-white/40 px-4 py-3 rounded-xl shadow-sm">
            {blog.shortDescription}
          </p>

          {/* MAIN CONTENT */}
          <div
            className="prose prose-lg max-w-full text-text-primary readable-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
