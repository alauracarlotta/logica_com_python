function calculate() {

    let inputSalary = document.querySelector('#input1').value;
    let inputSalaryNumber = Number(inputSalary);
    let divAnswer = document.querySelector('.answer');

    if (inputSalary == "" || inputSalary <= -1 || isNaN(inputSalaryNumber)) {

        divAnswer.innerHTML = `<div class="answer error">INFORME UM VALOR VÁLIDO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">O salário atual é <strong>R$ ${inputSalaryNumber.toFixed(2)} reais</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer">Seu salário com 15% de aumento ficará <strong>R$ ${(inputSalaryNumber + (inputSalaryNumber*15/100)).toFixed(2)} reais!</strong></div>`;
        divAnswer.innerHTML += `<div class="answer true">PARABÉNS!!!</div>`

    }

}
