import { useEffect, useState } from "react";

export default function FarmerList() {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/farmers")
      .then((response) => response.json())
      .then((data) => {
        setFarmers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching farmers:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        Loading farmers...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Farmers Data From Backend API
      </h1>

      <div className="grid gap-4">
        {farmers.map((farmer) => (
          <div
            key={farmer.id}
            className="bg-white shadow-lg rounded-xl p-5 border"
          >
            <h2 className="text-xl font-semibold">
              {farmer.name}
            </h2>

            <p>
              <strong>Location:</strong> {farmer.location}
            </p>

            <p>
              <strong>Crop:</strong> {farmer.crop}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}