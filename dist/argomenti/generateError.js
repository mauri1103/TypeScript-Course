"use strict";
let userInput; // e simile a any, si possono passare tipi diversi di valori, pero e molto piu ristretto a differnza di any che e piu versatile
let userName;
userInput = 5;
userInput = "Roberto";
// a userName non gli posso passare userInpute se pure e di tipo unknown,
// perche e non e garantito che sia di tipo stringa, a differenza di any che e molto piu versatile e disattiva 'il check' dei tipi
// userName = userInput;
//con il seguent if vado a controllorare se realmente e una stringa e si corregge l'errore del unknown
if (typeof userInput === "string") {
    userName = userInput;
}
// funzione di come creare una exeception
// con la voce never si definisce che mai ritorna nulla
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Errore non riconosciuto', 500);
