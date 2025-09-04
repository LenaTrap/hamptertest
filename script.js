const chomik = document.getElementById("chomik");

let currentRotation = 0; // current rotation angle
let targetRotation = 0;  // target rotation based on scroll

function updateHamster() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    const scrollable = docHeight - winHeight;
    const progress = scrollTop / scrollable; // 0 → 1

    // Vertical position (smooth handled by CSS transition)
    const positionY = progress * (winHeight - chomik.offsetHeight);

    // Target rotation based on scroll
    targetRotation = scrollTop % 360;

    // Smoothly approach target rotation (momentum)
    currentRotation += (targetRotation - currentRotation) * 0.1; // adjust 0.1 for speed

    // Apply transform
    chomik.style.transform = `translateX(-50%) translateY(${positionY}px) rotate(${currentRotation}deg)`;

    requestAnimationFrame(updateHamster);
}

// Start the loop
updateHamster();
