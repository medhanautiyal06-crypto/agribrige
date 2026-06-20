import { useState } from "react";
import Navbar from "../components/Navbar";

export default function DiseaseDetection() {
  const [file, setFile] = useState(null);

  return (
    <>
      

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          Disease Detection
        </h1>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-5"
        />

        {file && (
          <div className="bg-white p-4 rounded shadow">
            <p>{file.name}</p>
          </div>
        )}

        <button className="bg-green-600 text-white px-6 py-3 rounded mt-5">
          Analyze
        </button>

        <div className="mt-10 bg-gray-100 p-6 rounded-xl">
          <h3 className="font-bold text-xl">
            Results
          </h3>

          <p className="mt-3">
            Upload a crop image to analyze.
          </p>
        </div>
      </div>
    </>
  );
}