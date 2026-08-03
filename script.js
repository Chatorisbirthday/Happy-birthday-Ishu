function openSurprise() {
    document.querySelector(".intro").style.display = "none";
    document.getElementById("surpriseBox").style.display = "block";

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "0";
        heart.style.fontSize = "25px";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(-100vh)", opacity: 0 }
            ],
            {
                duration: 4000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
