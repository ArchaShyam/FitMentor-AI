import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10
      }}
      className="
      bg-white/5
      border border-white/10
      backdrop-blur-lg
      rounded-2xl
      p-6
      text-center
      shadow-lg
      "
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;