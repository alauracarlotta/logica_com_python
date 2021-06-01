function calculate() {

    let inputRealNumber = document.querySelector('#input1').value;
    let inputRealNumberConverted = Number(inputRealNumber);
    let divAnswer = document.querySelector('.answer');

    if (inputRealNumber == "" || isNaN(inputRealNumberConverted)) {

        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">O valor inteiro do número ${inputRealNumberConverted} é igual a ${Math.trunc(inputRealNumberConverted)}.</div>`;
    }
}