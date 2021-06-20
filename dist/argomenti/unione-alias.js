"use strict";
function combinazione(input1, input2, conversioneTestoToNumeri) {
    let risultato;
    if ((typeof input1 === "number" && typeof input2 === "number") || conversioneTestoToNumeri === "sono-numeri") {
        risultato = +input1 + +input2;
    }
    else {
        risultato = input1.toString() + input2.toString();
    }
    return risultato;
}
const combinazioneN = combinazione(30, 26, "sono-numeri");
console.log(combinazioneN);
const combinazioneTestoANumeri = combinazione("30", "26", "sono-numeri");
console.log(combinazioneTestoANumeri);
const combinazioneString = combinazione("Prova ", "testo", "testo");
console.log(combinazioneString);
