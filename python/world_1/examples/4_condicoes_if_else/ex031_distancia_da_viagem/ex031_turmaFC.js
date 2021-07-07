function calculate() {

    let inputNumberKm = document.querySelector("#input1").value;
    let inputNumberKmConveted = Number(inputNumberKm);
    let divAnswer = document.querySelector(".answer");

    if (inputNumberKm == "" || inputNumberKmConveted < 0 || isNaN(inputNumberKmConveted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

        return;
    }

    let taxa = 0.45;
    if (inputNumberKmConveted <= 200) {
        taxa = 0.50;
    }
    
    divAnswer.innerHTML = `<div class="answer true">Sendo uma viagem de ${inputNumberKmConveted}km, sua passagem irá custar R$ ${(inputNumberKmConveted * taxa).toFixed(2)} reais.</div>`;
    divAnswer.innerHTML += `<div class="answer true">OBRIGADO POR VIAJAR CONOSCO!</div>`;
}