import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBackground from "../../../assets/videos/videoHero.mp4";
import logoT from "../../../assets/T.svg";
import Button from "../../../components/Button.jsx";
import { companyLinks } from "../../../data/companyLinks.js";

gsap.registerPlugin(ScrollTrigger);

function HomeSection() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const maskSize = () => window.innerWidth < 768 ? "650vmax" : "350vmax";

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(videoRef.current, {
          scale: 2.08,
          ease: "none",
          duration: 1,
        }, 0)
        .fromTo(maskRef.current, {
          WebkitMaskSize: "0vmax",
          maskSize: "0vmax",
        }, {
          WebkitMaskSize: maskSize,
          maskSize,
          ease: "none",
          duration: 1,
        }, 0)
        .to(contentRef.current, {
          autoAlpha: 0,
          y: -40,
          ease: "none",
          duration: 0.25,
        }, 0);
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate flex min-h-[520px] lg:min-h-[720px] items-center justify-center overflow-hidden px-6 pt-[150px] pb-[100px] before:absolute before:inset-0 before:-z-1 before:bg-[rgb(0_8_18_/_28%)] before:content-[''] max-[600px]:min-h-[auto] max-[600px]:pt-[140px] max-[600px]:pb-32"
      aria-labelledby="home-title"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-2 h-full w-full object-cover object-center"
        src={heroBackground}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div ref={contentRef} className="w-full max-w-[1000px] text-center">
        <h1
          className="m-0 text-[clamp(30px,4vw,44px)] leading-[1.2] tracking-[-1.2px] text-white max-[600px]:text-[32px] max-[600px]:tracking-[-0.8px]"
          id="home-title"
        >
          <span className="text-title">Internet</span> fibra óptica{" "}
          <span className="text-title">de verdade</span>
          <br className="max-[600px]:hidden" /> pra você e sua empresa.
        </h1>
        <p className="mt-5 mb-7 text-lg leading-[1.6] text-white max-[600px]:text-base">
          Velocidade, estabilidade e suporte que você pode confiar.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5 max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-3">
          <Button
            className="max-[600px]:min-h-[42px] max-[600px]:w-full max-[600px]:max-w-[280px]"
            variant="light"
            href="#planos"
          >
            Ver planos
          </Button>
          <Button
            className="max-[600px]:min-h-[42px] max-[600px]:w-full max-[600px]:max-w-[280px]"
            href={companyLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contratar pelo Whatsapp
          </Button>
        </div>
      </div>
      <div
        ref={maskRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-background will-change-[mask-size]"
        style={{
          WebkitMaskImage: `url("${logoT}")`,
          maskImage: `url("${logoT}")`,
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "0vmax",
          maskSize: "0vmax",
        }}
      />
    </section>
  );
}

export default HomeSection;
