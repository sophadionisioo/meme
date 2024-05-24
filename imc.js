let btncalcular = document.querySelector('#btncalcular')


btncalcular.onclick = function () {

    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let resultado = document.querySelector('#resultado')
    let resultadoimc = document.querySelector('#resultadoimc')

    altura = altura / 100;

    let imc = peso / (altura * altura)
     resultado.innerHTML = `
    <p>
    imc:
    ${imc.toFixed(2)}
    </p>`

    console.log(imc);
if (imc < 16) {
    resultadoimc.innerHTML = "Magreza grave";
} else if (imc >= 16 && imc < 16.9) {
    resultadoimc.innerHTML = "Magreza moderada";
} else if (imc >= 17 && imc < 18.5) {
    resultadoimc.innerHTML = "Magreza leve";
} else if (imc >= 18.6 && imc < 24.9) {
    resultadoimc.innerHTML = "Peso ideal";
} else if (imc >= 25 && imc < 29.9) {
    resultadoimc.innerHTML = "Sobrepeso";
} else {
    resultadoimc.innerHTML = "Obesidade grau 1";
}
}
