import { motion } from "framer-motion";

function WorkoutDemo() {
  return (
    <section className="py-32 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        AI Workout Verification
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
        max-w-4xl
        mx-auto
        bg-white/5
        border
        border-white/10
        backdrop-blur-lg
        rounded-3xl
        p-10
        "
      >
        <div className="space-y-4">

          <h3 className="text-3xl font-bold">
            🎥 Camera Detected
          </h3>

          <p>Exercise: Pushups</p>

          <p>Target Reps: 15</p>

          <p>Completed Reps: 12</p>

          <div className="w-full bg-gray-700 rounded-full h-4">

            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: "80%" }}
            ></div>

          </div>

          <div className="
          mt-8
          bg-blue-500/20
          p-4
          rounded-xl
          ">
            🎤 Voice Coach:
            "Keep your back straight"
          </div>

          <p className="text-green-400">
            ✓ AI Tracking Active
          </p>

        </div>
      </motion.div>

    </section>
  );
}

export default WorkoutDemo;