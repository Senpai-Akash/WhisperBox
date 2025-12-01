import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function Body() {
  // Create a ref for the Forms container
  const formsRef = useRef(null);

  // Scroll function
  const scrollToForms = () => {
    formsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      {/* Background */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-fixed [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Container 1 — Neon Glow Welcome */}
      <div className="
        relative mx-auto max-w-3xl text-center p-10
        rounded-3xl overflow-hidden
        backdrop-blur-xl bg-white/5
        shadow-[0_0_25px_rgba(168,85,247,0.4)]
        border border-purple-500/40
        animate-floating
        mt-20
      ">
        {/* Neon Border */}
        <div className="
          absolute inset-0 rounded-3xl border-[3px]
          border-transparent 
          animate-neonGlow pointer-events-none
        "></div>

        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Welcome to <span className="text-purple-400">WhisperBox</span>
        </h1>

        <p className="mt-4 text-xl text-white/90">
          <button
            onClick={scrollToForms}
            className="px-6 py-3 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-all"
          >
            Get Started Anonymously
          </button>
        </p>
      </div>

      {/* Container 2 — Forms */}
      <div
        ref={formsRef} // <-- Attach the ref here
        className="relative mx-auto max-w-3xl text-center mt-95 mb-50 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Your Forms</h2>
        <p className="text-white/80 mb-6">No forms created yet.</p>
        <Link
          to="/form"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg transition-all"
        >
          Create Form
        </Link>
      </div>

    </div>
  );
}
