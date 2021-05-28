function calculate() {

    let inputHeight = document.querySelector('#input1').value;
    let inputHeightNumber = Number(inputHeight);
    let inputWidth = document.querySelector('#input2').value;
    let inputWidthNumber = Number(inputWidth);
    let wallArea = inputHeightNumber * inputWidthNumber;
    let divAnswer = document.querySelector('.answer');

    if (inputHeight == "" || inputWidth == "") {

        divAnswer.innerHTML = `<div class="answer error">Informe os dois valores!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">Sua parede com <strong>${inputHeightNumber.toFixed(1)}m</strong> de largura e <strong>${inputWidthNumber.toFixed(1)}m</strong> de altura tem uma área de <strong>${wallArea.toFixed(1)}m²</strong>.</div>`;
        divAnswer.innerHTML += `<div class="answer">Ou seja, serão necessários <strong>${(wallArea/2).toFixed(1)} litros</strong> de tinta para pintar a sua parede!</div>`;
    }
}