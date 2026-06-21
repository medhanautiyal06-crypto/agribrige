import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  id="hero-section"
  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6"
>
      <div className="max-w-6xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white"
        >
          Bridging Farmers with
          <span className="text-green-600 dark:text-green-400">
            {" "}Smart Agriculture
          </span>
        </motion.h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Empowering farmers through AI-driven crop recommendations,
          disease detection, weather insights, and multilingual support.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button className="bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700 transition">
            Explore Platform
          </button>

          <button className="border border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 px-8 py-4 rounded-2xl hover:bg-green-50 dark:hover:bg-gray-700 transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}