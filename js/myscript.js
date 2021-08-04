
var Nome = prompt ("IndicaILTuoNome");
console.log("Nome");
console.log(typeof Nome);

var Cognome = prompt ("IndicaILTuoCognome");
console.log("Cognome");
console.log(typeof Cognome);

var Colore = prompt ("IndicaILTuoColore");
console.log("Colore");
console.log(typeof Colore);

var PasswordGenerata =((Nome + Cognome + Colore) + 21)

document.getElementById("password-generata").innerHTML = PasswordGenerata