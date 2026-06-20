import Navbar from "../components/Navbar";

export default function Recommendation() {
  return (
    <>

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          Crop Recommendation
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Crop Type"
            className="border p-3 rounded"
          />

          <input
            placeholder="Region"
            className="border p-3 rounded"
          />

          <input
            placeholder="Season"
            className="border p-3 rounded"
          />

          <input
            placeholder="Soil Type"
            className="border p-3 rounded"
          />

        </div>

        <button className="bg-green-600 text-white px-6 py-3 rounded mt-5">
          Get Recommendations
        </button>

        <div className="mt-8 bg-white p-6 rounded-xl shadow">

          <h2 className="font-bold text-xl mb-4">
            Recommendation Result
          </h2>

          <p>Recommended Crop: Wheat</p>

          <p className="mt-2">
            Tip: Use organic fertilizers.
          </p>

          <p className="mt-2 text-red-500">
            Warning: Avoid overwatering.
          </p>

        </div>
      </div>
    </>
  );
}
