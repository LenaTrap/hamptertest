const chomik = document.getElementById("chomik");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;                          
  const docHeight = document.documentElement.scrollHeight;   
  const winHeight = window.innerHeight;                      

  const scrollable = docHeight - winHeight;                  
  const progress = scrollTop / scrollable;                   

  const positionY = progress * (winHeight - 40);  // 40 = hamster height
  const rotation = scrollTop % 360;

  chomik.style.transform = `translateX(-50%) translateY(${positionY}px) rotate(${rotation}deg)`;
});
