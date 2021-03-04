// LISTA COGNOMI
var cognomi =["carchietti", "bianchi", "verdi", "rossi", "stone"]
console.log(cognomi);

// ORDINO LA LISTA COGNOMI
cognomi.sort()
console.log(cognomi);

// CHIEDO COGNOME ALL'UTENTE
var cognomeutente = prompt("Dimmi il tuo cognome");
// CONTROLLO SE UTENTE HA INSERITO NUMERI
if (!isNaN(cognomeutente)){
  console.log("Non darmi un numero,dammi una stringa di caratteri");
} else{
  // PUSHO IL COGNOME UTENTE
  cognomi.push(cognomeutente);
  // ORDINO ALFABETICAMENTE IL COGNOME UTENTE
  cognomi.sort();
  console.log(cognomi);
}

// STAMPO POSIZIONE "UMANA" DELLA LISTA
// cognomi.slice(1);
// [1,2,3]
// console.log(cognomi);
//
// cognomi.slice(2, 4);
// [2, 3]
//
// console.log(cognomi);

var cognomi;
cognomi.splice(0, 0,null)

console.log(cognomi);
