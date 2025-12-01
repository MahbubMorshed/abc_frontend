import React, { useEffect, useState } from "react";
import { getSingleBlog } from "../api";
import { useParams } from "react-router-dom";

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
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>

      {/* Meta Info */}
      <div className="text-gray-500 text-sm mb-6">
        {blog.author && <span>By {blog.author}</span>}
        {blog.category && <span className="ml-3">| {blog.category}</span>}
        <span className="ml-3">
          {new Date(blog.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* Banner Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg shadow mb-6"
      />

      {/* Short Description */}
      <p className="text-xl text-gray-700 mb-6">{blog.shortDescription}</p>

      {/* Main Content */}
      <div
        className="prose prose-lg max-w-full text-gray-800"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
};

export default BlogDetails;
