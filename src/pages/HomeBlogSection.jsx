import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../api";
import { Link } from "react-router-dom";

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
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blogs</h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {blog.shortDescription}
              </p>

              <Link
                to={`/blog/${blog.slug}`}
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

export default HomeBlogSection;
