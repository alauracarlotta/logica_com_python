function justHaveNumber(variable) {

    if (!isNaN(variable)) {
        return true;
    } else {
        return false;
    }

}

function howManyLetters(){
    
    var count = 0;

    var index = (inputPhrase.value).indexOf(inputSearch.value);

    while (index !== -1) {

        count++;
        index = (inputPhrase.value).indexOf((inputSearch.value), index + 1)
    }

    return count;
}

function showInfo() {

    if (justHaveNumber(inputPhrase.value) || (inputPhrase.value).length == "" || (inputSearch.value).length == "") {

        divAnswer.innerHTML = `<div class="answer error">Informe uma frase válida e uma letra ou termo!</div>`;

    } else {

        if ((inputPhrase.value).indexOf(inputSearch.value) == -1) {

            divAnswer.innerHTML = `<div class="answer"></div>`;
            divAnswer.innerHTML += `<div class="answer error">A letra ou termo buscados não foram encontrados!</div>`;

        } else {

            divAnswer.innerHTML = `<div class="answer"></div>`;
            divAnswer.innerHTML += `<div class="answer">Na frase "${inputPhrase.value}", foram encontradas ${howManyLetters()} vezes a letra/termo "${(inputSearch.value).toUpperCase()}".</div>`;
            divAnswer.innerHTML += `<div class="answer">Na ${(inputPhrase.value).indexOf(inputSearch.value)}ª posição foi encontrada a letra/termo "${(inputSearch.value).toUpperCase()}".</div>`;
            divAnswer.innerHTML += `<div class="answer">Na ${(inputPhrase.value).lastIndexOf(inputSearch.value)}ª posição foi encontrada a letra/termo "${(inputSearch.value).toUpperCase()}".</div>`;

        }

    }

    inputSearch.value = "";
    inputSearch.focus();

}

let inputPhrase = document.querySelector('#input1');
let inputSearch = document.querySelector('#input2');
let divAnswer = document.querySelector('.answer');
