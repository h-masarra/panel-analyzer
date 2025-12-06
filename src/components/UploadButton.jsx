import React from 'react';

function UploadButton({ onAnalysis }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Placeholder analysis logic
    const fakeResult = { message: 'Analysis complete for ' + file.name };
    onAnalysis(fakeResult);
  };

  return (
    <div>
      <input type="file" onChange={handleFile} />
    </div>
  );
}

export default UploadButton;