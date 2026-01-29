import React from "react";

const FileInput = ({
  handleFileChange,
  selectedModel,
  handleModelChange,
  handleUpload,
}) => {
  return (
    <div className="controls mt-4">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <select
        value={selectedModel}
        onChange={handleModelChange}
        className="mb-2 p-2 border border-gray-300 rounded"
      >
        <option value="lamini">LaMini</option>
        <option value="bert">BERT</option>
      </select>
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Summarize
      </button>
    </div>
  );
};

export default FileInput;
