// chiedere all'utente quanti km deve percorrere
var distanza = parseInt(prompt( "Inserisci la distanza in km da percorrere"));
// console.log(distanza);

// chiedere all'utente l'età
var età = parseInt(prompt("Inserisci la tua età"));
// console.log(età);

// definisco una variabile per il prezzo del biglietto a km, per gli under, per gli over e per gli sconti in base all'età
var costoKm = 0.21
var under = 18
var over = 65
var scontoUnder = ((costoKm * distanza) * 0.2);
var scontoOver = ((costoKm * distanza) * 0.4);


// definisco lo stato condizionale per il calcolo del prezzo
if (età < under) {
    prezzo = ((costoKm * distanza) - scontoUnder);
} else if (età > over) {
    prezzo = ((costoKm * distanza) - scontoOver);
} else {
    prezzo = (costoKm * distanza);
}

// stampo il prezzo calcolato in pagina
document.getElementById('prezzobiglietto').innerHTML = prezzo
