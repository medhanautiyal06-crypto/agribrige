import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Bridging Farmers with 
          <span className="text-green-600">
            {" "}Smart Agriculture
          </span>
        </motion.h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
           Empowering farmers through AI-driven crop recommendations,
           disease detection, weather insights, and multilingual support.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button className="bg-green-600 text-white px-8 py-4 rounded-2xl hover:bg-green-700">
            Explore Platform
          </button>

          <button className="border border-green-600 text-green-600 px-8 py-4 rounded-2xl">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}