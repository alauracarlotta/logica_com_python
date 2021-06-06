function calculate() {

    let oppositeSide = document.querySelector('#input1').value;
    let oppositeSideValue = Number(oppositeSide);
    let adjacentLeg = document.querySelector('#input2').value;
    let adjacentLegValue = Number(adjacentLeg);
    let divAnswer = document.querySelector('.answer');

    if (oppositeSide == "" || adjacentLeg == "" || oppositeSideValue <= -1 || adjacentLegValue <= -1 || isNaN(oppositeSideValue) || isNaN(adjacentLegValue)) {

        divAnswer.innerHTML = `<div class="answer error">Informe dois valores válidos!</div>`;

    } else {

        divAnswer.innerHTML = `<div class="answer"></div>`;
        divAnswer.innerHTML += `<div class="answer">Com valor de cateto oposto ${oppositeSideValue} e valor de cateto adjacente ${adjacentLegValue},</div>`;
        divAnswer.innerHTML += `<div class="answer">O valor da hipotenusa do retangulo (B,C) é igual a ${Math.hypot(oppositeSide,adjacentLegValue).toFixed(2)}.</br></div>`;

        divAnswer.innerHTML += `<div class="answer">VEJA A RESPOSTA: </div>`;
        divAnswer.innerHTML += `<div class="answer">a² = b² + c² </div>`;
        divAnswer.innerHTML += `<div class="answer">a² = ${oppositeSideValue}² + ${adjacentLegValue}² </div>`;
        divAnswer.innerHTML += `<div class="answer">a² = ${Math.pow(oppositeSideValue, 2)} + ${Math.pow(adjacentLegValue, 2)}</div>`;
        divAnswer.innerHTML += `<div class="answer">a² = ${Math.pow(oppositeSideValue, 2) + Math.pow(adjacentLegValue, 2)}</div>`;
        divAnswer.innerHTML += `<div class="answer">a = √${Math.sqrt(Math.pow(oppositeSideValue, 2) + Math.pow(adjacentLegValue, 2)).toFixed(2)}</div>`;
    }
}