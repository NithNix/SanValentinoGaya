// Funzione per il Puzzle/Quiz
function checkAnswer() {
    var userAnswer = document.getElementById("answer").value.toLowerCase();
    var response = document.getElementById("response");

    if (userAnswer === "sì") {
        response.textContent = "Evviva! Hai detto sì! Sono così felice! ❤️";
        response.style.color = "#28a745"; // Verde per "Sì"
    } else if (userAnswer === "no") {
        response.textContent = "Oops! Risposta sbagliata. Riprova! 💔";
        response.style.color = "#dc3545"; // Rosso per "No"
    } else {
        response.textContent = "Per favore, scrivi 'Sì' o 'No'.";
        response.style.color = "#ffc107"; // Giallo per errore
    }
}

// Funzione per lo Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Nasconde tutte le immagini
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Mostra la prossima immagine
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  

    // Cambia immagine ogni 3 secondi
    setTimeout(showSlides, 3000); 
}
