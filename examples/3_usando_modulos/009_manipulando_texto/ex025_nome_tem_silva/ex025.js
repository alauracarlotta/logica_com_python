function isNumber(variable){

    if(variable.match(/[0-9]/)) {
        return true;
    } else {
        return false;
    }
    
}

function haveSilvaInTheName(variable) {

    if (variable.indexOf('Silva') === 0 || variable.indexOf('silva') === 0) {
        return true;
    } else {
        return false;
    }

}

function confirmInfo() {

    if (isNumber(inputName.value) || (inputName.value).length == "") {

        divAnswer.innerHTML = `<div class="answer error">Informe um nome válido!</div>`;

    } else {

        if (haveSilvaInTheName(inputName.value)) {

            divAnswer.innerHTML = `<div class="answer"></div>`;
            divAnswer.innerHTML += `<div class="answer">Sim, há 'Silva' no nome informado!</div>`;
            divAnswer.innerHTML += `<div class="answer">O nome informado foi <strong><em>${inputName.value}</em></strong>!</div>`;

        } else {

            divAnswer.innerHTML = `<div class="answer"></div>`;
            divAnswer.innerHTML += `<div class="answer"><em>NÃO HÁ 'SILVA' NO NOME INFORMADO!</em></div>`;
        }
    }

    inputName.value = "";
    inputName.focus();
}

let inputName = document.querySelector('#input1');
let divAnswer = document.querySelector('.answer');
