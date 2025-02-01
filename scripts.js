document.getElementById("startPuzzle").addEventListener("click", function() {
    document.getElementById("puzzleSection").classList.remove("hidden");
    document.querySelector(".slideshow").classList.remove("hidden");
    startSlideshow();
    startCountdown();
});

function checkAnswer() {
    let answer = document.getElementById("puzzleAnswer").value.toLowerCase();
    
    if (answer === "pianta") { 
        document.getElementById("puzzleSection").classList.add("hidden");
        document.getElementById("finalMessage").classList.remove("hidden");
    } else {
        document.getElementById("feedback").innerHTML = "Oops! Prova di nuovo! 💕";
    }
}

function yesResponse() {
    alert("Sapevo che avresti detto sì! Ti voglio bene, Gaya! 💖");
    document.body.style.backgroundColor = "#ff99c8";
    document.getElementById("finalMessage").classList.add("hidden");
    document.getElementById("loveLetter").classList.remove("hidden");
    typeLoveMessage();
    startConfetti();
}

function wrongAnswer() {
    alert("Oops! Risposta sbagliata! 😆 Riprova.");
}

let message = "Grazie per aver fatto parte della mia vita, amore mio. ❤️ Davvero non riesco a immaginare una vita senza di te. Ti amo tantissimo, Gaya! 💕";
let index = 0;

function typeLoveMessage() {
    let loveText = document.getElementById("loveText");
    loveText.innerHTML = "";
    
    let interval = setInterval(() => {
        if (index < message.length) {
            loveText.innerHTML += message[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

let images = [
    "https://i.imgur.com/yourimage1.jpg", // Replace with actual Imgur URLs
    "https://i.imgur.com/yourimage2.jpg",
    "https://i.imgur.com/yourimage3.jpg"
];
let imgIndex = 0;

function startSlideshow() {
    setInterval(() => {
        imgIndex = (imgIndex + 1) % images.length;
        document.getElementById("slideshowImg").src = images[imgIndex];
    }, 3000);
}

function startCountdown() {
    let countDate = new Date("Feb 14, 2025 00:00:00").getTime();
    setInterval(() => {
        let now = new Date().getTime();
        let difference = countDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `💖 San Valentino in: ${days} giorni ${hours} ore ${minutes} minuti ${seconds} secondi 💖`;

    }, 1000);
}

function startConfetti() {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confetti = [];

    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 10 + 5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < confetti.length; i++) {
            let c = confetti[i];
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
            ctx.fill();
        }
    }

    function update() {
        for (let i = 0; i < confetti.length; i++) {
            confetti[i].y += confetti[i].d / 5;
        }
    }

    setInterval(() => {
        update();
        draw();
    }, 30);
              }
