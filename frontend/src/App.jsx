import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WorkoutDemo from "./components/WorkoutDemo";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Background Glow */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="fixed bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <Navbar />

      <Hero />

      <Features />
      
      <WorkoutDemo />

      <HowItWorks />

    </div>
  );
}

export default App;