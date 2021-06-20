"use strict";
function add(n1, n2) {
    return n1 + n2;
}
//la seguente funzione ha come ritorno void e non e obbligatorio mettere il return
function printResult(num) {
    console.log("Result: " + num);
}
// nella seguente fuznione vado ad assegnare un call back(cb: (num: number) => void)"e una condizione" con tipologia void e associando il tipo del  paramentro assegnato
function addAndHandler(n1, n2, cb) {
    const risultato = n1 + n2;
    cb(risultato);
}
printResult(add(5, 12));
let combineValues; // alla variabiele gli associo il tipo funzione cosi in seguito gli posso passare solo quel tipo
let combineValuesOk; // creo una condizione che va a sitemare il bug di non riconoscere e sommare i valori
combineValues = add;
combineValuesOk = add;
// combineValues = printResult; // come risultato da undefined perche e di tipo void
// console.log(combineValues(8, 8)); // ha un piccolo bug riconosce solo un singolo valore
console.log(combineValuesOk(8, 8));
addAndHandler(10, 20, (result) => {
    console.log(result);
});
