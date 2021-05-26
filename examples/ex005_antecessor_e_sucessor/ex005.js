function calculate() {
    let userInput = document.querySelector('#input1').value;
    let userInputNumber = Number(userInput);
    let divAnswer = document.querySelector('.answer');

    /* divAnswer.innerHTML += `<div class="answer predecessor">O número <strong>${--userInput}</strong> é o antecessor de ${++userInput}!</div>`;
    divAnswer.innerHTML += `<div class="answer successor">O sucessor de ${userInput} é <strong>${++userInput}</strong>!</div>`; */

    if (userInput.length == 0) {

        divAnswer.innerHTML = `<div class="answer error">É NECESSÁRIO DIGITAR ALGUM VALOR!</div>`;

    } else {
    
        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer predecessor">O número <strong>${userInputNumber-1}</strong> é o antecessor de ${userInputNumber}!</div>`;
        divAnswer.innerHTML += `<div class="answer successor">O sucessor de ${userInputNumber} é <strong>${userInputNumber+1}</strong>!</div>`;
    }
}