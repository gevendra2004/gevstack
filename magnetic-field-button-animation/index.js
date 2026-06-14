const particleField = document.getElementById("particleField");
for (let i = 0; i < 50; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
  particle.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
  particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particleField.appendChild(particle);
}
