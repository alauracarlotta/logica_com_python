function sendInfo() {

    let getInputUser = document.querySelector('#input1').value;
    let divAnswerUser = document.querySelector('.answer');
    let i = 0
    // let spanTrueOrFalse = document.querySelector('.true-or-false');

    divAnswerUser.innerHTML += `<div class="answer">O tipo primitivo de "${getInputUser}" é <strong><em>${typeof getInputUser}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">É feita só de espaços? <strong><em>${getInputUser == getInputUser.indexOf(' ')}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">É um número? <strong><em>${isNaN(!getInputUser)}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">É alfa numérico? <strong><em>${getInputUser.match(/[a-z]/g) || getInputUser.match(/[A-Z]/) && getInputUser.match(/[0-9]/) == true}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Está escrita só em minúsculas? <strong><em>${getInputUser == getInputUser.toLowerCase()}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Está escrita só em maiúsculas? <strong><em>${getInputUser == getInputUser.toUpperCase()}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Quantos caracteres tem "${getInputUser}"? <strong><em>${getInputUser.length}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">O primeiro caracter digitado foi: <strong><em>${getInputUser[0]}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Em cada espaço, separe a frase por vírgula! <strong><em>${getInputUser.split(' ')}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Se tiver a palavra 'feliz', troque-a por 'sortuda'! <strong><em>${getInputUser.replace('feliz', 'sortuda')}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Me mostre os 3 últimos caraceteres: <strong><em>${getInputUser.slice(-3)}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Me mostre os 5 primeiros caracteres: <strong><em>${getInputUser.slice(0,5)}</em></strong>!</div>`;
    divAnswerUser.innerHTML += `<div class="answer">Agora me mostre o restante dos caracteres: <strong><em>${getInputUser.slice(5)}</em></strong>!</div>`;
}
