const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Función que muestra una pregunta en consola y devuelve la respuesta del usuario
const preguntar = (pregunta) => {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta) => resolve(respuesta));
    });
};

//menú de opciones de la calculadora
const menu = async () => {
    while (true) {
        console.log("\n=====CALCULADORA JJ=====")
        console.log("+ suma")
        console.log("- resta")
        console.log("* multiplicacion")
        console.log("/ division")
        console.log("% modulo")
        console.log("** potencia")
        console.log("1. salir\n")

        //Recibe el caracter de la operacion matematica
        const caracterIngresado = await preguntar("Ingresa el caracter que necesite: ");

        //validacion, si ingresa 1 se cierra la calculadora
        if (caracterIngresado == 1) {
            console.log("===HASTA LA PROXIMA===")
            rl.close();
            return;
        }

        //preguntar los numeros para realizar la operacion matematica que se necesite hacer
        const numeroUno = Number(await preguntar("Ingresa el numero 1: "));
        const numeroDos = Number(await preguntar("Ingresa el numero 2: "));

        //validar para poder hacer las operaciones, ejemplo: si el usuario ingresa + se sumara...
        switch (caracterIngresado) {
            case "+":
                console.log("====SUMA====");
                console.log(`El resultado de la suma es: \n${numeroUno} + ${numeroDos} = ${numeroUno + numeroDos}`);
                break;
            case "-":
                console.log("====RESTA====");
                console.log(`El resultado de la resta es: \n${numeroUno} - ${numeroDos} = ${numeroUno - numeroDos}`);
                break;
            case "*":
                console.log("====MULTIPLICACION====");
                console.log(`El resultado de la multiplicacion es: \n${numeroUno} x ${numeroDos} = ${numeroUno * numeroDos}`);
                break;
            case "/":
                if (numeroDos === 0) {
                    console.log("Error: No se puede dividir entre 0.");
                } else {
                    console.log("====DIVISION====");
                    console.log(`El resultado de la multiplicacion es: \n${numeroUno} / ${numeroDos} = ${numeroUno / numeroDos}`);
                }
                break;
            case "%":
                console.log("====MODULO====");
                console.log(`El resultado de la modulo es: \n${numeroUno} % ${numeroDos} = ${numeroUno % numeroDos}`);
                break;
            case "**":
                console.log("====POTENCIA====");
                console.log(`El resultado de la potencia es: \n${numeroUno} ** ${numeroDos} = ${numeroUno ** numeroDos}`);
                break;
            default: //sino ingresa ninguno de los caracteres que se muestran en el menu sale este mensajes "Opcion no valida"
                console.log("Opcion no valida");
                break;
        }
    }
};
menu();//se ejecuta nuestra calculadora