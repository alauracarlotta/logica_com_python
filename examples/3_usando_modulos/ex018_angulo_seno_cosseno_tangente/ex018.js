function calculate() {

    let angle = document.querySelector('#input1').value;
    let angleValue = Number(angle);
    let radians = angleValue * Math.PI/180;
    let divAnswer = document.querySelector('.answer');
    
    if (angle == '' || angleValue <= 0 || angleValue > 360 || isNaN(angleValue)) {

        divAnswer.innerHTML = `<div class="answer error">Informe um ângulo válido!</div>`;

    } else {

        divAnswer.innerHTML = '';
        divAnswer.innerHTML += `<div class="answer">O seno de ${angleValue}° é igual a ${Math.sin(radians).toFixed(3)}</div>`;
        divAnswer.innerHTML += `<div class="answer">O cosseno de ${angleValue}° é igual a ${Math.cos(radians).toFixed(3)}</div>`;
        divAnswer.innerHTML += `<div class="answer">A tangente de ${angleValue}° é igual a ${Math.tan(radians).toFixed(3)}</div>`;

    }
}