
function calculate() {
    let inputNumber1 = document.querySelector("#input1").value;
    let inputNumber1Conveted = Number(inputNumber1);
    let inputNumber2 = document.querySelector("#input2").value;
    let inputNumber2Conveted = Number(inputNumber2);
    let inputNumber3 = document.querySelector("#input3").value;
    let inputNumber3Conveted = Number(inputNumber3);
    let divAnswer = document.querySelector(".answer");
    let smallest = inputNumber1Conveted;
    let biggest = inputNumber1Conveted;

    if (inputNumber1 == "" || inputNumber2 == "" || inputNumber2 == ""
    || isNaN(inputNumber1Conveted) || isNaN(inputNumber2Conveted) || isNaN(inputNumber3Conveted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    }

//  smallest number test 
    if (inputNumber2Conveted < inputNumber1Conveted && inputNumber2Conveted < inputNumber3Conveted) {
        smallest = inputNumber2Conveted;
    }
    
    if (inputNumber3Conveted < inputNumber1Conveted && inputNumber3Conveted < inputNumber2Conveted) {
        smallest = inputNumber3Conveted;
    }

//  biggest number test
    if (inputNumber2Conveted > inputNumber1Conveted && inputNumber2Conveted > inputNumber3Conveted) {
        biggest = inputNumber2Conveted;
    }

    if (inputNumber3Conveted > inputNumber1Conveted && inputNumber3Conveted > inputNumber2Conveted) {
        biggest = inputNumber3Conveted;
    }

    divAnswer.innerHTML = `<div class="answer error">O menor valor informado foi o ${smallest}.</div>`;
    divAnswer.innerHTML += `<div class="answer true">O maior valor informado foi o ${biggest}.</div>`;
}
