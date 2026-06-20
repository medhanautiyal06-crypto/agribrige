function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          How AgriBridge Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              1. Upload Crop Image
            </h3>
            <p>
              Farmers upload an image of the affected crop.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              2. AI Detects Disease
            </h3>
            <p>
              Our AI analyzes the image and identifies diseases.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              3. Get Solutions
            </h3>
            <p>
              Farmers receive treatment suggestions instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;