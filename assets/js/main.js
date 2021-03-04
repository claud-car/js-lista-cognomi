// LISTA COGNOMI
var cognomi =["Carchietti", "Bianchi", "Verdi", "Rossi", "Stone"]

// ORDINO LA LISTA COGNOMI
cognomi.sort()
console.log(cognomi);

// CHIEDO COGNOME ALL'UTENTE
var cognomeutente = prompt("Dimmi il tuo cognome");
cognomeutente = cognomeutente[0].toUpperCase() + cognomeutente.substring(1);
console.log(cognomeutente);

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

// ASSEGNO VARIABILE
var i= 0;

// CICLO WHILE PER STAMPARE LA LISTA DEI COGNOMI
while (i < cognomi.length) {
  document.getElementById("cognome").innerHTML += '<li>' + cognomi[i]; + '</li>'
  ++i;
}
