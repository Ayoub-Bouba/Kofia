import React from "react";
import { openingHours, socials } from "../../constants";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white py-16 px-6 md:px-16 border-t border-zinc-800"
    >
      {" "}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {" "}
        <div>
          {" "}
          <h3 className="text-xl font-bold mb-4 text-amber-400">
            Visit Our Bar
          </h3>{" "}
          <p className="text-gray-400 text-sm">
            123 Cocktail Avenue, Suite 456 New York, NY 10001
          </p>{" "}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">Phone: +212 773194771</p>
          <p className="text-gray-400 text-sm">Email: ayoubbouba199@gmail.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-400">
            Open Every Day
          </h3>
          <ul className="space-y-2">
            {openingHours.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-400 flex justify-between"
              >
                <span>{item.day}:</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-400">Socials</h3>
          <div className="flex gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:border-amber-400 transition-colors"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
