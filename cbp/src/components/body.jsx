import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import reviews from '../assets/reviews.svg';
import review2 from '../assets/review2.svg';

export default function Body() {
  const formsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll function
  const scrollToForms = () => {
    formsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-fixed [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Parallax Container */}
      {/* Container 1 — Neon Glow Welcome */}
      <div className="w-full h-screen flex items-center justify-center">
        <div className="
          relative max-w-3xl w-full text-center p-10
          rounded-3xl overflow-hidden
          backdrop-blur-xl bg-white/5
          shadow-[0_0_25px_rgba(168,85,247,0.4)]
          border border-purple-500/40
          animate-floating
          bottom-30
        ">

        {/* Neon Border */}
        <div className="
          absolute inset-0 rounded-3xl border-[3px]
          border-transparent 
          animate-neonGlow pointer-events-none
        "></div>

        <h1 className="relative text-5xl font-extrabold text-white drop-shadow-lg">
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
      </div>
      <div className="relative  mt--80 overflow-hidden">
        {/* Wing 1 */}
        <div
          className="fixed top-50 right-10 h-80 w-80 pointer-events-none"
          style={{
            transform: `translateX(${scrollY * 1.0}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img src={review2} alt="review2" className="h-full w-full animate-floating object-contain" />
        </div>

        {/* Wing 2 */}
        <div
          className="fixed top-50 left-10 h-80 w-80 pointer-events-none"
          style={{
            transform: `translateX(${scrollY * -1.0}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <img src={reviews} alt="reviews" className="h-full w-full animate-floating object-contain" />
        </div>
      </div>

      

      {/* Container 2 — Forms */}
      <div
        ref={formsRef} // <-- Attach the ref here
        className="relative mx-auto max-w-3xl text-center mt-auto mb-80 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20"
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
