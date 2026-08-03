function openSurprise() {

    document.querySelector(".intro").style.display = "none";

    document.getElementById("surpriseBox").style.display = "block";

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 40; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        heart.style.animation = "float 5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

@keyframes float {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(-120vh);
        opacity: 0;
    }
}
