import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Cafe from "./component/Cafe";
import About from "./component/About";
import Art from "./component/Art";
import Menu from "./component/Menu";
import Contact from "./component/Contact";

gsap.registerPlugin(useGSAP,ScrollTrigger);
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cafe/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </div>
  )
}

export default App
