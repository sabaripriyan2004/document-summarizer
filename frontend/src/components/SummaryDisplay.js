import React from "react";

const SummaryDisplay = ({ summary }) => {
  return (
    <div className="right-pane flex-1">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      {summary && (
        <div className="summary bg-green-100 border border-green-400 p-4 text-green-800 rounded">
          {summary}
        </div>
      )}
    </div>
  );
};

export default SummaryDisplay;
