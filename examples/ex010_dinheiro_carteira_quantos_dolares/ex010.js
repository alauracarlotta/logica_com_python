function calculate() {

    /* Cotação do dolar em 27/05/2021: R$ 5,24 */

    let inputMoneyInTheWallet = document.querySelector('#input1').value;
    let inputMoneyInTheWalletNumber = Number(inputMoneyInTheWallet);
    let divAnswer = document.querySelector('.answer');

    if (inputMoneyInTheWallet <= -1 || isNaN(inputMoneyInTheWalletNumber)) {

        divAnswer.innerHTML = `<div class="answer error">INFORME UM VALOR VÁLIDO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer true">Com R$${inputMoneyInTheWalletNumber.toFixed(2)} reias você consegue comprar $${(inputMoneyInTheWalletNumber/5.24).toFixed(2)} dólares!</div>`;

    }
}