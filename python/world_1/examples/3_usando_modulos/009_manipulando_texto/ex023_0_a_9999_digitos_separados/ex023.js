function informProperties() {

    let numberInform = Number(document.querySelector('#input1').value);
    let numberInformString = String(numberInform);
    let divAnswer = document.querySelector(".answer");

    if (numberInform <= 0 || numberInform >= 9999 || isNaN(numberInform)) {

        divAnswer.innerHTML = `<div class="answer error">O valor informado não é válido!</div>`;

    } else {

        if (numberInformString.length == 4) {

            divAnswer.innerHTML = "";
            divAnswer.innerHTML += `<div class="answer">Unidades: ${numberInformString[3]}</div>`;
            divAnswer.innerHTML += `<div class="answer">Dezenas: ${numberInformString[2]}</div>`;
            divAnswer.innerHTML += `<div class="answer">Centenas: ${numberInformString[1]}</div>`;
            divAnswer.innerHTML += `<div class="answer">Milhares: ${numberInformString[0]}</div>`;

        } else if (numberInformString.length == 3) {


            divAnswer.innerHTML = "";
            divAnswer.innerHTML += `<div class="answer">Unidades: ${numberInformString[2]}</div>`;
            divAnswer.innerHTML += `<div class="answer">Dezenas: ${numberInformString[1]}</div>`;
            divAnswer.innerHTML += `<div class="answer">Centenas: ${numberInformString[0]}</div>`;

        } else if (numberInformString.length == 2) {

            divAnswer.innerHTML = "";
            divAnswer.innerHTML += `<div class="answer">Unidades: ${numberInformString[1]}</div>`;
            divAnswer.innerHTML += `<div class="answer">Dezenas: ${numberInformString[0]}</div>`;

        } else {
            divAnswer.innerHTML = "";
            divAnswer.innerHTML += `<div class="answer">Unidades: ${numberInformString[0]}</div>`;
        }
    }

}