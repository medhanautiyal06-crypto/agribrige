const Footer = () => {
return ( <footer className="bg-green-900 text-white py-10"> <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Brand Section */}
      <div>
        <h2 className="text-3xl font-bold text-green-300">
          AgriBridge
        </h2>

        <p className="mt-3 text-green-100 font-medium">
          Bridging Farmers with Smart Agriculture
        </p>

        <p className="mt-3 text-sm text-green-200 leading-relaxed">
          Empowering farmers through AI-powered crop recommendations,
          disease detection, weather insights, and multilingual
          agricultural support for better farming decisions.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Quick Links
        </h3>

        <ul className="space-y-2 text-green-100">
          <li>🏠 Home</li>
          <li>🤖 AI Chatbot</li>
          <li>🦠 Disease Detection</li>
          <li>🌱 Crop Recommendation</li>
          <li>📊 Dashboard</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Contact Us
        </h3>

        <p className="text-green-100">
          📧 support@agribridge.com
        </p>

        <p className="text-green-100 mt-2">
          📍 Uttarakhand, India
        </p>

        <p className="text-green-100 mt-2">
          🌾 Supporting Farmers Through Technology
        </p>

        <p className="text-green-100 mt-2">
          📞 +91 XXXXX XXXXX
        </p>
      </div>

    </div>

    <hr className="my-6 border-green-700" />

    <div className="text-center">
      <p className="text-green-200">
        © 2026 AgriBridge. All Rights Reserved.
      </p>

      <p className="text-sm text-green-300 mt-2">
        Made with ❤️ for Indian Farmers
      </p>
    </div>

  </div>
</footer>


);
};

export default Footer;
