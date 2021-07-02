function calculate() {

    let inputNumberKm = document.querySelector("#input1").value;
    let inputNumberKmConveted = Number(inputNumberKm);
    let divAnswer = document.querySelector(".answer");

    if (inputNumberKm == "" || inputNumberKm < 0 || isNaN(inputNumberKmConveted)) {
        divAnswer.innerHTML = `<div class="answer error">Informe um valor válido!</div>`;

    } else {

        if (inputNumberKmConveted <= 200) {
            divAnswer.innerHTML = `<div class="answer true">Sendo uma viagem de ${inputNumberKmConveted}km, sua passagem irá custar R$ ${(inputNumberKmConveted * 0.50).toFixed(2)} reais.</div>`;
            divAnswer.innerHTML += `<div class="answer true">OBRIGADO POR VIAJAR CONOSCO!</div>`;

        } else {
            divAnswer.innerHTML = `<div class="answer true">Sendo uma viagem de ${inputNumberKmConveted}km, sua passagem irá custar R$ ${(inputNumberKmConveted * 0.45).toFixed(2)} reais.</div>`;
            divAnswer.innerHTML += `<div class="answer true">OBRIGADO POR VIAJAR CONOSCO!</div>`;
        }
    }
}
