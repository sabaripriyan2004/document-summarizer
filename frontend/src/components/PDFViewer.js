import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PDFViewer({ onFileSelected }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileSelected(selectedFile); // Pass the selected file to the parent component
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div style={{ width: "100%", height: "600px" }}>
          {" "}
          {/* Adjust width and height as needed */}
          <Viewer fileUrl={URL.createObjectURL(file)} />
        </div>
      )}
    </div>
  );
}

export default PDFViewer;
