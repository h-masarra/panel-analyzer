import React, { useState } from 'react';

function UploadButton({ onAnalysis }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      // Upload file to Azure Read API
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${process.env.REACT_APP_AZURE_COG_ENDPOINT}vision/v3.2/read/analyze`, {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_COG_KEY,
        },
        body: file,
      });

      if (!response.ok) {
        throw new Error(`Azure OCR error: ${response.status}`);
      }

      const operationLocation = response.headers.get('Operation-Location');

      // Poll for results
      let result = null;
      while (!result) {
        await new Promise((r) => setTimeout(r, 1000));
        const res = await fetch(operationLocation, {
          headers: { 'Ocp-Apim-Subscription-Key': process.env.REACT_APP_AZURE_COG_KEY },
        });
        const data = await res.json();
        if (data.status === 'succeeded') {
          result = data.analyzeResult.readResults;
        }
      }

      onAnalysis(result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
      {loading && <p>Processing OCR...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UploadButton;
