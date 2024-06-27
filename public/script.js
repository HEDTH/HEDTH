function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Por favor, ingresa dos números válidos.';
    } else {
        switch (operation) {
            case 'sum':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'No se puede dividir por cero';
                break;
            default:
                result = 'Operación no válida';
        }
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
}
