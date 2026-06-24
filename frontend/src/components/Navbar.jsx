function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-white">
          FitMentor AI
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Demo</a>
          <a href="#">Login</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;