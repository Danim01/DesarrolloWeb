const formulario = document.getElementById("formulario");
const inputNumero = document.querySelector("#numero");
const texto = document.querySelector("#texto");

function calcularFactorial(numero) {
  let factorial = 1;
  // Aquí lo que se hace es que si el tipo de variable que escribe la persona 
  // es diferente a un numero entoces me escribe que no es un número
  // de la otra manera if (isNaN(numero)) lo que signifa esta condisión es que
  // si el numero no es un numero me va a ejecutar el bloque del si, pero cuando 
  // ingreso un número como tipo texto como "5" esta linea de codigo me la sigue tomando como un número 
  if (typeof numero !== "number") {
    console.log("no es un numero");
    return
  } else if (numero < 0) {
    console.log("ingrese un numero entero positivo");
    return
  } else if (numero === 1 || numero === 0) {
    return 1;
  } else {
    for (i = 1; i <= numero; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
}

function extraerNumero(evento) {
    // Esto sirve para que cuando la persona le de en calcular la pagina no se me reinicie 
    evento.preventDefault()
    // parseInt lo que hace es convertir el valor que la persona ingreso en numero
    // ya que los input son tomados por javaScript como una cadena de texto
    const numeroCalcular = parseInt(inputNumero.value);
    const resultadoFactorial = calcularFactorial(numeroCalcular);
    console.log(resultadoFactorial);
    texto.textContent = `El factorial del número ${numeroCalcular} es: ${resultadoFactorial}`;
}
formulario.addEventListener("submit", extraerNumero);
