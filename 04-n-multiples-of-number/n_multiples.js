// function declaration,
// Questo esercizio è simile ma diverso dal precedente
//definire una funzione che restituisce un array di n multipli di anumber
//all'interno della funzione dichiarare una variabile per memorizzare l'array
//usa un while ciclo per fermarti quando viene soddisfatta una certa condizione💡usare array.lengthper sapere 
//quando fermarsi;
//
const nMultiplesOf = (number, limit) => {
let array1 = [];

for (let i=1; i<=limit; i++) { 
array1.push(number*i); 
}
return array1;
}


console.log(nMultiplesOf(2, 200));
