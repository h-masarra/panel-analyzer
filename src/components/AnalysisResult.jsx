import React from 'react';

function AnalysisResult({ result }) {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>OCR Result</h2>
      {result.map((page, idx) => (
        <div key={idx}>
          <h3>Page {idx + 1}</h3>
          <pre>{page.lines.map(line => line.text).join('\n')}</pre>
        </div>
      ))}
    </div>
  );
}

export default AnalysisResult;
