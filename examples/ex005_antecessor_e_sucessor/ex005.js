function calculate() {
    let userInput = Number(document.querySelector('#input1').value);
    let divAnswer = document.querySelector('.answer');

    divAnswer.innerHTML += `<div class="answer predecessor">O número <strong>${--userInput}</strong> é o antecessor de ${++userInput}!</div>`;
    divAnswer.innerHTML += `<div class="answer successor">O sucessor de ${userInput} é <strong>${++userInput}</strong>!</div>`;
}