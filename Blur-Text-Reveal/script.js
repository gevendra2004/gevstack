const heading = document.querySelector(".heading");
const headingSplitText = new SplitText(heading, { type: "chars" });
const headingChars = headingSplitText.chars;

gsap.from(headingChars, {
  filter: "blur(0.15em)",
  stagger: {
    from: "left",
    each: .1 },

  duration: i => 1.25 + i * .75,
  ease: "power2.inOut" });


gsap.from(headingChars, {
  xPercent: i => (i + 1) * 20,
  opacity: 0,
  stagger: {
    from: "left",
    each: .1 },

  duration: i => 1 + i * .85,
  ease: "power2.out" },
"<");