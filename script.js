
    // Function to update hamster position on scroll
    function updateHamsterPosition() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        const maxY = window.innerHeight - chomik.offsetHeight;
        const y = scrollPercent * maxY;

        const rotation = scrollPercent * 720; // spins twice

        chomik.style.transform = `translateX(-50%) translateY(${y}px) rotate(${rotation}deg)`;
    }

    // Update on scroll
    window.addEventListener("scroll", updateHamsterPosition);

    // Run once on page load in case not at top
    updateHamsterPosition();
});
