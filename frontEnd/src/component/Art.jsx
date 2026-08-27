import React from "react";
import { featureLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";


const Art = () => {
  useGSAP(()=>{
    const titleSlide=SplitText.create("#art h2",{type:"words"})
    const paragSlide=SplitText.create("#art .icon-img span",{type:"lines"})
    const artTime=gsap.timeline({
      scrollTrigger:{
        trigger:"#art",
        start:"top center",
      }
    })
    artTime
    .from("#art .big-img img",{
      opacity:0,
      duration:.5
    })
    .from(titleSlide.words,{
      yPercent:100,
      opacity:0,
      duration:.5,
      stagger:0.02,
      ease:"power1.inOut"
    },"<")
    .from(paragSlide.lines,{
      yPercent:100,
      opacity:0,
      duration:.2,
      stagger:0.02,
      ease:"power1.inOut"
    })
  })
  return (
    <section id="art" className="py-24 px-6 md:px-16 bg-black text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">The Art of Mixology</h2>
          <ul className="space-y-4">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 icon-img">
                <img src="/images/check.jpg" alt="check" className="w-5 h-5" />
                <span className="text-lg text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex justify-center big-img">
          <img src="/images/under-img.jpg" alt="art" className="rounded-2xl max-w-full shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Art;