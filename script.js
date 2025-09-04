const chomik = document.getElementById("chomik");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY % 360; 
  chomik.style.transform = `translateX(-50%) translateY(${50 + scrollY}px) rotate(${rotation}deg)`;
});
