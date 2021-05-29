function sendInfo() {
    let input1 = document.querySelector('#input1').value;
    let input2 = document.querySelector('#input2').value;
    let inputNumber1 = Number(input1);
    let inputNumber2 = Number(input2);
    let divAnswer = document.querySelector('.answer');

    let additionCalc = inputNumber1 + inputNumber2;
    let subtractionCalc = inputNumber1 - inputNumber2;
    let multiplicationCalc = inputNumber1 * inputNumber2;
    let divisionCalc = (inputNumber1 / inputNumber2);
    let divisionModuleCalc = inputNumber1 % inputNumber2;
    let potentiation = inputNumber1 ** inputNumber2;
    let squareRootCalc = inputNumber1**(0.5);
    let rootCubicCalc = inputNumber1**(1/3);

    if (input1.length == "" && input2.length == ""){

        divAnswer.innerHTML = `<div class="answer error"> INFORME OS DOIS NÚMEROS!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">A soma ${inputNumber1} + ${inputNumber2} = ${additionCalc}</div>`;
        divAnswer.innerHTML += `<div class="answer">A subtração ${inputNumber1} - ${inputNumber2} = ${subtractionCalc} </div>`;
        divAnswer.innerHTML += `<div class="answer">A multiplicação ${inputNumber1} * ${inputNumber2} = ${multiplicationCalc} </div>`;
        divAnswer.innerHTML += `<div class="answer">A divisão ${inputNumber1} / ${inputNumber2} = ${divisionCalc.toFixed(2)}</div>`;
        divAnswer.innerHTML += `<div class="answer">O resto da divisão de ${inputNumber1} % ${inputNumber2} = ${divisionModuleCalc}</div>`;
        divAnswer.innerHTML += `<div class="answer">${inputNumber1} ^ ${inputNumber2} = ${potentiation}</div>`;
        divAnswer.innerHTML += `<div class="answer">A ²√ ${inputNumber1} = ${squareRootCalc.toFixed(2)}</div>`;
        divAnswer.innerHTML += `<div class="answer">A ³√ ${inputNumber1} = ${rootCubicCalc.toFixed(2)}</div>`;

    }
    
}