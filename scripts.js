function checkAnswer() {
    // Ottieni il valore inserito dall'utente
    var userAnswer = document.getElementById("answer").value.toLowerCase();

    // Ottieni l'elemento di risposta per mostrare il risultato
    var response = document.getElementById("response");

    if (userAnswer === "sì") {
        response.textContent = "Evviva! Hai detto sì! Sono così felice! ❤️";
        response.style.color = "#28a745"; // Colore verde per il sì
    } else if (userAnswer === "no") {
        response.textContent = "Oops! Risposta sbagliata. Riprova! 💔";
        response.style.color = "#dc3545"; // Colore rosso per il no
    } else {
        response.textContent = "Per favore, scrivi 'Sì' o 'No'.";
        response.style.color = "#ffc107"; // Colore giallo per una risposta non valida
    }
}
