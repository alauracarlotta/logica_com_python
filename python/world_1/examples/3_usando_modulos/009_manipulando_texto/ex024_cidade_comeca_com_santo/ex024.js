function isNumber(variable) {

    if (variable.match(/[0-9]/)) {
        return true;
    } else {
        return false;
    }
}

function haveSanto(variable) {

    if (variable.indexOf('Santo') === 0 || variable.indexOf('santo') === 0) {
        return true;
    } else {
        return false;
    }

}

function confirmCity() {

    if (isNumber(inputCity.value) || (inputCity.value).length == 0) {
        
        divAnswer.innerHTML = `<div class="answer error">Informe uma cidade válida!</div>`;

    } else {

        if (haveSanto(inputCity.value)) {

            divAnswer.innerHTML = `<div class="answer"></div>`;
            divAnswer.innerHTML += `<div class="answer">Sim, a cidade ${inputCity.value} tem Santo no nome e começa com a mesma!</div>`;

        } else {

            divAnswer.innerHTML = `<div class="answer"></div>`;
            divAnswer.innerHTML += `<div class="answer">Não, a cidade informada foi a cidade de ${inputCity.value}!</div>`;
        }
    }

    inputCity.value = "";
    inputCity.focus();
}

let inputCity = document.querySelector('#input1');
let divAnswer = document.querySelector('.answer');