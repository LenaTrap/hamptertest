window.addEventListener("DOMContentLoaded", () => {
  const chomik = document.getElementById("chomik");

  // Costume list
  const costumes = [
    "chomiczek.png",
    "chomiczek_hat.png",
    "chomiczek_armor.png",
    "chomiczek_cape.png"
  ];

  // Pick a random costume
  const randomIndex = Math.floor(Math.random() * costumes.length);
  chomik.src = costumes[randomIndex];

  // Make hamster visible only when costume is loaded
  chomik.onload = () => {
    chomik.style.visibility = "visible";
  };

  // Scroll animation
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const maxY = window.innerHeight - chomik.clientHeight;
    const y = scrollPercent * maxY;

    const rotation = scrollPercent * 720; // 2 spins

    chomik.style.transform = `translateX(-50%) translateY(${y}px) rotate(${rotation}deg)`;
  });
});
