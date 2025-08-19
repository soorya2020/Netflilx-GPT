import React, { useState, useEffect } from "react";

function CustomAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(15);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Show modal only if not disabled in localStorage
  useEffect(() => {
    const hide = localStorage.getItem("hideCustomAlert");
    if (!hide) {
      setIsVisible(true);
    }
  }, []);

  // Countdown auto close
  useEffect(() => {
    if (!isVisible) return;
    if (counter <= 0) {
      handleClose();
      return;
    }
    const timer = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [counter, isVisible]);

  // Close handler
  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideCustomAlert", "true");
    }
    setIsVisible(false);
  };

  // Esc key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  });

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex items-start justify-center z-50 
                 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose} // click outside closes
    >
      <div
        className="relative mt-16 w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 
                   bg-white rounded-2xl shadow-2xl p-6 text-center 
                   transform transition-all duration-300 animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 hover:text-red-500 
                     text-3xl leading-none text-gray-500 transition"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-extrabold mb-4 text-gray-800">
          🚀 Learning Project
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-base mb-6 leading-relaxed px-4">
          This learning project uses 🔑 Firebase Auth, 🗄️ Redux for state, 🎬
          TMDB for movies, 🤖 GPT-3.5 for recommendations, 🎨 Tailwind for
          responsive UI, and 🚀 Vercel for hosting.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 transition-all duration-1000"
            style={{ width: `${(counter / 15) * 100}%` }}
          ></div>
        </div>

        {/* Countdown */}
        <p className="text-sm text-gray-500 mb-4">
          Closing in <span className="font-semibold">{counter}</span> seconds...
        </p>

        {/* "Don't show again" */}
        <label className="flex items-center justify-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={(e) => setDontShowAgain(e.target.checked)}
            className="cursor-pointer"
          />
          Don’t show this again
        </label>
      </div>
    </div>
  );
}

export default CustomAlert;
