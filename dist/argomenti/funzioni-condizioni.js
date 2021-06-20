"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandler(n1, n2, cb) {
    const risultato = n1 + n2;
    cb(risultato);
}
printResult(add(5, 12));
let combineValues;
let combineValuesOk;
combineValues = add;
combineValuesOk = add;
console.log(combineValuesOk(8, 8));
addAndHandler(10, 20, (result) => {
    console.log(result);
});
