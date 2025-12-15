import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=6`
      );
      setImages(res.data);
    } catch (err) {
      setError("Failed to load images!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 fw-bold">
        Photo Gallery (Picsum API)
      </h1>

      <div className="d-flex justify-content-center align-items-center mb-4 gap-3">
        <button
          className="btn btn-outline-primary px-4"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="px-3 py-2 border rounded">Page {page}</span>

        <button
          className="btn btn-outline-primary px-4"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row g-4">
        {images.map((img) => (
          <div key={img.id} className="col-md-4">
            <div className="card shadow-sm rounded overflow-hidden">
              <img
                src={img.download_url}
                loading="lazy"
                className="img-fluid"
                style={{ height: "220px", width: "100%", objectFit: "cover" }}
                alt={img.author}
              />

              <div className="p-3 fw-semibold">
                {img.author}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
