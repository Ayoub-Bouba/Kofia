import React from "react";
import { cocktailLists, mocktailLists } from "../../constants";

const Cafe = () => {
  return (
    <section id="cocktails" className="py-24 px-6 md:px-16 bg-black text-white">
      {" "}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {" "}
        <div>
          {" "}
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            Most Popular Cocktails
          </h2>{" "}
          <ul className="space-y-6">
            {" "}
            {cocktailLists.map((drink, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-gray-800 pb-4"
              >
                {" "}
                <div>
                  {" "}
                  <h3 className="text-xl font-semibold">{drink.name}</h3>{" "}
                  <p className="text-sm text-gray-400">
                    {drink.detail} ({drink.country})
                  </p>{" "}
                </div>{" "}
                <span className="text-amber-400 font-bold">
                  {drink.price}
                </span>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-amber-400">
            Most Loved Mocktails
          </h2>
          <ul className="space-y-6">
            {mocktailLists.map((drink, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-gray-800 pb-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{drink.name}</h3>
                  <p className="text-sm text-gray-400">
                    {drink.detail} ({drink.country})
                  </p>
                </div>
                <span className="text-amber-400 font-bold">{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Cafe;
