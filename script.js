const chomik = document.getElementById("chomik");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY % 360; // spin based on scroll
  chomik.style.transform = `translateX(-50%) translateY(${scrollY}px) rotate(${rotation}deg)`;
});
