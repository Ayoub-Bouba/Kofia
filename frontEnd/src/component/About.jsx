import React from "react";
const About = () => {
  
  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-zinc-950 text-white">
      {" "}
      <div className="max-w-5xl mx-auto text-center">
        {" "}
        <span className="text-amber-400 uppercase tracking-widest text-sm font-semibold">
          {" "}
          Best Cocktails{" "}
        </span>{" "}
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
          {" "}
          Where Every Detail Matters{" "}
        </h2>{" "}
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          {" "}
          Every cocktail on our menu is a blend of premium ingredients, creative
          flair, and timeless recipes designed to delight your senses.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <img
              src="/images/abt2.jpg"
              alt="about 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Premium Quality</h3>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <img
              src="/images/abt1.jpg"
              alt="about 2"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Master Mixologists</h3>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <img
              src="/images/about3.jpg"
              alt="about 3"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Vibrant Atmosphere</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
