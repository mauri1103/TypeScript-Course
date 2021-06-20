"use strict";
function combinazione(
// input1: number | string,  vado a sostituire i tipi direttamente con un Type creato esternamente con le tipologie.
// input2: number | string,
// conversioneTestoToNumeri: 'sono-numeri' | 'testo'
input1, input2, conversioneTestoToNumeri //associo direttamente qui quello che andrei a cercare o modificare
) {
    let risultato;
    // con conversione numeri a testo andrei  convertire il testo a numeri
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
