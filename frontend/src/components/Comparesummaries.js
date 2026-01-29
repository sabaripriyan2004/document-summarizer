import React from "react";

function ComparePage({ laminiSummary, bertSummary }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Comparison of Summaries
      </h1>
      <div className="flex justify-center">
        {/* Lamini Summary */}
        <div className="w-1/2 bg-white shadow-md rounded-md mr-4 p-4">
          <h2 className="text-2xl font-semibold mb-4">Lamini Summary</h2>
          <p>{laminiSummary}</p>
        </div>

        {/* BERT Summary */}
        <div className="w-1/2 bg-white shadow-md rounded-md ml-4 p-4">
          <h2 className="text-2xl font-semibold mb-4">BERT Summary</h2>
          <p>{bertSummary}</p>
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
