"use strict";
var Ruoli;
(function (Ruoli) {
    Ruoli[Ruoli["ADMIN"] = 0] = "ADMIN";
    Ruoli[Ruoli["USER"] = 1] = "USER";
    Ruoli[Ruoli["AUTORE"] = 2] = "AUTORE";
})(Ruoli || (Ruoli = {}));
const persona = {
    nickName: "Superman",
    nome: "Robert",
    cognome: "Basics",
    eta: 30,
    hobbie: ["gym", "nuoto"],
    ruolo: [2, "autore"],
    role: Ruoli.ADMIN,
};
let attivitaFavorite;
attivitaFavorite: ["calcio"];
console.log(persona.nome);
for (const h of persona.hobbie) {
    console.log(h);
}
if (persona.role === Ruoli.ADMIN) {
    console.log("is admin");
}
