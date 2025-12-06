import React from 'react';

function AnalysisResult({ result }) {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>Analysis Result</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default AnalysisResult;