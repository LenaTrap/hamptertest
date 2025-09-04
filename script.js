window.addEventListener("DOMContentLoaded", () => {
    const chomik = document.getElementById("chomik");

    // List of hamster costumes
    const costumes = [
        "chomiczek.png",
        "chomiczek_Lila.png",
        "chomiczek_Julia.png",
        "chomiczek_Kasia.png",
        "chomiczek_Natalia.png"
    ];

    // Pick random costume
    const randomIndex = Math.floor(Math.random() * costumes.length);
    chomik.src = costumes[randomIndex];

    // Scroll animation
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        const maxY = window.innerHeight - chomik.clientHeight;
        const y = scrollPercent * maxY;

        const rotation = scrollPercent * 720; // 2 full spins

        chomik.style.transform = `translateX(-50%) translateY(${y}px) rotate(${rotation}deg)`;
    });
});
