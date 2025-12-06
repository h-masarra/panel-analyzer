// src/components/Upload.jsx

import React, { useState } from "react";
import { analyzeImage } from "@/utils/api";

export default function Upload() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const res = await analyzeImage(file);
      setResult(res);
    } catch (err) {
      console.error(err);
      setError("OCR failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <input type="file" onChange={handleUpload} />
      {loading && <p>Analyzing file...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <div>
          <h3>OCR Result:</h3>
          <pre style={{ background: "#f0f0f0", padding: "10px" }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
