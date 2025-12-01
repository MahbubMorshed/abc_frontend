import React, { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import JoditEditor from "jodit-react";

const AddBlog = () => {
  const navigate = useNavigate();
  const editor = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    content: "",
    category: "",
    author: "",
    image: null,
  });

  // Handle simple input fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  /**
   * 🔥 React Query Mutation
   */
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const fd = new FormData();

      fd.append("title", formData.title);
      fd.append("shortDescription", formData.shortDescription);
      fd.append("content", formData.content);
      fd.append("category", formData.category);
      fd.append("author", formData.author);
      fd.append("image", formData.image);

      const res = await api.post("/content/blog/add", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    },

    onSuccess: () => {
      toast.success("Blog article created!");
      navigate("/admin");
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "Blog upload failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error("Please upload a blog image");
      return;
    }

    mutate();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Blog</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 rounded-xl shadow"
      >
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Blog Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block mb-1 font-medium">Short Description</label>
          <textarea
            name="shortDescription"
            className="w-full border p-2 rounded h-24"
            value={formData.shortDescription}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            className="w-full border p-2 rounded"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        {/* Author */}
        <div>
          <label className="block mb-1 font-medium">Author (optional)</label>
          <input
            type="text"
            name="author"
            className="w-full border p-2 rounded"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block mb-1 font-medium">Blog Content</label>

          <JoditEditor
            ref={editor}
            value={formData.content}
            tabIndex={1}
            onBlur={(newContent) =>
              setFormData({ ...formData, content: newContent })
            }
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">Feature Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full border p-2 rounded bg-white"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {isPending ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
