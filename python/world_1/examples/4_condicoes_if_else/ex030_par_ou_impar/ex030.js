function calculate() {
    let inputNumber = document.querySelector("#input1").value;
    let inputNumberConverted = Number(inputNumber);
    let divAnswer = document.querySelector(".answer");

    if (isNaN(inputNumberConverted)) {

        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    } else if (inputNumberConverted % 2 == 0) {

        divAnswer.innerHTML = `<div class="answer true">O número ${inputNumberConverted} é PAR!</div>`;

    } else {

        divAnswer.innerHTML = `<div class="answer error">O número ${inputNumberConverted} é ÍMPAR!</div>`;        
    }
}