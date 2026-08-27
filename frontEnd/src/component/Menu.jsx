import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists } from "../../constants";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useGSAP(() => {
    gsap.fromTo(
      ".menu-content-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );
    gsap.fromTo(
      ".menu-img-anim",
      { opacity: 0, scale: 0.95, x: -30 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power2.out" },
    );
  }, [currentIndex]);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cocktailLists.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + cocktailLists.length) % cocktailLists.length,
    );
  };
  const currentDrink = cocktailLists[currentIndex];
  return (
    <section
      id="menu"
      className="py-24 px-6 md:px-16 bg-zinc-950 text-white text-center overflow-hidden"
    >
      {" "}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-wide">
        Cocktail Menu
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {cocktailLists.map((drink, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`px-6 py-2.5 rounded-full border text-sm md:text-base transition-all duration-300 ${
              currentIndex === idx
                ? "bg-white text-black border-white shadow-lg shadow-white/10"
                : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
            }`}
          >
            {drink.name}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 p-8 md:p-12 rounded-3xl relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-2xl">
        <div className="text-left menu-content-anim">
          <span className="text-amber-400/90 text-sm uppercase tracking-widest font-semibold block mb-2">
            Recipe For
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {currentDrink.name}
          </h3>
          <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed">
            {currentDrink.detail} - Origin:{" "}
            <span className="text-zinc-200">{currentDrink.country}</span>
          </p>
          <div className="text-2xl font-bold text-amber-400 mb-8">
            {currentDrink.price}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="px-5 py-2.5 bg-zinc-800/80 hover:bg-zinc-700 rounded-xl text-sm font-medium transition-colors border border-zinc-700/50"
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              className="px-5 py-2.5 bg-zinc-800/80 hover:bg-zinc-700 rounded-xl text-sm font-medium transition-colors border border-zinc-700/50"
            >
              Next →
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center relative menu-img-anim">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-800 shadow-inner bg-black/40 flex items-center justify-center">
            <img
              src={currentDrink.image || `/images/abt1.png`}
              alt={currentDrink.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
