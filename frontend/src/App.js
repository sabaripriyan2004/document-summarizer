import React, { useState } from "react";
import PDFViewer from "./components/PDFViewer";
import { GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.entry";
import "tailwindcss/tailwind.css";
import axios from "axios";
import SummaryDisplay from "./components/SummaryDisplay";

// Set the worker source for PDF.js
GlobalWorkerOptions.workerSrc = workerSrc;

function App() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [fileURL, setFileURL] = useState(null);
  const [model, setModel] = useState("lamini"); // Default model set to 'lamini'

  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      setFile(selectedFile);
      const fileURL = URL.createObjectURL(selectedFile);
      setFileURL(fileURL);
    }
  };

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("model", model);

    try {
      const response = await axios.post(
        "http://localhost:5000/summarize", // Your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Financial Document Summarization using Lamini and BERT
        </h1>
        <div className="flex w-full">
          {/* Left Pane */}
          <div className="p-4 bg-white shadow-md rounded-md mr-4 flex-shrink-0 flex-grow-0 w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Uploaded Document</h2>
            <PDFViewer onFileSelected={handleFileChange} />
          </div>

          {/* Right Pane */}
          <div className="p-4 bg-white shadow-md rounded-md ml-4 flex-shrink-0 flex-grow-0 w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Summarized Version</h2>
            <div className="mb-4">
              <label htmlFor="model-select" className="block text-gray-700">
                Choose Model:
              </label>
              <select
                id="model-select"
                value={model}
                onChange={handleModelChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="lamini">Lamini</option>
                <option value="bert">BERT</option>
              </select>
            </div>
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Summarize
            </button>
            {summary && (
              <div className="mt-4 bg-green-100 p-4 rounded-md shadow-sm">
                <SummaryDisplay summary={summary} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
