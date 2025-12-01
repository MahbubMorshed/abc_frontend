import React, { useEffect, useState } from "react";
import { getSingleCfp } from "../api";
import { useParams } from "react-router-dom";

const CfpDetails = () => {
  const { slug } = useParams();
  const [cfp, setCfp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCfp();
  }, [slug]);

  const loadCfp = async () => {
    try {
      const res = await getSingleCfp(slug);
      setCfp(res.data.cfp);
    } catch (error) {
      console.error("CFP load error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="py-20 text-center">Loading...</p>;
  if (!cfp) return <p className="py-20 text-center">CFP Not Found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={cfp.image}
        alt={cfp.name}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{cfp.name}</h1>

      <h2 className="text-xl font-semibold mb-2">{cfp.heading}</h2>

      <p className="text-gray-700 leading-7 mb-6">{cfp.paragraph}</p>

      <div className="space-y-2 text-gray-800">
        <p>
          <strong>Discipline:</strong> {cfp.discipline}
        </p>
        {cfp.indexing && (
          <p>
            <strong>Indexing:</strong> {cfp.indexing}
          </p>
        )}
        {cfp.doi && (
          <p>
            <strong>DOI:</strong> {cfp.doi}
          </p>
        )}
        {cfp.url && (
          <p>
            <strong>URL:</strong>{" "}
            <a
              href={cfp.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              {cfp.url}
            </a>
          </p>
        )}
        {cfp.lastDate && (
          <p>
            <strong>Last Date:</strong>{" "}
            {new Date(cfp.lastDate).toLocaleDateString()}
          </p>
        )}
        {cfp.extraInfo && (
          <p>
            <strong>Extra Info:</strong> {cfp.extraInfo}
          </p>
        )}
      </div>
    </div>
  );
};

export default CfpDetails;
