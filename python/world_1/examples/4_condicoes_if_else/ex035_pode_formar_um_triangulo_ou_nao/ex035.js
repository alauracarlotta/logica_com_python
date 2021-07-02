function calculate() {
    let inputValue1 = document.querySelector("#input1").value;
    let inputValue1Conveted = Number(inputValue1);
    let inputValue2 = document.querySelector("#input2").value;
    let inputValue2Conveted = Number(inputValue2);
    let inputValue3 = document.querySelector("#input3").value;
    let inputValue3Conveted = Number(inputValue3);
    let divAnswer = document.querySelector(".answer");
    
    if (inputValue1 == "" || inputValue2 == "" || inputValue3 == ""
    || inputValue1 < 0 || inputValue2 < 0 || inputValue3 < 0
    || isNaN(inputValue1Conveted) || isNaN(inputValue2Conveted) || isNaN(inputValue3Conveted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    } else if (inputValue1Conveted < inputValue2Conveted + inputValue3Conveted && 
    inputValue2Conveted < inputValue1Conveted + inputValue3Conveted && 
    inputValue3Conveted < inputValue1Conveted + inputValue2Conveted) {

        divAnswer.innerHTML = `<div class="answer error">Com os valores das retas sendo ${inputValue1Conveted}, ${inputValue2Conveted} e ${inputValue1Conveted}</div>`;
        divAnswer.innerHTML += `<div class="answer true">É possível formar um triângulo</div>`;

    } else{

        divAnswer.innerHTML = `<div class="answer error">Com os valores informados das retas AB, BC e CA</div>`;
        divAnswer.innerHTML += `<div class="answer true"></div>`;

    }

//  smallest number test 
    if (inputValue2Conveted < inputValue1Conveted && inputValue2Conveted < inputValue3Conveted) {
        smallest = inputValue2Conveted;
    }
    
    if (inputValue3Conveted < inputValue1Conveted && inputValue3Conveted < inputValue2Conveted) {
        smallest = inputValue3Conveted;
    }

//  biggest number test
    if (inputValue2Conveted > inputValue1Conveted && inputValue2Conveted > inputValue3Conveted) {
        biggest = inputValue2Conveted;
    }

    if (inputValue3Conveted > inputValue1Conveted && inputValue3Conveted > inputValue2Conveted) {
        biggest = inputValue3Conveted;
    }

    divAnswer.innerHTML = `<div class="answer error">O menor valor informado foi o ${smallest}.</div>`;
    divAnswer.innerHTML += `<div class="answer true">O maior valor informado foi o ${biggest}.</div>`;
}