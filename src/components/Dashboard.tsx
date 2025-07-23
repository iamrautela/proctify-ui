import React from "react";
import { FaDiscord, FaLinkedin, FaXTwitter, FaReddit } from "react-icons/fa6";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0c1b] text-white relative flex flex-col">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-cyan-400 opacity-30 rounded-full blur-3xl pointer-events-none" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
  <div className="text-3xl font-extrabold italic tracking-tight">proctify</div>
        <div className="flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-white transition">Community</a>
          <a href="#" className="hover:text-white transition">Enterprise</a>
          <div className="relative group">
            <button className="hover:text-white transition">Resources <span className="ml-1">▼</span></button>
          </div>
          <a href="#" className="hover:text-white transition">Pricing</a>
          <div className="flex items-center gap-4 ml-4">
            <a href="#" className="hover:text-white"><FaDiscord size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-white"><FaXTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaReddit size={20} /></a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 mt-12">
          What do you want to build?
        </h1>
        <p className="text-lg text-white/70 text-center mb-10">
          Create stunning apps & websites by chatting with AI.
        </p>
        <div className="w-full max-w-xl">
          <div className="bg-[#181a23] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
            <input
              className="w-full bg-transparent text-white text-lg placeholder-white/40 outline-none"
              placeholder="Type your idea and we'll bring it to life (or /command)"
              disabled
            />
            <div className="flex gap-4">
              <button className="p-2 rounded hover:bg-white/10 transition" title="Link">
                <svg width="20" height="20" fill="none" stroke="currentColor" className="text-white/40"><path d="M10 13a5 5 0 0 1 0-10h2a5 5 0 0 1 0 10h-2zm0 0v4m0 0h2a5 5 0 0 0 0-10h-2a5 5 0 0 0 0 10z" /></svg>
              </button>
              <button className="p-2 rounded hover:bg-white/10 transition" title="Expand">
                <svg width="20" height="20" fill="none" stroke="currentColor" className="text-white/40"><rect x="4" y="4" width="12" height="12" rx="2" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-white/70 text-center">or import from</div>
        <div className="flex gap-4 mt-4">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
            <span className="bg-[#a259ff] rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">F</span>
            Figma
          </button>
          <button className="bg-white/10 px-4 py-2 rounded-full font-semibold flex items-center gap-2 border border-white/10">
            <svg width="20" height="20" fill="none" stroke="currentColor" className="text-white"><circle cx="10" cy="10" r="8" /></svg>
            GitHub
          </button>
        </div>
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">Create a financial app</button>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">Design a directory website</button>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">Build a project management app</button>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">Make a landing page</button>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">Generate a CRM</button>
          <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm transition">Build a mobile app</button>
        </div>
      </main>

      {/* Bottom left avatar */}
      <div className="fixed bottom-4 left-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-white/20"
        />
      </div>
    </div>
  );
};

export default Dashboard;