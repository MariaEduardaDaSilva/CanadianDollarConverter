// var valorDolarTexto = prompt('Digite um valor em dolar canadense que você quer converter para real')

const valueDolarConvert = document.getElementById("valueDolar");
document.getElementById("myButton").addEventListener("click", function() {

    const valorDolarNum = parseFloat(valueDolarConvert.value)

    const valorReal = valorDolarNum * 4.39
    // toFixed: para deixar com casas decimais
    const valorRealDecimal = valorReal.toFixed(2)
    console.log(valorRealDecimal)

    alert('Valor em real: ' + valorRealDecimal)
});

