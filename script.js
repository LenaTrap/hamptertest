const chomik = document.getElementById("chomik");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const moveDown = scrollY * 0.5;      // adjust multiplier for speed
  const rotation = scrollY % 360;      // spins while scrolling
  chomik.style.transform = `translateX(-50%) translateY(${moveDown}px) rotate(${rotation}deg)`;
});
