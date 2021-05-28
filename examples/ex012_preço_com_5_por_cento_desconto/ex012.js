function calculate() {

    let inputPrice = document.querySelector('#input1').value;
    let inputPriceNumber = Number(inputPrice);
    let divAnswer = document.querySelector('.answer');

    if (inputPrice == "" || inputPrice <= -1) {

        divAnswer.innerHTML = `<div class="answer error">INFORME UM VALOR VÁLIDO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer">O preço atual é <strong>R$ ${inputPriceNumber.toFixed(2)} reias</strong>!</div>`;
        divAnswer.innerHTML += `<div class="answer">O preço do seu produto com 5% de desconto fica </br> <strong>R$ ${(inputPriceNumber - (inputPriceNumber*5/100)).toFixed(2)} reais</strong>! </br> Boas Compras!!!</div>`;

    }
}
