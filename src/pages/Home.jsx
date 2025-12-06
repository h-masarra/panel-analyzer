import React, { useState } from 'react';
import UploadButton from '../components/UploadButton';
import AnalysisResult from '../components/AnalysisResult';

function Home() {
  const [analysis, setAnalysis] = useState(null);

  const handleAnalysis = (result) => {
    setAnalysis(result);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
      <h1>Panel Analyzer</h1>
      <UploadButton onAnalysis={handleAnalysis} />
      {analysis && <AnalysisResult result={analysis} />}
    </div>
  );
}

export default Home;