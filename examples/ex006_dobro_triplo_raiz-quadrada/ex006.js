function calculate() {
    let userInput = document.querySelector('#input1').value;
    let userInputNumber = Number(userInput);
    let divAnswer = document.querySelector('.answer');

    if (userInput.length == 0) {

        divAnswer.innerHTML = `<div class="answer error">É NECESSÁRIO INFORMAR UM NÚMERO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">O dobro de ${userInputNumber} é <strong>${userInputNumber*2}</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer">O triplo de ${userInputNumber} é <strong>${userInputNumber*3}</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer">A raiz quadrada de ${userInputNumber} é aproximadamente <strong>${(Math.pow(userInputNumber,(1/2))).toFixed(2)}</strong>!</div>`;
    }
    /* Math.pow(x,y) => (Mesmo principio do Python) x = valor base, y = valor que eleva a potencia */
}