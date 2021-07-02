function calculate() {

    let inputSalary = document.querySelector("#input1").value;
    let inputSalaryConverted = Number(inputSalary);
    let divAnswer = document.querySelector(".answer");
    let increase = 0

    if (inputSalary == "" || inputSalary < 0 || isNaN(inputSalaryConverted)) {

        divAnswer.innerHTML = `<div class="answer error">Informe um número válido</div>`;

    } else if (inputSalaryConverted < 1250.00) {

        increase = (inputSalaryConverted + (inputSalaryConverted * 10) / 100) 
        divAnswer.innerHTML = `<div class="answer true">Tendo o salário abaixo de R$ 1250,00 reais, você terá um aumento de 15%</div>`;
        divAnswer.innerHTML += `<div class="answer true">O valor do seu novo salário é R$ ${increase.toFixed(2)} reais!</div>`;

    } else {

        increase = (inputSalaryConverted + (inputSalaryConverted * 15) / 100) 
        divAnswer.innerHTML = `<div class="answer error">Tendo o salário abaixo de R$ 1250,00 reais, você terá um aumento de 15%</div>`;
        divAnswer.innerHTML += `<div class="answer error">O valor do seu novo salário é R$ ${increase.toFixed(2)} reais!</div>`;
    }

}