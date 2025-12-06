// src/utils/api.js

// Read environment variables
export const OCR_KEY = import.meta.env.VITE_AZURE_OCR_KEY;
export const OCR_ENDPOINT = import.meta.env.VITE_AZURE_OCR_ENDPOINT;
export const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Example function to call Azure OCR
export async function analyzeImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${OCR_ENDPOINT}/vision/v3.2/read/analyze`, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": OCR_KEY
    },
    body: formData
  });

  const result = await response.json();
  return result;
}
