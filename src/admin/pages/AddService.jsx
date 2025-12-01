import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "../../api.js";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    domain: "",
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
   * 🔥 React Query Mutation: Add Service
   */
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const fd = new FormData();
      fd.append("title", formData.title);
      fd.append("domain", formData.domain);
      fd.append("description", formData.description);
      fd.append("image", formData.image);

      const res = await api.post("/content/service/add", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    },

    onSuccess: () => {
      toast.success("Service added successfully");
      navigate("/admin");
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
      <h1 className="text-2xl font-bold mb-6">Add New Service</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow p-5 rounded-xl"
      >
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Service Title</label>
          <input
            type="text"
            name="title"
            className="w-full border p-2 rounded"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Domain (Optional) */}
        <div>
          <label className="block mb-1 font-medium">Domain (Optional)</label>
          <input
            type="text"
            name="domain"
            className="w-full border p-2 rounded"
            value={formData.domain}
            onChange={handleChange}
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

        {/* Image Upload */}
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isPending ? "Uploading..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
