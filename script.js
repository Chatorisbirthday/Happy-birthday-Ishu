function openSurprise() {

    document.getElementById("opening").style.display = "none";

    document.getElementById("birthday").style.display = "block";

    startTyping();

    createHearts();
}


function startTyping() {

    let text = "May this day bring you endless happiness, beautiful memories and everything your heart wishes for ❤️";

    let i = 0;

    let speed = 50;

    let element = document.getElementById("typing");

    function type() {

        if (i < text.length) {

            element.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, speed);

        }

    }

    type();
}


function createHearts() {

    for (let i = 0; i < 50; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = Math.random() * 25 + 15 + "px";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);


        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: "translateY(-120vh)",
                    opacity: 0
                }
            ],
            {
                duration: 5000,
                easing: "linear"
            }
        );


        setTimeout(() => {
            heart.remove();
        }, 5000);

    }

}
