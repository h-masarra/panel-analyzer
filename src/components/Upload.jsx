import React, { useState } from "react";
import { analyzeImage } from "@/utils/api";

export default function Upload() {
  const [result, setResult] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const res = await analyzeImage(file);
    setResult(res);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
