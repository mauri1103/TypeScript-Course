console.log("Funziona");

function addB(n1: number, n2: number, mostraRisultato: boolean, phrase: string) {
  let somma = n1 + n2;

  if (mostraRisultato) {
    console.log(phrase + somma);
  } else {
    return somma;
  }
}
const numero1 = 5;
const numero2 = 1.75;
const mostraRisultato = true;
const testo = "Il sisultato finale e il seguente: ";

addB(numero1, numero2, mostraRisultato, testo); //Come e stato inserito il boolean deve mostrare il risultato

// const result = add(numero1, numero2,mostraRisultato);

// console.log(testo + " " + result);
