function BorrarTexto() {
  txtresultado.value = "0";
}

function InsertarValor(valor) {
  let txtresultado = document.getElementById("txtresultado");
  if (txtresultado.value === "0") {
    txtresultado.value = valor;
  } else {
    txtresultado.value += valor;
  }
}

function MostrarResultado() {
  let txtresultado = document.getElementById("txtresultado").value;
  let operador = txtresultado.match(/[+\-X/]/);
  if (operador) {
    operador = operador[0];
    let partes = txtresultado.split(operador);
    let num1 = parseFloat(partes[0]);
    let num2 = parseFloat(partes[1]);

    let resultado;

    // Realizar la operación según el operador
    switch (operador) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "X":
        resultado = num1 * num2;
        break;
      case "/":
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = "Error";
        }
        break;
      default:
        resultado = "Error";
    }

    document.getElementById("txtresultado").value = resultado;
    txtresultado.value = resultado;
  } else {
    document.getElementById("txtresultado").value = "Error";
  }
}
