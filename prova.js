function combinazione(input1, input2, conversioneTestoToNumeri) {
    var risultato;
    // con conversione numeri a testo andrei  convertire il testo a numeri 
    if ((typeof input1 === "number" && typeof input2 === "number") || conversioneTestoToNumeri === "sono-numeri") {
        risultato = +input1 + +input2;
    }
    else {
        risultato = input1.toString() + input2.toString();
    }
    return risultato;
}
var combinazioneN = combinazione(30, 26, "sono-numeri");
console.log(combinazioneN);
var combinazioneTestoANumeri = combinazione("30", "26", "sono-numeri");
console.log(combinazioneTestoANumeri);
var combinazioneString = combinazione("Prova ", "testo", "testo");
console.log(combinazioneString);
