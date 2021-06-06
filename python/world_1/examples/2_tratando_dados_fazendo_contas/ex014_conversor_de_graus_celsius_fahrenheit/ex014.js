function calculate() {

    let inputCelsius = document.querySelector('#input1').value;
    let inputCelsiusNumber = Number(inputCelsius);
    let divAnswer = document.querySelector('.answer');

    if (isNaN(inputCelsiusNumber)) {

        divAnswer.innerHTML = `<div class="answer error">INFORME UM VALOR VÁLIDO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">O valor <strong><em>${inputCelsiusNumber.toFixed(1)}°C</em></strong> convertidos para Fahrenheit ficam <strong><em>${(inputCelsiusNumber*1.8+32).toFixed(1)}°F</em></strong>.</div>`;
        divAnswer.innerHTML += `<div class="answer">O valor <strong><em>${inputCelsiusNumber.toFixed(1)}°C</em></strong> convertidos para Kelvin ficam <strong><em>${(inputCelsiusNumber+273.15).toFixed(2)}°K</em></strong>.</div>`;

    }
}