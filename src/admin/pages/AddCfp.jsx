import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const AddCfp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    heading: "",
    paragraph: "",
    discipline: "",
    indexing: "",
    doi: "",
    url: "",
    lastDate: "",
    extraInfo: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const fd = new FormData();
      Object.keys(formData).forEach((key) => {
        fd.append(key, formData[key]);
      });

      const res = await api.post("/content/cfp/add", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    },
    onSuccess: () => {
      toast.success("CFP added successfully");
      navigate("/admin");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to add CFP");
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
      <h1 className="text-2xl font-bold mb-6">Add CFP Announcement</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white shadow p-5 rounded-xl"
      >
        {[
          { label: "Name", name: "name" },
          { label: "Heading", name: "heading" },
          { label: "Discipline", name: "discipline" },
          { label: "Indexing", name: "indexing" },
          { label: "DOI", name: "doi" },
          { label: "URL", name: "url" },
          { label: "Last Date", name: "lastDate", type: "date" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block mb-1 font-medium">{label}</label>
            <input
              type={type || "text"}
              name={name}
              className="w-full border p-2 rounded"
              value={formData[name]}
              onChange={handleChange}
              required={["name", "heading", "discipline"].includes(name)}
            />
          </div>
        ))}

        {/* Paragraph */}
        <div>
          <label className="block mb-1 font-medium">Paragraph</label>
          <textarea
            name="paragraph"
            className="w-full border p-2 rounded h-32"
            value={formData.paragraph}
            onChange={handleChange}
            required
          />
        </div>

        {/* Extra Info */}
        <div>
          <label className="block mb-1 font-medium">Extra Info</label>
          <textarea
            name="extraInfo"
            className="w-full border p-2 rounded h-24"
            value={formData.extraInfo}
            onChange={handleChange}
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

        <button
          type="submit"
          disabled={isPending}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 disabled:bg-gray-400"
        >
          {isPending ? "Uploading..." : "Add CFP"}
        </button>
      </form>
    </div>
  );
};

export default AddCfp;
