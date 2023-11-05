console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#container", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#container",
    markers: {
      startColor: "yellow",
      endColor: "#42a6e0",
      fontSize: "14px"
    },
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});