var Ruoli;
(function (Ruoli) {
    Ruoli[Ruoli["ADMIN"] = 0] = "ADMIN";
    Ruoli[Ruoli["USER"] = 1] = "USER";
    Ruoli[Ruoli["AUTORE"] = 2] = "AUTORE";
})(Ruoli || (Ruoli = {}));
; //come creare un enum 
var persona = 
// : {
//   nickName: string;
//   nome: string;
//   cognome: string;
//   eta: number;
// } =
{
    nickName: "Superman",
    nome: "Robert",
    cognome: "Basics",
    eta: 30,
    hobbie: ["gym", "nuoto"],
    ruolo: [2, 'autore'],
    role: Ruoli.ADMIN
};
// persona.ruolo.push('admin'); // aggiungo il ruolo admin
// persona.ruolo[1]=10;
var attivitaFavorite;
attivitaFavorite: ["calcio"];
console.log(persona.nome);
for (var _i = 0, _a = persona.hobbie; _i < _a.length; _i++) {
    var h = _a[_i];
    console.log(h);
}
if (persona.role === Ruoli.ADMIN) {
    console.log('is admin');
}
