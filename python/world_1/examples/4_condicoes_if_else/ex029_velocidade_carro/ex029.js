function calculate() {

    let inputKM = document.querySelector("#input1").value;
    let inputKmConverted = Number(inputKM);
    let divAnswer = document.querySelector(".answer");

    if (inputKM == "" || inputKM < 0 || isNaN(inputKmConverted)) {

        divAnswer.innerHTML = `<div class="answer error">Informe um número válido</div>`;

    } else if (inputKmConverted <= 80) {

        divAnswer.innerHTML = `<div class="answer true">Continue assim! Você está no limite de velocidade!</div>`;
        divAnswer.innerHTML += `<div class="answer true">DIRIJA COM CUIDADO!</div>`;

    } else {

        divAnswer.innerHTML = `<div class="answer error">VOCÊ FOI MULTADO!</div>`;
        divAnswer.innerHTML += `<div class="answer error">O LIMITE DE VELOCIDADE É 80km/h!</div>`;
        divAnswer.innerHTML += `<div class="answer error">Por ter excedido ${inputKmConverted - 80}km acima do limite, Você deverá pagar R$${((inputKmConverted - 80) * 7).toFixed(2)}.</div>`;
        divAnswer.innerHTML += `<div class="answer error">DIRIJA COM CUIDADO!</div>`;
    }

    
}