
function calculate() {

    let inputYear = document.querySelector("#input1").value;
    let inputYearConveted = Number(inputYear);
    let divAnswer = document.querySelector(".answer");

    if (inputYearConveted % 4 == 0 && inputYearConveted % 100 != 0 || inputYearConveted % 400 == 0) {

        divAnswer.innerHTML = `<div class="answer true">O ano ${inputYearConveted} é BISSEXTO!</div>`;

    } else if (inputYear < 0 || inputYear == "" || isNaN(inputYearConveted) ) {
        divAnswer.innerHTML = `<div class="answer error">Informe um número positivo!</div>`;

    } else {
        divAnswer.innerHTML = `<div class="answer error">O ano ${inputYearConveted} NÃO é BISSEXTO!</div>`;
        divAnswer.innerHTML += `<div class="answer error">Este ano tem 365 dias!</div>`;
    } 

    /* if (inputYear == "" || inputYear < 0 || isNaN(inputYearConveted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    } else if (inputYearConveted % 4 == 0 && inputYearConveted % 100 != 0 || inputYearConveted % 400 == 0) {

        divAnswer.innerHTML = `<div class="answer true">O ano ${inputYearConveted} é BISSEXTO!</div>`;

    } else {
        divAnswer.innerHTML = `<div class="answer error">O ano ${inputYearConveted} NÃO é BISSEXTO!</div>`;
        divAnswer.innerHTML += `<div class="answer error">Este ano tem 365 dias!</div>`;
    } */
    
}
