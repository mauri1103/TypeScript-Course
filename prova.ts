
enum Ruoli{ADMIN,USER,AUTORE}; //come creare un enum 

const persona =
  // : {
  //   nickName: string;
  //   nome: string;
  //   cognome: string;
  //   eta: number;
  // } =
     
  {
    nickName: "Superman",
    nome: "Robert", // e preferibile creare un oggertto direttamente cosi si risparmia codice e gia i valori sono stabiliti
    cognome: "Basics",
    eta: 30,
    hobbie: ["gym", "nuoto"],  // array classico 
    ruolo: [2,'autore'],  // tuples array modificato che puo contenere piu tipologie
    role: Ruoli.ADMIN,    // richiamo il ruolo admin
  };

  

  // persona.ruolo.push('admin'); // aggiungo il ruolo admin
  // persona.ruolo[1]=10;

let attivitaFavorite: string[];
attivitaFavorite: ["calcio"];

console.log(persona.nome);

for (const h of persona.hobbie) {
  console.log(h);
}

if(persona.role === Ruoli.ADMIN){
  console.log('is admin');
}
