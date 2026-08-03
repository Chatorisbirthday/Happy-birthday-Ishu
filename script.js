
const message = Happiest Birthday to my cutest Chatori❤🍕 (Ishu😜),

You bring so much happiness and just the right amount of chaos into my life—and that's exactly what I love the most.

I know I'm pathetic at expressing my feelings, but I want you to know that you are the most important person in my life. Without you, everything feels like hell... and somehow, with you, even hell feels like heaven.

You know I'm agnostic, but for you, I would pray to anyone or anything if it meant seeing you happy. I truly hope you get everything you've ever wished for.

May your life always be filled with love, laughter, peace, and all the happiness you deserve. May that cute smile of yours never fade, no matter what life brings. And as long as I'm around, I'll always do my best to protect that smile.

May all your dreams come true, and may this new year of your life be your most beautiful one yet.

Happy Birthday, Chatori❤.

Always cheering for you. ❤️;

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const typing = document.getElementById("typing");

openBtn.addEventListener("click", () => {
    opening.style.display = "none";
    birthday.style.display = "block";

    typeMessage();
    createHearts();
});

function typeMessage() {
    typing.innerHTML = "";
    let i = 0;

    const timer = setInterval(() => {
        typing.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(timer);
        }
    }, 35);
}

function createHearts() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const duration = 3000 + Math.random() * 3000;

        heart.animate(
            [
                { transform: "translateY(0)", opacity: 1 },
                { transform: "translateY(-110vh)", opacity: 0 }
            ],
            {
                duration: duration,
                easing: "linear"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}
