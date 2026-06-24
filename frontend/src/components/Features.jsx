import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: "🏋️",
      title: "AI Workout Planner",
      description:
        "Generate personalized workout plans."
    },

    {
      icon: "🥗",
      title: "AI Diet Planner",
      description:
        "Affordable meal plans for everyone."
    },

    {
      icon: "🎥",
      title: "Live Tracking",
      description:
        "AI counts reps automatically."
    },

    {
      icon: "🎤",
      title: "Voice Coach",
      description:
        "Real-time workout guidance."
    },

    {
      icon: "📈",
      title: "Progress Analytics",
      description:
        "Track your fitness journey."
    },

    {
      icon: "🧠",
      title: "AI Memory",
      description:
        "Remembers your progress."
    }
  ];

  return (
    <section className="py-24 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        Features
      </h2>

      <div className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-3
      gap-8
      ">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

    </section>
  );
}

export default Features;