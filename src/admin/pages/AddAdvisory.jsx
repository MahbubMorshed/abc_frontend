import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";

const AddAdvisory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  /**
   * 🔥 React Query Mutation: Add Advisory
   */
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("title", formData.title);
      fd.append("description", formData.description);
      fd.append("image", formData.image);

      const res = await api.post("/content/advisory/add", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    },

    onSuccess: () => {
      toast.success("Advisory member added");
      navigate("/admin"); // redirect back to dashboard
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message || "Upload failed");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error("Please upload an image");
      return;
    }

    mutate();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Advisory Member</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow p-5 rounded-xl"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded h-32"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">Image</label>
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
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
        >
          {isPending ? "Uploading..." : "Add Advisory Member"}
        </button>
      </form>
    </div>
  );
};

export default AddAdvisory;
