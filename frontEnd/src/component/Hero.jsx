import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import useMediaQuery from "react-responsive";
const Hero = () => {
  const videoRef = useRef(null);
  const isMobile=useMediaQuery({maxWidth:767})
  useGSAP(() => {
    const titleSplit = new SplitText(".hero-title", { type: "chars,words" });
    gsap.from(titleSplit.chars, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: "power4.out",
    });
    const startValue =isMobile ?"top top%" : "top top";
    const endValue =isMobile ? "120% top" : "bottom top";
    // Scroll trigger for video playback
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
    

    if (videoRef.current) {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration || 1,
      });
    }
    tl.fromTo("#hero img",{
      yPercent:-50,
    },{
      yPercent:0
    },"<")
  }, []);
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-white"
    >
      {" "}
      <div className="absolute inset-0 z-0">
        {" "}
        <video
          ref={videoRef}
          src="/video/vid2.MP4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />{" "}
      </div>
      <div className="z-10 text-center px-4">
        <h1 className="hero-title text-6xl md:text-8xl z-4 font-extrabold tracking-tight">
          Kofia
        </h1>
        <p className="mt-4 text-lg md:text-xl z-4 text-gray-300">
          Sip the spirit of summer
        </p>
      </div>
      <img
        src="/images/left-leaf.png"
        alt="left leaf"
        className="absolute bottom-0 left-0 w-48 pointer-events-none z-2"
      />
      <img
        src="/images/right-leaf.png"
        alt="right leaf"
        className="absolute bottom-0 right-0 w-48 pointer-events-none z-2"
      />
    </section>
  );
};
export default Hero;
