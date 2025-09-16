//Basico
const numero = 10
 if (isNaN(numero)){
    console.log("Este no es un número valido")
 }else if(numero %2 ===0) {
    console.log("Tú número es par")
 }else {
    console.log("Tú número es impar")
 }

//Avanzado
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
rl.question('Escribe un número: ', (n) => {
    const numero = Number(n);

    if (isNaN(numero)) {
        console.log("Entrada ivalida, no es un número");
    } else if (numero % 2 === 0) {
        console.log("Tú número es par")
    } else {
        console.log("Tú número es impar")
    }
    rl.close();
});