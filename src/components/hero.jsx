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
          Empowering Farmers With
          <span className="text-green-600">
            {" "}AI Intelligence
          </span>
        </motion.h1>

        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Diagnose crop diseases, receive personalized recommendations,
          and access expert agricultural guidance anytime through AI.
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