//Il programma dovrà chiedere all'utente il numero di chilometri che vuole
//percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale
// del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65

var km = prompt("Indicare la lunghezza del viaggio [km]");
var eta = prompt("Indicare l'età del passeggero");
var prezzo;

if(eta < 18){
  prezzo = ((1 - 0.2) * 0.21 * km);
  alert("Il prezzo del biglietto è di " + prezzo + "€, al quale corrisponde uno sconto del 20%");
}
else if (eta > 18 && eta < 65) {
  prezzo = (0.21 * km);
  alert("Il prezzo del biglietto è di " + prezzo + "€; nessuno sconto applicato");
}
else{
  prezzo = ((1 - 0.4) * 0.21 * km);
  alert("Il prezzo del biglietto è di " + prezzo + "€, al quale corrisponde uno sconto del 40%");
}
