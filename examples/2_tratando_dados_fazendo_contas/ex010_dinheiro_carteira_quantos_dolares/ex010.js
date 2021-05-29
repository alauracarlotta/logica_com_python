function calculate() {

    /* Cotação do dolar em 27/05/2021: R$ 5,24 */

    let inputMoneyInTheWallet = document.querySelector('#input1').value;
    let inputMoneyInTheWalletNumber = Number(inputMoneyInTheWallet);
    let divAnswer = document.querySelector('.answer');

    if (inputMoneyInTheWallet <= -1 || isNaN(inputMoneyInTheWalletNumber)) {

        divAnswer.innerHTML = `<div class="answer error">INFORME UM VALOR VÁLIDO!</div>`;

    } else {

        divAnswer.innerHTML = "";
        divAnswer.innerHTML += `<div class="answer false">Sendo a cotação, na data de hoje, 27/05/2021: `;
        divAnswer.innerHTML += `<div class="answer false">$ Dólar R$ 5,24</div>`;
        divAnswer.innerHTML += `<div class="answer false">€ Euro R$ 6,38</div>`;
        divAnswer.innerHTML += `<div class="answer false">£ Libra R$ 7,43</div>`;
        divAnswer.innerHTML += `<div class="answer false">¥ Yen R$ 0,048</div></br>`;
        divAnswer.innerHTML += `<div class="answer true">Com R$${inputMoneyInTheWalletNumber.toFixed(2)} reias você consegue comprar: </div>`; 
        divAnswer.innerHTML += `<div class="answer true"><strong>$${(inputMoneyInTheWalletNumber/5.24).toFixed(2)}</strong> dólares!</div>`;
        divAnswer.innerHTML += `<div class="answer true"><strong>€${(inputMoneyInTheWalletNumber/6.38).toFixed(2)}</strong> euros!</div>`;
        divAnswer.innerHTML += `<div class="answer true"><strong>£${(inputMoneyInTheWalletNumber/7.43).toFixed(2)}</strong> Libras!</div>`;
        divAnswer.innerHTML += `<div class="answer true"><strong>¥${(inputMoneyInTheWalletNumber/0.048).toFixed(2)}</strong> Yens!</div>`;
    }
}