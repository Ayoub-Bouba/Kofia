import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../../constants";

const Navbar = () => {
  useGSAP(() => {
    
    gsap.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center text-white">
      {" "}
      <a href="#hero" className="flex items-center gap-2">
        {" "}
        
        <p className="font-bold text-lg tracking-wider ">Kofia</p>{" "}
      </a>
      <ul className="flex gap-8">
        {" "}
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="hover:text-amber-400 transition-colors "
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>{" "}
    </nav>
  );
};
export default Navbar;
