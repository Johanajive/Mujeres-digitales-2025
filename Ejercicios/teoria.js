const numero = 10
 if (isNaN(numero)){
    console.log("Este no es un número valido")
 }else if(numero %2 ===0) {
    console.log("Tú número es par")
 }else {
    console.log("Tú número es impar")
 }

 //switch
 const option = 2
 switch (option) {
    case 1:
        console.log('Medicina general')
        break;
    case 2:
        console.log('Medicina general')
        break;
    case 3:
        console.log('Medicina general')
        break;
    default:
        console.log("Esta opcion no existe en el hospital")
    break;
 }

 //for
 for (let index = 0; index <= 5; index++){
    console.log(`Vuelta número: ${index}`);
 }

 //while
 let contador = 1;
 while (contador <=10) {
    console.log(`Vamos en el número: ${contador}`)
    contador ++;
 }