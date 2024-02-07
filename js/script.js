/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// inizializzo variabili
const buttonElement = document.querySelector("#play");
const gridElement = document.querySelector("#grid");

// creo funzione che genera 100 caselle 
function gridGenerator() {
    for (let i = 0; i < 100; i++) {
        const squareElement = document.createElement("div");
        squareElement.classList.add("square");

        // all'interno di ogni square aggiungo il numero di quello square
        squareElement.innerText = i + 1;

        // al click il quadrato cambia colore, cliccando di nuovo torna del colore originale
        squareElement.addEventListener('click', function() {

            this.classList.toggle("active");
            console.log(this.innerText);
        })

        gridElement.append(squareElement);
    }
    return gridElement;
}

// al click del bottone genero una griglia di 100 celle
buttonElement.addEventListener('click', function() {

    gridElement.innerHTML = "";
    gridGenerator();

})
