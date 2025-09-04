const chomik = document.getElementById("chomik");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY % 360;
  
  // base offset (50px) + scroll movement
  chomik.style.transform = `translateX(-50%) translateY(${scrollY}px) rotate(${rotation}deg)`;
});
