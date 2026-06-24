import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-bold"
      >
        FitMentor AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-3xl text-xl text-gray-300"
      >
        Your AI Personal Trainer, Diet Coach,
        Workout Tracker, Posture Corrector and
        Fitness Companion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 flex gap-4"
      >
        <button className="bg-blue-600 px-8 py-4 rounded-xl hover:scale-105 transition">
          Get Started
        </button>

        <button className="border border-white px-8 py-4 rounded-xl hover:scale-105 transition">
          Learn More
        </button>
      </motion.div>

    </section>
  );
}

export default Hero;