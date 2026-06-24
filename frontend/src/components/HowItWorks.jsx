import { motion } from "framer-motion";

function HowItWorks() {

  const steps = [
    "Create Your Profile",
    "Get AI Fitness Assessment",
    "Receive Diet Plan",
    "Receive Workout Plan",
    "Track Progress Daily",
    "Achieve Your Goal"
  ];

  return (
    <section className="py-32">

      <h2 className="text-5xl font-bold text-center mb-20">
        How It Works
      </h2>

      <div className="max-w-4xl mx-auto">

        {steps.map((step, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            p-6
            mb-6
            "
          >
            <h3 className="text-2xl font-semibold">
              Step {index + 1}
            </h3>

            <p className="text-gray-400 mt-2">
              {step}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;