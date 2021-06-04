function haveNumber(variable) {

    if (variable.match(/[0-9]/)) {
        return true;
    } else {
        return false;
    }
}

function showName() {

    if (haveNumber(inputName.value) || (inputName.value).length == "") {

        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    } else {

        divAnswer.innerHTML = `<div class="answer"></div>`;
        divAnswer.innerHTML += `<div class="answer">O nome completo informado foi ${inputName.value}</div>`;
        divAnswer.innerHTML += `<div class="answer">O 1º nome é ${inputNameSplitted[0]}</div>`;
        divAnswer.innerHTML += `<div class="answer">O último nome é ${inputNameSplitted[inputNameSplitted.length - 1]}</div>`;
        divAnswer.innerHTML += `<div class="answer">O nome completo tem ${inputNameSplitted.length} nomes.</div>`;

        console.log(inputNameSplitted)
    }

}

let inputName = document.querySelector('#input1');
let inputNameSplitted = inputName.value.split(" ");
let divAnswer = document.querySelector('.answer');
