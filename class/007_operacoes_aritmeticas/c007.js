function sendInfo() {
    let input1 = Number(document.querySelector('#input1').value);
    let input2 = Number(document.querySelector('#input2').value);
    let divAnswer = document.querySelector('.answer');

    let additionCalc = input1 + input2;
    let subtractionCalc = input1 - input2;
    let multiplicationCalc = input1 * input2;
    let divisionCalc = (input1 / input2);
    let divisionModuleCalc = input1 % input2;
    let potentiation = input1 ** input2;
    let squareRootCalc = input1**(0.5);
    let rootCubicCalc = input1**(1/3);

    divAnswer.innerHTML += `<div class="answer">A soma ${input1} + ${input2} = ${additionCalc}</div>`;
    divAnswer.innerHTML += `<div class="answer">A subtração ${input1} - ${input2} = ${subtractionCalc} </div>`;
    divAnswer.innerHTML += `<div class="answer">A multiplicação ${input1} * ${input2} = ${multiplicationCalc} </div>`;
    divAnswer.innerHTML += `<div class="answer">A divisão ${input1} / ${input2} = ${divisionCalc.toFixed(2)}</div>`;
    divAnswer.innerHTML += `<div class="answer">O resto da divisão de ${input1} % ${input2} = ${divisionModuleCalc}</div>`;
    divAnswer.innerHTML += `<div class="answer">${input1} ^ ${input2} = ${potentiation}</div>`;
    divAnswer.innerHTML += `<div class="answer">A ²√ ${input1} = ${squareRootCalc.toFixed(2)}</div>`;
    divAnswer.innerHTML += `<div class="answer">A ³√ ${input1} = ${rootCubicCalc.toFixed(2)}</div>`;
}