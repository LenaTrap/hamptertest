const chomik = document.getElementById("chomik");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // how far user has scrolled
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight; // 0 = top, 1 = bottom

  // Move hamster vertically based on scroll
  const maxY = window.innerHeight - chomik.clientHeight;
  const y = scrollPercent * maxY;

  // Rotate hamster for fun
  const rotation = scrollPercent * 720; // 2 full spins across page

  chomik.style.transform = `translateX(-50%) translateY(${y}px) rotate(${rotation}deg)`;
});
