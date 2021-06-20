"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Roberto";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Errore non riconosciuto', 500);
