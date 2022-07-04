var percorrenza = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));
var eta = parseInt(prompt("Quanti anni hai ?"));
var prezzoAlChilometro = 0.21;
var prezzoBigliettoSenzaSconto = prezzoAlChilometro * percorrenza;
var prezzo = "Il prezzo del biglietto è "
var euro = " Euro"
console.log(prezzoBigliettoSenzaSconto);


if (eta <= 18) {
 document.getElementById('costo').innerHTML = prezzo + ((prezzoBigliettoSenzaSconto / 100) * 80) + euro;
} else if (eta >= 65) {
 document.getElementById('costo').innerHTML = prezzo + ((prezzoBigliettoSenzaSconto / 100) * 60) + euro;
} else {
 document.getElementById('costo').innerHTML = prezzo + (prezzoBigliettoSenzaSconto) + euro;
}